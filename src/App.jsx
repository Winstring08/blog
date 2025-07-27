/*eslint-disable*/

import './App.css'
import { useState } from 'react';

function App() {
  let getNowDate = () => {
    const today = new Date()
    return new Date().getFullYear() + "년 "
      + today.getDate() + "일 "
      + today.getHours() + "시 "
      + today.getMinutes() + "분 "
      + today.getSeconds() + "초 "
  }
  
  let [inputText, setInputText] = useState('')

  let [title, setTitle] = useState(['1', '2', '3']);

  let [like, setLike] = useState(title.map(() => {
    console.log("싫행여부확인")
    return 0
  }))

  let [date, setDate] = useState(title.map(() => {
    return getNowDate()
  }
  ))

  let [isModal, setIsModal] = useState(false)

  let changeTitle = () => {
    let changedTitle = [...title]
    changedTitle[0] = '여자코트 추천';
    setTitle(changedTitle)
  }

  let deletePost = (index) => {
    let copyTitle = [...title]
    copyTitle.splice(index, 1)
    setTitle(copyTitle)
  }

  let addPost = () => {
    if (inputText == "") {
      return
    }
    let tempTitle = [...title]
    tempTitle.unshift(inputText)
    setTitle(tempTitle)
    setLike(() => {
      let tempLike = [...like]
      tempLike.push(0)
      return tempLike
    })

    setDate(() => {
      let tmpDate = [...date]
      tmpDate.unshift(getNowDate())
      return tmpDate
    })
  }

  let storeInputText = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div className="App">
      {console.log("like = " + like)}
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
          <div className="list" key={index}>
            <h4 onClick={() => { setIsModal(!isModal) }}>{item}
              <span onClick={(e) => {
                e.stopPropagation()
                let newLike = [...like]
                newLike[index] = newLike[index] + 1
                setLike(newLike)
              }}>❤️ {like[index]}</span>
            </h4>

            <button onClick={changeTitle}> 수정버튼 </button>
            <button onClick={() => { deletePost(index) }}> ❌ </button>
            <p> {date[index]}발행</p>
          </div>
        )
      })}

      {isModal ? <Modal changeTitle={changeTitle} addPost={addPost} storeInputText={storeInputText}></Modal> : ''}

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
      <input type="text" onChange={props.storeInputText} />
      <button onClick={props.addPost}>➕</button>
    </div>
  )
}



export default App
