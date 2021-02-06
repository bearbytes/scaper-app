import { createRenderer } from 'fela'
import webPreset from 'fela-preset-web'

export const FelaRenderer = createRenderer({ plugins: [...webPreset] })
