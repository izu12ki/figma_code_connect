/**
 * Figma Code Connect for Button component
 */

import figma from '@figma/code-connect'
import { Button } from './button'

figma.connect(Button, 'https://www.figma.com/file/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=BUTTON_NODE_ID', {
  props: {
    // Figmaのvariantプロパティとマッピング
    variant: figma.enum('Variant', {
      default: 'default',
      destructive: 'destructive',
      outline: 'outline',
      secondary: 'secondary',
      ghost: 'ghost',
      link: 'link',
    }),
    size: figma.enum('Size', {
      default: 'default',
      sm: 'sm',
      lg: 'lg',
      icon: 'icon',
    }),
    disabled: figma.boolean('Disabled'),
    children: figma.textContent('Button Text'),
  },
  example: ({ variant, size, disabled, children }) => (
    <Button variant={variant} size={size} disabled={disabled}>
      {children}
    </Button>
  ),
})