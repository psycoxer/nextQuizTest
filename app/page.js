"use client"
import Image from "next/image";
import Questionarea from "@/components/Questionarea";
import { quests } from "./questions";
import { useState } from "react";
import Endscreen from "@/components/endscreen";


export default function Home() {

  const [score, setScore] = useState(0)

  const [questionno, setQuestionno] = useState(0)

  const [timee, setTimee] = useState([Date.now()])

  function chck(chois, answr) {
    if (chois == answr) {
      setScore(score+1)
    }
    // setQuestionno(questionno >= quests.length-1 ? quests.length-1 : questionno+1)
    setTimee([...timee, Date.now()])
    setQuestionno(questionno+1)
  }


  return (
    <>

      <div className="h-screen flex align-middle justify-center">
        {
          (questionno >= quests.length) ? <Endscreen score={score} timaray={timee}/> : <Questionarea qesobj={quests[questionno]} updateScore={chck}/>
        }
      </div>

      {/* <Questionarea qesobj={quests[questionno]} updateScore={chck}/> */}
      {/* <button onClick={ ()=>{setQuestionno(questionno <= 0 ? 0 : questionno-1)} }>Back</button> */}
      {/* <button onClick={ ()=>{setQuestionno(questionno >= quests.length-1 ? quests.length-1 : questionno+1)} }>Next</button> */}
      {/* <h1 className="text-2xl">{score}</h1> */}
    </>
  );
}
