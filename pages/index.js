import React from 'react'
import fetch from 'isomorphic-fetch'

import style from './style.scss'
// or, if you work with plain css
// import style from './style.css'

export default () =>
  <div>
    <style>{ style }</style>
    <p>ciao</p>
  </div>
