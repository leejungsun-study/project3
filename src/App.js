import {PicList} from './data.js';
import './App.css';
import {useState} from 'react';


function App() {
   const [index, setIndex] = useState(0);
   const [show, setShow] =useState(false);

   function handleClick() {
    index>=5 ? setIndex(index-5) : setIndex(index+1)
   }

   function handleShow(){
      setShow(!show)
   }

  let Pic =  PicList[index]
  return (
     <div id="wrap">
        <h1>데이터 배열객체 불러오기 </h1>
        <hr></hr>
        <button onClick={handleClick}>next</button>
         <div className='box'>
          <h2>현재갤러리 번호- {index+1}/ 전체 갤러리 수 {PicList.length}</h2>  
         <h2 className="blue"> 작품명 : {Pic.name}</h2>
         <h2 className="right">작가명 : {Pic.artist}</h2>
         <h2>작품 설명</h2>
         <button onClick={handleShow}>작품 설명 {show ? "감추라" : "보여라" }</button>          {show && <p>{Pic.description} </p> }
         <h2>작품 사진 이미지</h2>
            <img src= {Pic.url} alt={Pic.alt}></img>
         </div>
        
        
      

     
    
       
     </div>
  );
}

export default App;
