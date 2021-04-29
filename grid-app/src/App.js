
import {useRef} from 'react';
import './App.css';

function App() {
  const helloDiv= useRef();
  helloDiv.current ='col3';
   const resetHandler=()=>{
    let prevdiv= document.getElementById(helloDiv.current);
    prevdiv.innerHTML='';
    let div = document.getElementById('col1');
    console.log(div)
    div.innerHTML='X';
    helloDiv.current ='col1';
    }
    const gameHandler = (button)=>{
       let curr = helloDiv.current;
       if(button=='left'){
         if(curr == 'col1'){
          console.log(curr)
          let div = document.getElementById('col1');
          div.innerHTML='X';
         }
         else{
           console.log(`col${parseInt((curr.substring(3))-1)}`,'heelo')
           let prevdiv= document.getElementById(curr);
           prevdiv.innerHTML='';
          let div = document.getElementById(`col${parseInt((curr.substring(3)))-1}`);
          console.log(div)
          div.innerHTML='X';
          helloDiv.current = `col${parseInt((curr.substring(3)))-1}`;

         }

         }
         if(button=='Right'){
          if(curr == 'col9'){
            let prevdiv= document.getElementById(curr);
            prevdiv.innerHTML='';
            let div = document.getElementById('col1');
            div.innerHTML='X';
            helloDiv.current ='col1'
           }
           else{
            let prevdiv= document.getElementById(curr);
            prevdiv.innerHTML='';
            console.log(`col${parseInt(curr.substring(3))+1}`)
            let div = document.getElementById(`col${parseInt(curr.substring(3))+1}`);
            
            div.innerHTML='X';
            helloDiv.current = `col${parseInt(curr.substring(3))+1}`;
  
           }
       }
       if(button=='Top'){
         if(curr=='col1' || curr=='col2' || curr=='col3'){
           return;
         }
         else{
          let prevdiv= document.getElementById(curr);
          prevdiv.innerHTML='';
          console.log(`col${parseInt(curr.substring(3))+1}`)
          let div = document.getElementById(`col${parseInt(curr.substring(3))-3}`);
          
          div.innerHTML='X';
          helloDiv.current = `col${parseInt(curr.substring(3))-3}`;
         }
       }
       if(button=='Bottom'){
        if(curr=='col7' || curr=='col8' || curr=='col9'){
          return;
        }
        else{  
         let prevdiv= document.getElementById(curr);
         prevdiv.innerHTML='';
         
         let div = document.getElementById(`col${parseInt(curr.substring(3))+3}`);
         
         div.innerHTML='X';
         helloDiv.current = `col${parseInt(curr.substring(3))+3}`;
        }
      }
    }

  return (
    <div className="App">
     <div className='container w-100'>
      <div className='row'>
       <div className="col border" style={{height:'50px'}} id='col1' ></div>
       <div className="col border" style={{height:'50px'}} id='col2'></div>
       <div className="col border" style={{height:'50px'}} id='col3'></div>
     </div>
       <div className='row mt-3'>
       <div className="col border" style={{height:'50px'}} id='col4'></div>
       <div className="col border" style={{height:'50px'}} id='col5'></div>
       <div className="col border"style={{height:'50px'}} id='col6'></div>
      </div>
      <div className='row ' style={{marginTop:'15px'}}>
       <div className="col border" style={{height:'50px'}} id='col7'></div>
       <div className="col border" style={{height:'50px'}} id='col8'></div>
       <div className="col border" style={{height:'50px'}} id='col9'></div>
      </div>
    </div>

    <div style={{width:'500px', height:'150px'}} className='container'>
      <button className='d-block'  style={{marginLeft:'165px', marginTop: '41px'}} onClick={()=>gameHandler('Top')} >Top</button>
     <button className='' style={{marginLeft:'-99px'}} onClick={()=>gameHandler('left')} >Left</button>
     <button className='' onClick={()=>gameHandler('Bottom')} >Bottom</button>
      <button onClick={()=>gameHandler('Right')}>Right</button>
    </div>
    <button onClick={()=>resetHandler()}>reset</button>
    </div>
  );
}

export default App;
