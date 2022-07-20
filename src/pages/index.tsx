import * as React from 'react'
import '../global.css'
import MainWrapper from '../components/default/MainWrapper'
import { Text, TextTypes } from '../components/default/Text'

const IndexPage = () => {
  return (
    <MainWrapper>
      <Text type={TextTypes.hero}>Test Hero Text</Text>
    </MainWrapper>
  )
}

export default IndexPage
