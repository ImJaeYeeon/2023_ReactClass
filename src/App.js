import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '찬실은복도많지!'
  //document.querySelectorAll('h4')[0].innerHTML = post;
  /*let [제목1, b1]=useState('찬실은복도많지');
  let [제목2, b2]=useState('내서랍속에 행복');
  let [제목3, b3]=useState('컴온컴온');*/

  let[제목들, 제목변경] = useState(['찬실은복도많지','내서랍속에','컴온컴온']);
  let[like, likeAdd] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : 'yellow', fontSize:'22px' }}>힐링영화</h4>
      </div>
      <button onClick={()=>{
        let copy1 = [...제목들];
        copy1[0] = '벌새';
        //copy1[1] = '타이타닉';
        //copy1[2] = '인터스텔라';
        제목변경(copy1);
      }}>신규영화</button>
      <div className='list'>
        <h4>{제목들[0]}<span onClick={()=>{likeAdd(like+1)}}>👍</span>{like}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        <h4>{제목들[1]}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        <h4>{제목들[2]}</h4>
        <p>4월18일</p>
      </div>
    </div>
  );
}

export default App;
