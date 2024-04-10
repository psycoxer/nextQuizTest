'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import VideoPlayer from '@/components/video-player'
import dynamic from 'next/dynamic'
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });


const Aninfo = ({params}) => {

    const apiUrl = 'http://127.0.0.1:3069/anime/gogoanime/info/' + params.id
    const epsUrl = 'http://127.0.0.1:3069/meta/anilist/watch/'
    const [animfo, setAnimfo] = useState({})
    const [sours, setSours] = useState('')
    const [episod, setEpisod] = useState(0)

    useEffect(() => {
      fetch(apiUrl)
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(jresp => {
      console.log(jresp);
      setAnimfo(jresp)
      })
      .catch(error => {
      console.error('Error:', error);
      })


    
      return () => {}
    }, [apiUrl])
    

    useEffect(() => {

      if (!animfo['episodes']) {
        return
      }

      function manag(rsps) {
        if (!rsps['sources']) {return}

        let ulr = rsps['sources'][0]['url']
        for (const elem of rsps['sources']) {
          if (elem["quality"] === '1080p') {
            ulr = elem['url']
            break
          }
        }
        setSours(ulr)

      }

      fetch(epsUrl+animfo['episodes'][episod]['id'])
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      })
      .then(jresp => {
      console.log(jresp);
      manag(jresp)
      })
      .catch(error => {
      console.error('Error:', error);
      })
    
      return () => {}
    }, [animfo, episod])
    


  return (
    <div className='text-white h-[vh] w-[vw] p-10'>
        <select name="episodes" id="episod" className='bg-inherit' onChange={(elem)=>{setEpisod(animfo['episodes'].findIndex(item => item.id === elem.target.value))}}> 
          {
            (animfo['episodes']) ? 
            animfo['episodes'].map((num)=>{
              return <option className='bg-blue-950' key={num['number']}  value={num['id']}> {num['number']} </option>
            }) : 
            <option value='error'> nothingness </option>
          }
        </select>
        <VideoPlayer src={sours} />
    </div>
  )
}

export default Aninfo