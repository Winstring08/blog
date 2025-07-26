/*eslint-disable*/

import './App.css'
import { useState } from 'react';

function App() {
  { }
  let [title, setTitle] = useState(['강남 우동 맛집', '역삼 우동 맛집', '산곡동 우동 맛집']);
  let [like, setLike] = useState(title.map(() => {
    return 0
  }))
  let [isModal, setIsModal] = useState(false)
  let changeTitle = () => {
    let changedTitle = [...title]
    changedTitle[0] = '여자코트 추천';
    setTitle(changedTitle)
  }
  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 blog</div>
        <p></p>
      </div>

      <div>
        <button onClick={() => {
          let iteredTitle = [...title]
          setTitle(iteredTitle.sort())
        }}> 정렬</button>
      </div>

      {title.map((item, index) => {
        return (
          <div className="list" key={"list" + index}>
            <h4 onClick={() => { setIsModal(!isModal) }}>{item}</h4> <span onClick={() => {
              let newLike = [...like]
              newLike[index] = newLike[index] + 1
              setLike(newLike)
            }}>❤️ {like[index]}</span>

            <button onClick={changeTitle}> 수정버튼 </button>

            <p>2월 17일 발행</p>
          </div>
        )
      })}

      {isModal ? <Modal changeTitle={changeTitle}></Modal> : ''}

    </div>
  )
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>🍄</button>
    </div>
  )
}



export default App
