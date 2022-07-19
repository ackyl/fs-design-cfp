import styled from 'styled-components'

interface SpacerProps {
  margin?: string
  padding?: string
  width?: string
  height?: string
  flex?: number
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  backgroundColor?: string
}

export default styled.div<SpacerProps>`
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex: ${(props) => props.flex};
  flexdirection: ${(props) => props.flexDirection};
  justifycontent: ${(props) => props.justifyContent};
  alignitems: ${(props) => props.alignItems};
  backgroundcolor: ${(props) => props.backgroundColor};
`
