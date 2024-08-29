import { LanguageOptions } from "@/types/language/LanguageOptions";
import { TechCategories } from "./techCategories";


export interface TechInfoPageContent {
  header: Record<LanguageOptions, string>
  email: string
  emailDescription: Record<LanguageOptions, string>
  categories: TechCategories[]
}
