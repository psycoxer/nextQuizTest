import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const Animecard = ({details}) => {
  return (
    

    <div className='h-full w-full relative'>
        <Link href={'/anime/'+details['id']} className='group peer/bro relative w-full h-full z-[999]'>
            <div class="flex flex-col align-middle justify-center text-center p-5 w-full h-full bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-center align-middle overflow-visible rounded-lg'>
                    <Image className=' scale-100 group-hover:scale-105 transition-transform duration-300 ease-out rounded-lg' width={225} height={334} src={details['image']} alt="" />
                </div>
                <div class="p-5">
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:bg-gradient-to-bl from-green-600 via-teal-600 to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text">{details['title']}</h5>
                    </div>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {details['releaseDate']}
                    </p>
                </div>
            </div>
        </Link>
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-green-600 via-teal-600 to-indigo-600 opacity-15 peer-hover/bro:opacity-75 blur transition-opacity duration-300"></div>
    </div>

  )
}

export default Animecard