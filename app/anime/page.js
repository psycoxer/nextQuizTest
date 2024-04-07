import React from 'react'

const anime = () => {
  return (
    <div>
    <h1 className='text-5xl hover:bg-red-500 rounded-3xl'>anime</h1>
    Here are some good animes:
    <ol className='list-inside list-decimal hover:list-disc'>
      <li>Naruto</li>
      <li>One Piece</li>
      <li>Bersek</li>
      <li>Solo levelling</li>
      <li>Demon Slayer</li>
    </ol>
    </div>
  )
}

export default anime