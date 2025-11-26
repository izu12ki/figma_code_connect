/**
 * Figma Code Connect for Card components
 */

import figma from '@figma/code-connect'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'

// Base Card component
figma.connect(Card, 'https://www.figma.com/file/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=CARD_NODE_ID', {
  props: {
    children: figma.children('*'),
  },
  example: ({ children }) => (
    <Card>
      {children}
    </Card>
  ),
})

// Card with Header and Content
figma.connect(Card, 'https://www.figma.com/file/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=CARD_WITH_HEADER_NODE_ID', {
  props: {
    title: figma.textContent('Card Title'),
    description: figma.textContent('Card Description'),
    content: figma.children('Card Content'),
  },
  example: ({ title, description, content }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  ),
})