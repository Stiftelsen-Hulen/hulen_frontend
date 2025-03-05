import type { JoinEmailFormContent } from '@/types/sanity/joinUsPage/joinEmailForm'
import type { Position } from '@/types/sanity/joinUsPage/position'
import { assert } from '@/util/helpers/assertAndValidate'
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

const EmailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

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
  const MaxInputFieldSize = 500

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userAge: '20',
    job: positions[0].title[language],
    userMessage: '',
    language: language,
  })

  // Updates the key:value pairs in the form on change.
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Validates input and then submits the form to the Contact-Email Api
  const handleSubmit = async (e: React.FormEvent) => {
    let json: string
    try {
      e.preventDefault()
      assertUserInputs(formData.userName, 'Name (Navn)')
      assertUserInputs(formData.userEmail, 'Email (Epost)')
      assert(EmailRegEx.test(formData.userEmail), 'Invalid Email format (Ugyldig epost format).')
      assertUserInputs(formData.userAge, 'Age (Alder)')
      assertUserInputs(formData.job, 'Job (Verv)')
      assert(
        positions.map((p) => p.title[language]).indexOf(formData.job) > -1,
        'You must pick a valid job (Du må velge et gyldig verv).'
      )
      assertUserInputs(
        formData.userMessage,
        'Other relevant information (Annen relevant informasjon)'
      )

      json = JSON.stringify(formData)
      console.log(json)
    } catch (error) {
      console.log(error)

      return error
    }
    let responseMessage
    try {
      const response = await fetch('/api/contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
      })

      console.log(response)

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
  function assertUserInputs(value: unknown, inputName: string): asserts value is string {
    assert(typeof value === 'string', 'input must be a string')
    assert(
      value.length > 0 && value.length < MaxInputFieldSize,
      `Input: ${inputName}.\n` +
      `Input size must be less or equal to ${MaxInputFieldSize} characters.\n` +
      `(Input størrelsen må være mindre eller lik ${MaxInputFieldSize} tegn).`
    )
  }

  return (
    <Paper elevation={3}>
      <Stack>
        <Box component='form' onSubmit={handleSubmit} id='contactForm'>
          <p>{content.emailFormTitle[language]}</p>
          <FormControl fullWidth>
            <TextField
              required
              name='userEmail'
              label={content.emailFormLabel[language]}
              onChange={handleChange}
              margin='normal'
              type='email'
            ></TextField>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
              name='userName'
              label={content.nameFormLabel[language]}
              onChange={handleChange}
              margin='normal'
            ></TextField>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
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
              required
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
              required
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
