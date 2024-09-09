import type { LanguageOptions } from '@/types/language'
import type { TechCategories } from './techCategories'

export interface TechInfoPageContent {
  header: Record<LanguageOptions, string>
  email: string
  emailDescription: Record<LanguageOptions, string>
  categories: TechCategories[]
}
