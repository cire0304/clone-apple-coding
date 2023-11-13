
import './App.css';
import { useState } from 'react';


function App() {

  let [titles, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학'])
  let [goods, setgoods] = useState([0, 0, 0]);
  let [modals, setmodals] = useState([false, false, false]);
  let [text, setText] = useState('');

  return (
    <div className="App">

      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>


      <button onClick={() => {
        let copyModals = modals.map((modal => {
          return false;
        }))
        setmodals(copyModals);
      }}>모달 닫기</button>

      {
        titles.map((title, index) => {
          return (
            <div className='list'>
              <h4 onClick={() => { showModal(modals, index, setmodals) }}>
                {title} <span onClick={(e) => { e.stopPropagation(); upvote(goods, index, setgoods) }}>👍</span> {goods[index]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                titles.splice(index,1);
                let copyTitles = [...titles];
                setTitle(copyTitles);
              }}>삭제</button>
            </div>

          )
        })
      }

      <input onChange={(e) => {
        setText(e.target.value);
      }}></input>

      <button onClick={() => {
          let copyTitles = [...titles];
          copyTitles.unshift(text);
          setTitle(copyTitles);
      }}>button</button>

      {
        modals.map((modal, index) => {
          return modal === true
            ? <Modal title={titles[index]} button={() => changeTitle(titles, index, setTitle)} /> : null;
        })
      }

    </div>
  );
}

const changeTitle = (titles, index, setTitle) => {
  let copyTitles = [...titles];
  copyTitles[0] = "여자";
  setTitle(copyTitles);
}

const upvote = (goods, index, setgoods) => {
  let copygoods = [...goods];
  copygoods[index]++;
  setgoods(copygoods);
}

const showModal = (modals, index, setmodals) => {
  let copyModals = modals.map((modal => {
    return false;
  }))
  copyModals[index] = true;
  setmodals(copyModals);
}

const Modal = (props) => {
  const button = props.button;
  return (
    <div className='modal'>
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={button}>button</button>
    </div>
  )
}

export default App;
