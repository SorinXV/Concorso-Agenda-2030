import React, { useState, useRef} from "react";
import '../styles/quiz.css'
import {questions} from '../data/domande'
import axios from "axios";


let answ = [];

export default function Quiz(){ 
  let[index, setIndex] =  useState(0);
  let[question, setQuestion] = useState(questions[index]);
  let[lock, setLock] = useState(false);
  let[score, setScore] = useState(0);
  let[result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const hasCompletedQuiz = localStorage.getItem('quizCompleted');
  
  localStorage.clear();

  const checkAns = (e, ans) => { 
    if (lock === false) {
      if(index<10){
      if(question.ans === ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=>prev+1);
     }
     else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct");
     }
    }
    else{
      answ[index-10] = ans;
      console.log(answ[index-10]);
      e.target.classList.add("questionario");
      setLock(true);
    }
    }
  }

  const next = () =>{
    if (lock === true) {
      if (index === questions.length -1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(questions[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        option.current.classList.remove("questionario");
        return null;
      });
    }
    console.log(answ);
  }

  const [name, setName] = useState("");

  const handleSubmit = (eve) => {
		eve.preventDefault();
    
    let answ1 = answ[0];
    let answ2 = answ[1];
    let answ3 = answ[2];
    let answ4 = answ[3];
    let answ5 = answ[4];
    let answ6 = answ[5];
    let answ7 = answ[6];

    const objt = {name, score, answ1, answ2, answ3, answ4, answ5, answ6, answ7};
		axios.post(
				'https://sheet.best/api/sheets/0bbb75d8-08df-4dba-9a62-4c1dded45fbc',objt
			).then((response) => {
				console.log(response);
        window.location.href = '/';
        localStorage.setItem('quizCompleted', 'true');
			});
	};

  const handleInputChange = (ev) => {
    const inputValue = ev.target.value;
    setName(inputValue);
    setLock(true);
  };



  if (hasCompletedQuiz) {
    return(
      <>
         <div className="quizContainer">
          <h1>Hai già completato il quiz</h1>
          <a href="/"><button>Home</button></a>
         </div>
      </>
    )
  } else {

  return( 
  <>
    <div className="quizContainer">
      <h1>Quiz</h1>
      <hr/>
      {result?<></>:<>
      <h2>{index+1}. {question.question}</h2>
      <input type="text" placeholder="inserire il tuo nome" className="text" value={name} onChange={handleInputChange}/>
  
      <ul className="answers">

        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>

      </ul>
      <button onClick={next}>Prossimo </button>
      <div className="Index"> {index} di {questions.length-1} domande</div></>}
      {result?<>
      <h2>Hai ottenuto un punteggio di: {score} su {questions.length-8}</h2>
      <p>cliccare Home per inviare il punteggio</p>
     <button onClick={handleSubmit}><a href="/">Home</a></button>
      </>:<></>}

      <style jsx>{`
            .quizContainer .text{
              ${index === 0? `display:visible;` : `display:none;`}
            }
            .quizContainer .answers{
              ${index === 0? `display:none;` : `display:visible;`}
            }
            .quizContainer .Index{
              ${index === 0? `display:none;` : `display:visible;`}
              }
      `}</style>
    </div>
  </>
  )
  }
}
