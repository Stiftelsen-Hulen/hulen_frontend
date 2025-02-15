import type { JoinEmailFormContent } from '@/types/sanity/joinUsPage/joinEmailForm'
import type { Position } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import type { SelectChangeEvent } from '@mui/material'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Paper,
  Stack,
  TextField,
} from '@mui/material'
import { useState } from 'react'
/**
 * The layout for the benefit section on the Join us Page
 * @param param0
 * @returns
 */
export const JoinEmailForm = ({
  content,
  positions,
}: {
  content: JoinEmailFormContent
  positions: Position[]
}) => {
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userAge: '20',
    job: positions[0].title[language],
    userMessage: '',
    language: language,
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const json = JSON.stringify(formData)
    console.log(json)
    let responseMessage
    try {
      const response = await fetch('/api/contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
      })

      const result = await response.json() // TODO: use this value?
      console.log(response)
      console.log(result)
      if (response.ok) {
        responseMessage = 'Email sent successfully!'
      } else {
        responseMessage = 'Something went wrong.'
      }
    } catch (error) {
      responseMessage = 'An error occurred. Please try again later.' + error
    } finally {
      return responseMessage
    }
  }

  return (
    <Paper elevation={3}>
      <Stack>
        <Box component='form' onSubmit={handleSubmit} id='contactForm'>
          <p>{content.emailFormTitle[language]}</p>
          <FormControl fullWidth>
            <TextField
              name='userEmail'
              label={content.emailFormLabel[language]}
              onChange={handleChange}
              margin='normal'
            ></TextField>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name='userName'
              label={content.nameFormLabel[language]}
              onChange={handleChange}
              margin='normal'
            ></TextField>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name='userAge'
              label={content.ageFormLabel[language]}
              type='number'
              margin='normal'
              onChange={handleChange}
              defaultValue={20}
              variant='filled'
              helperText='(18-100)'
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='form-job-label' variant='standard'>
              Job
            </InputLabel>
            <NativeSelect
              name='job'
              id='demo-simple-select'
              value={formData.job}
              onChange={handleChange}
            >
              {positions.map((position) => (
                <option key={position.title[language]} value={position.title[language]}>
                  {position.title[language]}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name='userMessage'
              margin='normal'
              multiline
              label={content.relevantInfoFormLabel[language]}
              onChange={handleChange}
            ></TextField>
          </FormControl>
          <Button
            color='secondary' // hulen yellow, see theme.ts
            variant='positionButton'
            disableElevation
            onClick={(e) => {
              handleSubmit(e).then((result) => alert(result))
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}
