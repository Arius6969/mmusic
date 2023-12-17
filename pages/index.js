import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className=" bg-[#131722] h-screen w-screen">
      <div className='bg-green-500 h-[450px] w-full bg-cover bg-center relative'>
    <img className='absolute w-full h-[500px] object-cover' src='https://www.mmusic.mn/assets/img/demo/b2.jpg'></img>
    <div className='text-white absolute ml-36 text-xl font-bold mt-[160px]'>Хамгийн Том</div>
    <div className='text-white absolute ml-36 text-xl font-bold mt-[200px]'>Монгол Дуу</div>
    <div className='text-white absolute ml-36 text-xl font-bold mt-[240px]'>Хөгжмийн Сан</div>
    <div className='text-blue-500 absolute ml-[1550px] mt-4'>Промо</div>
    <div className='text-blue-500 absolute ml-[1620px] mt-4'>Тусламж</div>
    <div className='text-blue-500 absolute ml-[1700px] mt-4'>Холбоо барих</div>
    <button className='bg-blue-600 text-white  w-[230px] h-[60px] mt-[180px] rounded-full absolute ml-[780px] flex items-start'>
    <p className='text-white ml-7 break-normal mt-1 font-bold'>1 сар</p> 
    <p className='text-white ml-7 absolute mt-7 font-bold'>Гишүүнчлэл</p>    
    <p className='text-white/50 ml-[140px] absolute mt-4 '>|</p> 
    <p className='text-white ml-[155px] absolute mt-4 font-bold'>4,900₮</p> 
    </button>
    <p className='text-white absolute ml-[770px] mt-[245px] text-xs'>Бүртгүүлээд 7 хоногийн үйлчилгээний эрх аваарай.</p>
    <img className='absolute  ml-[180px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/apple.svg'></img>
    <img className='absolute  ml-[310px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/gallery.svg'></img>
    <img className='absolute  ml-[450px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/google.svg'></img>
    <img className='absolute  ml-[590px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/mac.svg'></img>
    <img className='absolute  ml-[720px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/windows.svg'></img>
    </div>
    
    </div>
  )
}
