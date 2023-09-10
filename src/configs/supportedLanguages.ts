/**
 * Globaly defined which languages are supported in application.
 */
export type SupportedLanguageTypes = 'en' | 'no'

/**
 * Globaly defined list of all languages are supported in application. Used so there is only one source of truth, extend this object if adding new languages to support
 */
export const supportedLanguages: SupportedLanguageTypes[] = ['en', 'no']
