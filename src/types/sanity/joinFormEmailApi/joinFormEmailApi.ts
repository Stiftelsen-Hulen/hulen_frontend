import type { LanguageOptions } from '@/types/language'

export interface JoinFormEmailApi {
  positionsWrapper: {
    positions: { title: Record<LanguageOptions, string> }[]
  }
  emailForm: {
    emailResponseStatus: {
      success: Record<LanguageOptions, string>
      error: Record<LanguageOptions, string>
    }
  }
}
