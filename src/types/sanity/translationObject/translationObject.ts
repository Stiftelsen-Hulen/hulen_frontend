import type { SupportedLanguageTypes } from '@/configs'

export interface TranslationObject {
  identifier: string
  content: Record<SupportedLanguageTypes, string>
}
