'use client'
import React, { useState } from 'react'
import Animlist from '@/components/Animlist'

const Anime = () => {

  const apiUrl = 'http://127.0.0.1:3069/anime/gogoanime/'
  // const apiUrl = 'http://127.0.0.1:3069/meta/anilist/'
  const [anilist, setAnilist] = useState([])
  const [timer, setTimer] = useState(null)

  async function handleUpdate(queri){
    await fetch(apiUrl+queri)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setAnilist(data['results'])
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  function changeDelay(change) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        handleUpdate(change);
      }, 100)
    );
  }

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
    <h1 className="text-xl m-1 w-full text-center">Search:</h1>
    {/* <input className="bg-slate-900" type="text" onChange={(txtt)=>{changeDelay(txtt.target.value)}}/> */}
    <form>   
      <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input onChange={(txtt)=>{changeDelay(txtt.target.value)}} type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
      </div>
    </form>

    <Animlist anilist={anilist}/>

    </div>
  )
}

export default Anime