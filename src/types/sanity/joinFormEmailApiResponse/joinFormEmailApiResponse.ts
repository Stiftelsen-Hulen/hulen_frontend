import type { LanguageOptions } from '@/types/language'

export interface JoinFormEmailResponse {
  destinationEmailAddress: string
  emailResponseStatus: {
    success: Record<LanguageOptions, string>
    error: Record<LanguageOptions, string>
  }
}
