/**
 * Figma Code Connect for Input component
 */

import figma from '@figma/code-connect'
import { Input } from './input'

figma.connect(Input, 'https://www.figma.com/file/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=INPUT_NODE_ID', {
  props: {
    placeholder: figma.textContent('Placeholder'),
    disabled: figma.boolean('Disabled'),
    type: figma.enum('Type', {
      text: 'text',
      password: 'password',
      email: 'email',
      number: 'number',
    }),
  },
  example: ({ placeholder, disabled, type }) => (
    <Input
      placeholder={placeholder}
      disabled={disabled}
      type={type}
    />
  ),
})