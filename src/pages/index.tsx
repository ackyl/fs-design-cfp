import * as React from 'react'
import '../global.css'
import MainWrapper from '../components/default/MainWrapper'
import Spacer from '../components/default/Spacer'
import Image from '../components/default/Image'

const IndexPage = () => {
  return (
    <MainWrapper>
      <Spacer margin="40px"></Spacer>
      <Image src="/images/test.png"></Image>
    </MainWrapper>
  )
}

export default IndexPage
