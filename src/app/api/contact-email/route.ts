import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { getJoinFormEmailResponse } from '@/util/sanity/apiFunctions'
import type Mail from 'nodemailer/lib/mailer'
import type { LanguageOptions } from '@/types/language'
import { assert } from '@/util/helpers/assertAndValidate'

const FRIVILLIG_ANSVARLIG = 'halvor.brunt@gmail.com' // TODO remove
const SMTP_HOST = process.env.SMTP_HOST
const NODE_MAILER_MAIL = process.env.NODE_MAILER_MAIL
const NODE_MAILER_PASS = process.env.NODE_MAILER_PASS
const MAX_INPUT_LENGTH = 500
// Asserting to enforce 'string'-type on .env values (dont mind the function name)
assertUserInputStringasserts(SMTP_HOST, 100, '.env variable "SMTP_HOST" is invalid')
assertUserInputStringasserts(NODE_MAILER_MAIL, 100, '.env variable "NODE_MAILER_MAIL" is invalid')
assertUserInputStringasserts(NODE_MAILER_PASS, 100, '.env variable "NODE_MAILER_PASS" is invalid')

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: NODE_MAILER_MAIL,
    pass: NODE_MAILER_PASS,
  },
})

export async function POST(request: Request) {
  const req = await request.json()
  const { userName, userEmail, userAge, job, userMessage, language } = req
  const { emailResponseStatus, destinationEmailAddress } = await getJoinFormEmailResponse()
  //const FRIVILLIG_ANSVARLIG = destinationEmailAddress

  try {
    const { userName_s, userEmail_s, age, job_s, userMessage_s, languageOptions } = AssertInputs(
      userName,
      userEmail,
      userAge,
      job,
      userMessage,
      language
    )

    console.log(userName_s, userEmail_s, age)
    const subject = '[HULEN CONTACT FORM]: ' + userName_s + ', ' + age.toString() + ': ' + job_s
    const message = `Personal information provided (oppgitt personlig informasjon):
    Name (navn): ${userName_s}
      Age (alder):  ${age}
      Job (verv): ${job_s}
      Email (epost): ${userEmail_s}
      
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

    try {
      const mailResp = await sendMailPromise()
      console.log(mailResp)

      return NextResponse.json(
        { message: emailResponseStatus.success[languageOptions] },
        { status: 200 }
      )
    } catch (err) {
      return NextResponse.json(
        { error: err + '\n' + emailResponseStatus.error[languageOptions] },
        { status: 500 }
      )
    }
  } catch (err) {
    console.log(err)
    const error = err as Error

    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

function AssertInputs(
  userName_s?: string,
  userEmail_s?: string,
  userAge?: string,
  job_s?: string,
  userMessage_s?: string,
  language?: string
) {
  assertUserInputStringasserts(userName_s, 100, 'Name must be provided (Navn må være oppgitt)')
  assertUserInputStringasserts(userEmail_s, 100, 'Email must be provided (Epost må være oppgitt)')
  assertUserInputStringasserts(userAge, 3, 'Age must be provided (Alder må være oppgitt)')
  const languageOptions = language as LanguageOptions

  const age = parseInt(userAge)
  assert(
    isFinite(age) && typeof age === 'number' && 18 <= age && age <= 100,
    'Age must be a number (18-100)(Alder må være et tall (18-100)).'
  )

  assertUserInputStringasserts(
    job_s,
    MAX_INPUT_LENGTH,
    'Job must be provided (Verv må være oppgitt).'
  )

  assert(typeof userMessage_s === 'string' && userMessage_s.length < MAX_INPUT_LENGTH)

  return { userName_s, userEmail_s, age, job_s, userMessage_s, languageOptions }
}

function assertUserInputStringasserts(
  value: unknown,
  maxLength: number,
  msg?: string
): asserts value is string {
  assert(typeof value === 'string' && value.length > 0 && value.length < maxLength, msg)
  assert(
    value.length < maxLength,
    `All Inputs must be less or equal to ${maxLength} characters.` +
    `(Alle input må være lik eller mindre enn ${maxLength} tegn)`
  )
}
