import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { getJoinFormEmailApi } from '@/util/sanity/apiFunctions'
import type Mail from 'nodemailer/lib/mailer'
import type { LanguageOptions } from '@/types/language'
import { assert } from '@/util/helpers/assertAndValidate'
import isValidNumber from 'intl-tel-input'

const SMTP_HOST = process.env.SMTP_HOST
const NODE_MAILER_MAIL = process.env.NODE_MAILER_MAIL
const NODE_MAILER_PASS = process.env.NODE_MAILER_PASS
const MAX_INPUT_LENGTH = 500

const EmailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: NODE_MAILER_MAIL,
    pass: NODE_MAILER_PASS,
  },
  disableFileAccess: true, // disables file access in message & attachment
  disableUrlAccess: true, // disables URLs in content
})

export async function POST(request: Request) {
  const req = await request.json()
  const { userName, userEmail, userAge, phoneNumber, job, userMessage, language } = req
  const { positionsWrapper, emailForm } = await getJoinFormEmailApi()
  const { emailResponseStatus } = emailForm
  const positions = positionsWrapper.positions
  // Replace "frivillig@hulen.no" with personal email for testing / debug
  const FRIVILLIG_ANSVARLIG = 'frivillig@hulen.no'

  try {
    const { userName_s, userEmail_s, age, phoneNumber_s, job_s, userMessage_s, languageOptions } =
      AssertInputs(userName, userEmail, userAge, phoneNumber, job, userMessage, language)

    console.log(userName_s, userEmail_s, age)
    const subject = '[HULEN CONTACT FORM]: ' + userName_s + ', ' + age.toString() + ': ' + job_s
    const message = `Personal information provided (oppgitt personlig informasjon):
      Name (navn): ${userName_s}
      Age (alder):  ${age}
      Job (verv): ${job_s}
      Email (epost): ${userEmail_s}
      Phone number (telefon nummer): ${phoneNumber_s}
      
  Below is the provided message (nedenfor er melding gitt av brukeren):
  -----------------------------------------
  ${userMessage_s}
  
  -----------------------------------------
  Kind Regards / Vennlig Hilsen
  Hulen's Mailing Service`
    const mailOptions: Mail.Options = {
      from: NODE_MAILER_MAIL,
      to: FRIVILLIG_ANSVARLIG,
      cc: userEmail_s,
      subject: subject,
      text: message,
    }
    // Mail function behaviour
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err) {
          if (!err) {
            console.log('Email was sent: {user: ' + userEmail_s + '}')
            resolve('Email sent')
          } else {
            reject(err.message)
          }
        })
      })

    // Sending the mail
    try {
      const mailResp = await sendMailPromise()
      console.log(mailResp)

      return NextResponse.json(
        { message: emailResponseStatus.success[languageOptions] },
        { status: 200 }
      )
    } catch (err) {
      // mail client fail
      return NextResponse.json(
        { error: err + '\n' + emailResponseStatus.error[languageOptions] },
        { status: 500 }
      )
    }
  } catch (err) {
    // input validation fail
    console.log(err)
    const error = err as Error

    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  function AssertInputs(
    userName_s?: string,
    userEmail_s?: string,
    userAge?: string,
    phoneNumber_s?: string,
    job_s?: string,
    userMessage_s?: string,
    language?: string
  ) {
    assertUserInputStringasserts(userName_s, 100, 'Name must be provided (Navn må være oppgitt)')
    assertUserInputStringasserts(userEmail_s, 100, 'Email must be provided (Epost må være oppgitt)')
    assert(EmailRegEx.test(userEmail_s), 'Invalid Email format (Ugyldig epost format).')
    assertUserInputStringasserts(userAge, 3, 'Age must be provided (Alder må være oppgitt)')
    const age = parseInt(userAge)
    assert(
      typeof age === 'number' && isFinite(age) && 18 <= age && age <= 100,
      'Age must be a number (18-100)(Alder må være et tall (18-100)).'
    )
    // intl-tel-input's phone number validation function depends on the frontend. In backend we assume that the phone number is the correct format. Only check for length abuse.
    assertUserInputStringasserts(phoneNumber_s, MAX_INPUT_LENGTH, 'Phone number must be provided (Telefonnummer må være oppgitt).')
    assertUserInputStringasserts(
      job_s,
      30,
      'Job must be provided (Verv må være oppgitt).'
    )
    const languageOptions = language as LanguageOptions
    assert(
      positions.map((p) => p.title[languageOptions]).indexOf(job_s) > -1,
      'You must pick a valid job (Du må velge et gyldig verv).'
    )
    assert(typeof userMessage_s === 'string' && userMessage_s.length < MAX_INPUT_LENGTH)

    return { userName_s, userEmail_s, age, phoneNumber_s, job_s, userMessage_s, languageOptions }
  }

  function assertUserInputStringasserts(
    value: unknown,
    maxLength: number,
    msg?: string
  ): asserts value is string {
    assert(typeof value === 'string' && value.length >= 0 && value.length < maxLength, msg)
    assert(
      value.length < maxLength,
      `Input must be less or equal to ${maxLength} characters.` +
      `(Input strørrelsen må være mindre eller lik ${maxLength} tegn)`
    )
  }
}
