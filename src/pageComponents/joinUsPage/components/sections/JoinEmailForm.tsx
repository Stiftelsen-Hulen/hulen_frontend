import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import type { LanguageOptions } from '@/types/language'
import type { JoinEmailFormContent } from '@/types/sanity/joinUsPage/joinEmailForm'
import type { Position } from '@/types/sanity/joinUsPage/position'
import { assert } from '@/util/helpers/assertAndValidate'
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
  const getLanguage = () => localStorage.getItem('language') as LanguageOptions
  const language = getLanguage()
  const MaxInputFieldSize = 500

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userAge: '20',
    job: positions[0].title[getLanguage()],
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
      const language_localstorage = getLanguage()
      assertUserInputs(formData.userName, 'Name (Navn)')
      assertUserInputs(formData.userEmail, 'Email (Epost)')
      // NOTE: is only a format check. Cannot check if email is real. That would require verification links to be clickd by the user.
      assert(EmailRegEx.test(formData.userEmail), 'Invalid Email format (Ugyldig epost format).')
      assertUserInputs(formData.userAge, 'Age (Alder)')
      assertUserInputs(formData.job, 'Job (Verv)')
      assert(
        positions.map((p) => p.title[language_localstorage]).indexOf(formData.job) > -1,
        'You must pick a valid job (Du må velge et gyldig verv).'
      )
      assertUserInputs(
        formData.userMessage,
        'Other relevant information (Annen relevant informasjon)',
        -1
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
        responseMessage = 'Email sent! You should receive a confirmation email shortly.'
      } else {
        responseMessage = 'Something went wrong.'
      }
    } catch (error) {
      responseMessage = 'An error occurred. Please try again later.' + error
    } finally {
      return responseMessage
    }
  }
  function assertUserInputs(
    value: unknown,
    inputName: string,
    minSize = 0
  ): asserts value is string {
    assert(typeof value === 'string', 'input must be a string')
    assert(
      value.length > minSize && value.length < MaxInputFieldSize,
      `Input: ${inputName}.\n` +
      `Input size must be less or equal to ${MaxInputFieldSize} characters.\n` +
      `(Input størrelsen må være mindre eller lik ${MaxInputFieldSize} tegn).`
    )
  }

  return (
    <Paper elevation={3}>
      <Stack sx={{ backgroundColor: hulen_black }}>
        <Box
          component='form'
          onSubmit={handleSubmit}
          id='contactForm'
          sx={{
            backgroundColor: hulen_black,
            BorderColor: hulen_yellow,
            border: '1px solid',
            borderRadius: '16px',
            padding: '1em',
          }}
        >
          <p style={{ textDecorationLine: 'underline', fontSize: '1.5em' }}>
            {content.emailFormTitle[language]}
          </p>
          <FormControl fullWidth>
            <TextField
              required
              name='userEmail'
              onChange={handleChange}
              label={content.emailFormLabel[language]}
              margin='normal'
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
              helperText='(18-100)'
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='form-job-label' variant='standard' color='secondary'>
              Job
            </InputLabel>
            <NativeSelect
              required
              name='job'
              id='demo-simple-select'
              variant='outlined'
              value={formData.job}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-input': {
                  backgroundColor: hulen_black,
                  border: '1px solid ' + hulen_yellow,
                  padding: '16px 26px 16px 12px',
                  '&:focus': {
                    borderColor: hulen_yellow,
                  },
                },
              }}
            >
              {positions.map((position) => (
                <option
                  key={position.title[language]}
                  value={position.title[language]}
                  style={{ backgroundColor: '#282828', color: hulen_yellow_text }}
                >
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
          <div style={{ marginTop: '5px', alignItems: 'end' }}>
            <Button
              color='secondary'
              variant='positionButton'
              disableElevation
              onClick={(e) => {
                handleSubmit(e).then((result) => alert(result))
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Stack>
    </Paper>
  )
}
