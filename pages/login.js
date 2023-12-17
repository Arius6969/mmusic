import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className=" h-screen">
        
    <div className="h-full w-full bg-[#131722] flex justify-center ">
    <p class="absolute  mt-[60px] mr-[224px] bg-zinc-700  text-white font-semibold  py-2 px-[34px] border border-zinc-900  rounded-t-xl">
    Хэрэглэгчийн дугаар
    </p>
  
    <Link href="/login1"> {}
          <p className="absolute focus:outline-none focus:ring-1 focus:ring-white z-2 focus:bg-zinc-900 mt-[60px] ml-[-1px] bg-transparent text-white font-semibold py-2 px-[69px] border border-zinc-900 rounded-t-xl">
            Цахим хаяг
          </p>
        </Link>


    <div className="mt-24 flex items-center justify-center bg-zinc-700 text-white absolute h-[450px] w-[450px] ">
    <div className=' mb-4 h-[330px] w-[350px]'>
        <div className=' h-[100px] w-full'>
            <div className='text-white/80 '>Хэрэглэгчийн дугаар</div>
        <div className="absolute max-w-md mx-auto flex items-center justify-center  text-white font-bold rounded p-6">
      <label htmlFor="numberInput" className="bg-zinc-500">
      </label>
      <input
        className=" absolute text-center font-bold bg-zinc-700 ml-[300px] mt-1 p-2 w-[380px] border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900"
        placeholder="AAA-0000"
      />
    </div>
        </div>
        <div className=' h-[250px] w-full'>
        <div className='ml-4 font-bold text-white/80 flex items-center justify-center'>Та баталгаажуулах нэг удаагийн кодыг аппынхаа Профайл хэсгээс орж аваарай
Зааврыг энд дарж үзнэ үү.</div>
<div className="absolute max-w-md mx-auto flex items-center justify-center  text-white font-bold rounded p-6">
      <label htmlFor="numberInput" className="bg-zinc-500">
      </label>
      <input
        className=" absolute text-center mt-4 mr-[200px] font-bold bg-zinc-700 ml-[300px] mt-1 p-2  border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900"
      />
      <input
        className=" absolute text-center mt-4 mr-[70px] font-bold bg-zinc-700 ml-[300px] mt-1 p-2  border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900"
      />
      <input
        className=" absolute text-center mt-4 mr-[-65px] font-bold bg-zinc-700 ml-[300px] mt-1 p-2  border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900"
      />
      <input
        className=" absolute text-center mt-4  mr-[-200px] font-bold bg-zinc-700 ml-[300px] mt-1 p-2  border rounded w-full focus:outline-none focus:ring-0 focus:border-zinc-900"
      />
    </div>
    <button className='w-[350px] h-[50px] bg-blue-500 mt-20 rounded bg-blue-800 font-bold'>НЭВТРЭХ</button>
        </div>
    </div>
    </div> 
    </div>
    
    </div>
  )
}