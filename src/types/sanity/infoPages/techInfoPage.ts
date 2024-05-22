import { LanguageOptions } from "@/types/language/LanguageOptions";
import { TechCategories } from "./techCaterories";


export interface TechInfoPageContent {
  header: Record<LanguageOptions, string>
  email: string
  emailDescription: Record<LanguageOptions, string>
  categories: TechCategories[]
}