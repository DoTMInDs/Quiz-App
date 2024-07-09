import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../assets/data";
import { useNavigate } from "react-router-dom";

const Quiz = () => {

    let [index,setIndex] = useState(0);
    let [question,setQuestion] = useState(data[index]);
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1,Option2,Option3,Option4];

    const navigate = useNavigate();

    const checkAns = (e,ans) => {
        if (lock===false) {
            if (question.ans===ans) {
                e.target.classList.add("correct");
                setScore(++score)
                setLock(true);
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
        
    }

    const next = () => {
       if (lock===true) {
        if (index === data.length -1) {
            setResult(true)
            return;
        }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false)
        option_array.map((option)=> {
            option.current.classList.remove("correct");
            option.current.classList.remove("wrong");
            return null;
        })
       }
    }
    const prev = () => {
        if (lock===false) {
            setIndex(--index);
            setQuestion(data[index]);
            setLock(true);
            option_array.map((option)=> {
                option.target.current.classList.add("correct");
                option.target.current.classList.add("wrong");
            })
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(data[index]);
        setLock(false);
        setScore(0);
        setResult(false);
    }

    const quit = () => {
      navigate('/Form');
    } 

  return (
    <div className="quiz-container">
      <div className="quiz-contains">
        <h1 className="quiz-apps">Quiz Application</h1>
        <p className="cod-lang">Coding Language</p>
      </div>
      <h2 className="react-quiz">React js Quiz</h2>
      <hr />
      {result?<></>:<>
      <span className="index">Question {index+1} of {data.length}</span>
      <div className="list">
        <h3 className="in-ques-h3">{index+1}. {question.question}</h3>
        <ul>
          <li ref={Option1} onClick={(e) => checkAns(e,1)}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => checkAns(e,2)}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => checkAns(e,3)}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => checkAns(e,4)}>{question.option4}</li>
        </ul>
      </div>
      <hr />
      <div className="flex-btn">
      <button className="btn quit" onClick={quit}>Quit</button>
        <button className="btn next" onClick={next}>next</button>
      </div>
      </>}
      {result?
      <>
        <h3 className="score-h3">Out of {data.length * 10 - 20}% <br /> You Scored {score * 10 - 2}% </h3>
        <div className="flex-btn">
        <button className="btn quit" onClick={quit}>Quit</button>
        <button className="btn reset" onClick={reset}>reset</button>
        </div>
      </>:<>
      </>}
        
    </div>
  );
};

export default Quiz;
