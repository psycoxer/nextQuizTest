import React, { useState } from 'react'
import {Collapse} from 'react-collapse'; 

const Endscreen = ({score, timaray}) => {

    const [colaps, setColaps] = useState(false)

    function rendertimes(){
        const listitems = []
        for (let i = 0; i < timaray.length-1; i++) {
            listitems.push(
                <li>Time for question {i+1} was: {(timaray[i+1] - timaray[i])/1000}</li>
            )
        }
        return listitems
    }

  return (
    <div>
        <h1 className="text-5xl">Your Scoore Was: {score}</h1>
        <h1 className="text-5xl">Your Time Was: {(timaray[timaray.length-1] - timaray[0])/1000}</h1>

        <button className="bg-orange-800 rounded-lg p-2 " onClick={ () => {setColaps(!colaps)}}>Show question-wise times</button>
        <Collapse isOpened={colaps}>
            <ul>{rendertimes()}</ul>
        </Collapse> 
    </div>
  )
}

export default Endscreen