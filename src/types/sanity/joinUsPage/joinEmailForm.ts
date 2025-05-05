import type { LanguageOptions } from '@/types/language'

export interface JoinEmailFormContent {
  destinationEmailAddress: string
  emailFormTitle: Record<LanguageOptions, string>
  emailFormLabel: Record<LanguageOptions, string>
  nameFormLabel: Record<LanguageOptions, string>
  ageFormLabel: Record<LanguageOptions, string>
  phoneFormLabel: Record<LanguageOptions, string>
  jobFormLabel: Record<LanguageOptions, string>
  relevantInfoFormLabel: Record<LanguageOptions, string>
}
