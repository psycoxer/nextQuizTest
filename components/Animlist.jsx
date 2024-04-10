import React from 'react'
import Animecard from './Animecard'

const Animlist = ({anilist}) => {

    function generatelist() {
        const elem = []
        for (const animee of (anilist || [])) {
            const current = <div className='flex justify-center align-middle'> <Animecard details={animee} /> </div>
            elem.push(current)
        }
        return elem
    }

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 p-5">
            {generatelist()}
        </div>
    </div>
  )
}

export default Animlist