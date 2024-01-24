import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ganeshg1313')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div>{data.bio}</div>
      <img src={data.avatar_url} alt="profile image" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Ganeshg1313')
    return response.json()
}