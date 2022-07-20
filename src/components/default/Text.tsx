import styled from 'styled-components'

export enum TextTypes {
  hero = 'hero',
}

interface TextProps {
  type: TextTypes
}

const TextProperties = {
  hero: {
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: 700,
  },
}

export const Text = styled.p<TextProps>`
  font-size: ${(p) => TextProperties[p.type].fontSize};
  line-height: ${(p) => TextProperties[p.type].lineHeight};
  font-weight: ${(p) => TextProperties[p.type].fontWeight};
`
