import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string
      elevated: string
      secondary: string
      primary: string
      highlight: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
    }
    spacings: {
      none: 0
      S: number
      M: number
    }
  }
}
export type Spacing = 'none' | 'S' | 'M'
export type Color = keyof DefaultTheme['colors']
export type FontSize = keyof DefaultTheme['fontSizes']
