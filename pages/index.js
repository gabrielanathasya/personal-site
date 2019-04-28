import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
// import avatar from '../assets/images/avatar'
// import avatar from './styles'
// import { styles } from '../pages/styles'
import { styles } from './styles'

function Home() {
  return (
    <div css={styles}>
      Welcome to my personal site
      {/* <img src={avatar} /> */}
    </div>
  )
}

export default Home
