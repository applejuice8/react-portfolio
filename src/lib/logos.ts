import type { AnyLogo } from '../data/types'

/** The file to show: the single file if the logo has one, otherwise the light or dark file for the current theme. */
export function logoFile(logo: AnyLogo, isLight: boolean): string {
    return 'file' in logo ? logo.file : isLight ? logo.light : logo.dark
}
