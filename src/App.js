import React, { useRef, useEffect, useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './App2.css';
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import EditPost from './EditPost';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from 'react-loader-spinner';
import SVGMADness from './/SVGMADness';
import SVGMADness2 from './/SVGMADness2';



const App = () => {
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model Loaded');
  }


  useEffect(() => {
    loadModel()
  }, []);

  const aQ = async (e) => {
    if (e.which === 13 && model !== null) {
      console.log('Question Submitted');// asked a question
      const passage = passageRef.current.value; // passage
      const question = questionRef.current.value; // question

      // const answers= await model.findAnswer("");
      const answers = await model.findAnswers(question, passage);
      setAnswer(answers)
      console.log(answers)

    }
  }

  return (

    <div>
        <video autoPlay muted loop id="bg-video">
            <source src="Hal9muchBetterFinal2.mp4" type="video/mp4" />
        </video>
          <div className="content">
         
      <div className="App">
        <header className="App-header">
          {model == null ?
            <div>
              <div>****L=ML***</div>
              <div/>

              <SVGMADness />
            </div>
            :
            <Fragment>
              <div>
                <div className='text'>
                  ********Passage***********
                </div>
                <textArea ref={passageRef} rows="30" cols="100"></textArea>
                <div className='text'>
                 Ask a question
                </div>
                <input ref={questionRef} onKeyDownCapture={aQ} size="80"></input>
                <div className='text'>
                  Answers
                </div>
                   
               
                {answer ? answer.map((ans, idx) => <div className='text'><b>Answer {idx + 1} - </b>{ans.text} ({ans.score})</div>) : ""}
               
               
              
              </div>
           
            </Fragment>


          }
            </header>


      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p className='text'>
        *********Chloe will have Offspring Soon**************************
      </p>
      <div> <SVGMADness2  /> </div>
    </div>
    </div>
  )
}

export default App;
