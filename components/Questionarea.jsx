import React from 'react'

const Questionarea = ({qesobj, updateScore}) => {


  const options = qesobj['options']
  const ans = qesobj['answer']

  const buttoncls = 'w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
  const spancls = "size-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"

  return (
    <div className='w-[40vw] max-md:w-[65vw] max-sm:w-[90vw] h-full flex flex-col items-center justify-center text-center'>

        <div className='w-full m-1'>Q{qesobj['question_no']}. {qesobj['question']}</div>
        <ol className='flex flex-col items-center w-full'>
          <li className="text-2xl rounded-3xl w-full m-0.5">
              <button onClick={()=>{updateScore(0, ans)}} className={buttoncls}>
                <span className={spancls}>{options[0]}</span>
              </button>
            </li>
          <li className="text-2xl rounded-3xl w-full m-0.5">
              <button onClick={()=>{updateScore(1, ans)}} className={buttoncls}>
                <span className={spancls}>{options[1]}</span>
              </button>
            </li>
          <li className="text-2xl rounded-3xl w-full m-0.5">
              <button onClick={()=>{updateScore(2, ans)}} className={buttoncls}>
                <span className={spancls}>{options[2]}</span>
              </button>
            </li>
          <li className="text-2xl rounded-3xl w-full m-0.5">
              <button onClick={()=>{updateScore(3, ans)}} className={buttoncls}>
                <span className={spancls}>{options[3]}</span>
              </button>
            </li>
      </ol>

    </div>
  )
}

export default Questionarea