import { hulen_black, hulen_yellow, hulen_yellow_text } from '@/styles'
import type { JoinEmailFormContent } from '@/types/sanity/joinUsPage/joinEmailForm'
import type { Position } from '@/types/sanity/joinUsPage/position'
import { assert } from '@/util/helpers/assertAndValidate'
import { useLanguage } from '@/util/LanguageContext'
import type { SelectChangeEvent } from '@mui/material'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  NativeSelect,
  Paper,
  Stack,
  styled,
  TextField,
} from '@mui/material'

import { useState } from 'react'
import { no, en } from 'intl-tel-input/i18n'
import IntlTelInput from 'intl-tel-input/reactWithUtils'
import 'intl-tel-input/styles'
import type { LanguageOptions } from '@/types/language'

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

  function phonePluginLanguage(l: LanguageOptions) {
    if (l == 'en') {
      return en
    }

    return no
  }

  const MaxInputFieldSize = 500

  const IsAPosition = (pos: string) => positions.map((p) => p.title[language]).indexOf(pos) > -1

  let isValidPhoneNumber = false
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userAge: '20',
    phoneNumber: '',
    job: positions[0].title[language],
    userMessage: '',
    language: language,
  })
  if (!IsAPosition(formData.job)) {
    formData.job = positions[0].title[language]
  }
  // Updates the key:value pairs in the form on change.
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target
    console.log(formData)
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Validates input and then submits the form to the Contact-Email Api
  const handleSubmit = async (e: React.FormEvent) => {
    let json: string
    try {
      e.preventDefault()
      assertUserInputs(formData.userName, 'Name (Navn)')
      assertUserInputs(formData.userEmail, 'Email (Epost)')
      // NOTE: is only a format check. Cannot check if email is real. That would require verification links to be clickd by the user.
      assert(EmailRegEx.test(formData.userEmail), 'Invalid Email format (Ugyldig epost format).')
      assertUserInputs(formData.userAge, 'Age (Alder)')
      assert(isValidPhoneNumber != false, 'Invalid phone number (Ugylding telefon nummer)')
      // assertUserInputs(formData.phoneNumber, 'Phone Number (Telefon nummer)')
      assertUserInputs(formData.job, 'Job (Verv)')
      assert(IsAPosition(formData.job), 'You must pick a valid job (Du må velge et gyldig verv).')
      assertUserInputs(
        formData.userMessage,
        'Other relevant information (Annen relevant informasjon)',
        -1
      )
      // Update language in case user changed language-context
      formData.language = language
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
        responseMessage =
          'Email sent! You should receive a confirmation email shortly. Remember to check your spam folder. ' +
          '(Epost sent! Du skal motta en bekreftelse snarlig. Husk å sjekke spam-mappen!)'
      } else {
        responseMessage = 'Something went wrong. (Noe gikk galt).'
      }
    } catch (error) {
      responseMessage =
        'An error occurred. Please try again later. (Det oppstod en feil. Prøv igjen senere): ' +
        error
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

  /*To override intlTelInput's css*/
  const PhoneInputWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    marginTop: '4px',
    '& .iti': {
      width: '100%',
    },
    '& .iti * ': {
      fontSize: '22px',
      backgroundColor: hulen_black,
      color: hulen_yellow_text,
    },
    '& .iti__tel-input': {
      width: '100%',
      padding: '16px 26px 16px 12px',
      border: '0.5px solid ' + hulen_yellow_text,
      borderRadius: '4px',
      outline: 0,
    },
    // Trying to get border to behave as other inputs when in focus
    // '& .iti__tel-input:focus': {
    //   width: '100%',
    //   height: '100%',
    //   borderWidth: '3px',
    //   borderColor: hulen_yellow_text,
    //   padding: '16px 26px 16px 12px',
    // },
    '& .iti__country-container': {
      marginLeft: '2px',
    },
    '& .iti__arrow': {
      //* css triangle
      borderTop: '4px solid ' + hulen_yellow_text,
    },
    '& .iti__arrow--up': {
      borderBottom: '4px solid ' + hulen_yellow_text + 'A6', //trasparency
    },
    '& .iti__dropdown-content': {
      border: '0.5px solid ' + hulen_yellow_text,
    },
    ' & .iti__search-input': {
      borderBottom: '0.5px solid ' + hulen_yellow_text,
      borderRadius: 0,
    },
  }))

  return (
    <Paper elevation={3}>
      <Stack sx={{ backgroundColor: hulen_black }}>
        <Box
          component='form'
          onSubmit={handleSubmit}
          id='contactForm'
          sx={{
            backgroundColor: hulen_black,
            borderColor: hulen_yellow,
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
          <PhoneInputWrapper>
            <InputLabel
              id='form-phone-label'
              variant='standard'
              sx={{
                color: hulen_yellow_text,
                backgroundColor: hulen_black,
                padding: '4px',
                transformOrigin: 'top left',
                whiteSpace: 'nowrap',
                position: 'absolute',
                transform: 'translate(12px, -14px) scale(0.75)',
                zIndex: '2',
              }}
            >
              {content.phoneFormLabel[language]}
            </InputLabel>
            <IntlTelInput
              onChangeNumber={(phoneNumber) => (formData.phoneNumber = phoneNumber)}
              onChangeValidity={(boolean) => (isValidPhoneNumber = boolean)}
              initOptions={{
                i18n: phonePluginLanguage(language) /*Translate phone-form to client-language */,
                initialCountry: 'NO',
                countryOrder: ['no', 'se', 'dk', 'fi', 'de', 'at', 'it', 'ea', 'fr'],
                // containerClass: 'MuiFormControl-root MuiFormControl-fullWidth ',
                strictMode: false /*only optional (leading) plus, and numbers */,
                hiddenInput: (telInputName) => ({
                  /* Sends the full international phone number and the country code*/
                  phone: 'phone_full',
                  country: 'country_code',
                }),
              }}
            />
          </PhoneInputWrapper>
          <FormControl fullWidth>
            <InputLabel
              id='form-job-label'
              variant='standard'
              sx={{
                color: hulen_yellow_text,
                backgroundColor: hulen_black,
                padding: '4px',
                transformOrigin: 'top left',
                whiteSpace: 'nowrap',
                position: 'absolute',
                transform: 'translate(12px, 4px) scale(0.75)',
                zIndex: '1',
              }}
            >
              {content.jobFormLabel[language]}
            </InputLabel>
            <NativeSelect
              required
              name='job'
              variant='outlined'
              value={formData.job}
              onChange={handleChange}
              input={<Input disableUnderline />} // removes blue underline
              sx={{
                position: 'relative',
                '& .Mui-focused': {
                  borderColor: 'black',
                  borderWidth: '3px',
                },
                '& .MuiInputBase-input': {
                  backgroundColor: hulen_black,
                  border: '1px solid ' + hulen_yellow,
                  padding: '16px 26px 16px 12px',
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
