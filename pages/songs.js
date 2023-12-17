import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return (
    <div className="bg-white pb-24 dark:bg-[#131722]">

      
        
      <div className="flex justify-start justify-between ml-72"> 
        <div className=" mb-4 text-black text-sm mt-20 font-bold dark:text-[#E5E7EB]"> Дуу </div>
        <div className="absolute ml-[610px] mt-[30px] text-white font-bold rounded-2xl p-6">
      <input
        className=" absolute bg-[#0C101B] ml-[300px] mt-1 p-2 w-[440px] rounded-xl" 
        placeholder="Хайх..."
      />
    </div>
      </div>

      <div className="mt-6 bg-[#131722] h-[30px] w-56 ml-[1460px] border border-[#243049]  flex items-center "> 
        <div className="text-white ml-2 text-sm "> Сүүлд</div>
      </div>

      <div className="ml-[270px] bg-[#0C101B] mt-6 h-8 w-[1418px] rounded flex justify-center grid grid-cols-6 gap-x-10 items-center">
        <button className="text-white flex justify-start ml-4 text-xs"> Бүгд</button>
        <button className="text-white flex justify-start text-xs"> Поп</button>
        <button className="text-white flex justify-start text-xs"> Рок,Алтернатив</button>
        <button className="text-white flex justify-start text-xs"> Хип хоп,реп</button>
        <button className="text-white flex justify-start text-xs"> Жазз</button>
        <button className="text-white flex justify-start text-xs"> Нийтийн</button>
        </div>

      <div className="mt-2 mr-56 ml-72">
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Heaven knows ft Maaraa</button>
            <button className="text-white "> Heaven knows ft Maaraa</button>
            <button className="text-white "> Pacrap</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Шидэт шинэ жил x O.Z x Bilgang </button>
            <button className="text-white "> Шидэт шинэ жил x O.Z x Bilgang</button>
            <button className="text-white "> Jason</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Love In Monaco x Yasashi </button>
            <button className="text-white "> Love In Monaco x Yasashi</button>
            <button className="text-white "> the.highwave</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Tsas Buriin Toogoor & Mrs M </button>
            <button className="text-white "> Tsas Buriin Toogoor & Mrs M</button>
            <button className="text-white "> Ginjin</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Хэмнэл нэрэгч </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Pacrap</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Shuniin Gudamj ft Namone </button>
            <button className="text-white "> Shuniin Gudamj</button>
            <button className="text-white "> Mo'G</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Bolomj </button>
            <button className="text-white "> Bolomj</button>
            <button className="text-white "> Teeyo </button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Gunigtai udur </button>
            <button className="text-white "> Gunigtai udur</button>
            <button className="text-white "> Beegii & Apex</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Үүл </button>
            <button className="text-white"> Үүл </button>
            <button className="text-white"> Don Dior </button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Парист 2-улаа болзоно </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Хамаарал </button>
            <button className="text-white "> Талархалын өдөр</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Заримдаа ft.Маралжингоо </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Тултал хий </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Парист 2-улаа болзоно ft.Анхмаа </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Биелгээ хийхийг заагаач хө! </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Хөдөө гаръя! </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Нарны дараа </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Хэмнэл нэрэгч </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Цэнгэлийн манлай </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Шөнө дунд цас орж байна </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Яасан байх нь уу </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>
        <div className="bg-[#0C101B] mt-2 h-16 w-[1400px] rounded flex items-center ">
          <div className="grid grid-cols-4 gap-x-24 "> 
            <button className="text-white flex justify-start ml-4"> Сэмбий </button>
            <button className="text-white "> Хэмнэл нэрэгч</button>
            <button className="text-white "> Lumino</button>
            <h className="text-white dark:text-[#E5E7EB] ml-56 "> 03:48</h>
          </div>
        </div>

      </div>
      
    </div>
 )
}