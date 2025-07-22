/*eslint-disable*/

import './App.css'
import { useState } from 'react';

function App(){
 
  let [title, func] = useState(['강남 우동 맛집', '역삼 우동 맛집', '산곡동 우동 맛집']);
  let [like, chg] = useState()
  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 blog</div>
        <span>❤️</span>
        <p></p>
      </div>

      <div className="list">
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  )
}

export default App
