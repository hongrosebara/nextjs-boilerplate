import Head from 'next/head'
import Image from 'next/image'
import { Layout } from "@/components/common"

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto py-10 bg-purple-400 text-light'>
      <div className='flex flex-col justify-center items-center gap-10 '>
        <h1 className='text-5xl' style={{textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10,}}>Today is Andy's birthday 🎉</h1>
        <Image className='rounded-full border-8 shadow-lg border-yellow-500' src="/wolf.JPG" width={200} height={200} />
        <p>44 years old</p>
        <p>April 9 2023</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='pt-5 text-xl'>Here's how happy I am for you today 🥳</h2>
        <h3 className='py-5'>(Hover over the gift)</h3>
        <div className='gift-img' id='gift-img--happy'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='pt-5 text-xl'>How people react when you enter the room 🥳</h2>
        <div className='gift-img' id='gift-img--hot'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='pt-5 text-xl'>If I had to describe you with ONE word 👇</h2>
        <div className='gift-img' id='gift-img--genius'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='pt-5 text-xl'>How people react when you enter the room 😍</h2>
        <div className='gift-img' id='gift-img--baddass'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='pt-5 text-xl'>This one's for you, my friend 🥂</h2>
        <div className='gift-img' id='gift-img--cheers'></div>
      </div>
    </div>
  )
}

Home.Layout = Layout
