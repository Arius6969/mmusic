import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className="h-screen">
        
    <div className="h-full w-full bg-zinc-950 flex justify-center ">
    <Link legacyBehavior href="/login">
    <a class="bg-green-500 absolute focus:outline-none focus:ring-1 focus:ring-white z-3 focus:bg-zinc-900  mt-[60px] mr-[224px] bg-transparent  text-white font-semibold  py-2 px-[34px] border border-zinc-900  rounded-t-xl">
    Хэрэглэгчийн дугаар
    </a>
    </Link>
    <a class="absolute focus:outline-none focus:ring-1 focus:ring-white z-2 focus:bg-zinc-900 mt-[60px] ml-[225px] bg-zinc-900  text-white font-semibold  py-2 px-[69px] border border-zinc-900  rounded-t-xl">
    Цахим хаяг
    </a>
    <div className="mt-24 flex items-center justify-center bg-zinc-900 text-white absolute h-[450px] w-[450px] ">
    <div className=' mb-4 h-[330px] w-[350px]'>
        <div className=' h-[100px] w-full'>
            <div className='text-white/80 '>Цахим хаяг / Утасны дугаар</div>
        <div className="absolute max-w-md mx-auto flex items-center justify-center  text-white font-bold rounded p-6">
      <label htmlFor="numberInput" className="bg-zinc-500">
      </label>
      <input
        className=" absolute font-bold bg-zinc-700 ml-[300px] mt-1 p-2 w-[360px] border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900 focus:transparent " 
        placeholder=""
      />
    </div>
        </div>
        <div className='h-[250px] w-full'>
        <div className='text-white/80 '>Нууц үг</div>
<div className="absolute max-w-md mx-auto flex items-center justify-center  text-white font-bold rounded p-6">
      <label htmlFor="numberInput" className="bg-zinc-500">
      </label>
      <input
        className=" absolute font-bold bg-zinc-700 ml-[300px] mt-1 p-2 w-[360px] border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900 focus:transparent " 
        placeholder=""
      />
    </div>
    <button className='w-[350px] h-[50px] bg-blue-500 mt-20 rounded bg-blue-800 font-bold'>НЭВТРЭХ</button>
    <div className='flex justify-end mt-8 underline'>Нууц үг сэргээх</div>
        </div>
    </div>
    </div> 
    </div>
    
    </div>
  )
}