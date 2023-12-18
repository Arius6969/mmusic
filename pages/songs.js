import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
 return (
    <div className="bg-white pb-24 dark:bg-[#131722]">

<div className="group w-[80px] h-screen bg-[#1f2535] hover:w-[270px] transition flex justify-around items-start flex-col gap-10 transition-[width] duration-700 fixed left-0 top-0 z-50">
        <div className="h-[40%] flex justify-around items-start flex-col">
          <div className="flex justify-center items-center ">
            {' '}
            <img onClick={() => {router.push("/");}}
              src="https://www.mmusic.mn/assets/images/music/mmusic.svg"
              className="w-56 h-20 "
            ></img>
          </div>
          <div className="flex justify-start align-start">
            <svg fill="white" width="56" height="22" viewBox="0 0 21.888 21.89">
              <path onClick={() => {router.push("/album");}}
                d="M0,10.445A10.444,10.444,0,1,1,10.444,20.89,10.456,10.456,0,0,1,0,10.445Zm2.35,0a8.094,8.094,0,1,0,8.093-8.094A8.1,8.1,0,0,0,2.351,10.445Zm4.624,0a3.47,3.47,0,1,1,3.47,3.47A3.473,3.473,0,0,1,6.974,10.445Zm2.35,0a1.119,1.119,0,1,0,1.12-1.119A1.121,1.121,0,0,0,9.324,10.445Z"
                transform="translate(0.5 0.5)"
              />
            </svg>
            <div onClick={() => {router.push("/album");}}
              className=" text-sm text-white/50  hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Цомог
            </div>
          </div>
          <div className="flex  ">
            <svg
              fill="white"
              width="56"
              height="22"
              viewBox="0 0 22.646 21.895"
            >
              <path onClick={() => {router.push("/songs");}}
                d="M0,16.288a4.592,4.592,0,0,1,6.837-4.006v-6.8A3.915,3.915,0,0,1,9.924,1.633L16.852.095a3.942,3.942,0,0,1,4.794,3.848v9.919A4.6,4.6,0,1,1,19.3,9.854V6.905L9.188,9.148v7.14a4.594,4.594,0,1,1-9.187,0Zm2.352,0a2.242,2.242,0,1,0,2.242-2.242A2.245,2.245,0,0,0,2.352,16.288ZM14.81,13.862a2.243,2.243,0,1,0,2.242-2.242A2.245,2.245,0,0,0,14.81,13.862ZM17.36,2.39,10.433,3.927A1.58,1.58,0,0,0,9.188,5.479V6.741L19.3,4.5V3.942A1.59,1.59,0,0,0,17.36,2.39Z"
                transform="translate(0.5 0.512)"
              />
            </svg>

            <div onClick={() => {router.push("/songs");}}
              className=" text-sm text-white/50 hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Дуу
            </div>
          </div>
          <div className="flex  ">
            <svg
              fill="white"
              width="56"
              height="22"
              viewBox="0 0 21.342 21.966"
            >
              <path onClick={() => {router.push("/artists");}}
                d="M17.99,19.79c0-4.487-3.283-8.137-7.319-8.137h-1c-4.036,0-7.319,3.65-7.319,8.137A1.176,1.176,0,1,1,0,19.79,10.508,10.508,0,0,1,6.288,9.964,5.294,5.294,0,0,1,4.855,6.338V5.315a5.315,5.315,0,0,1,10.63,0V6.338a5.294,5.294,0,0,1-1.432,3.626,10.506,10.506,0,0,1,6.288,9.826,1.176,1.176,0,1,1-2.352,0ZM7.207,5.315V6.338a2.964,2.964,0,1,0,5.928,0V5.315a2.964,2.964,0,1,0-5.928,0ZM9,19.752v-.561a3.024,3.024,0,0,1-1.843-2.781v-.772a3.019,3.019,0,0,1,6.038,0v.772a3.023,3.023,0,0,1-1.844,2.781v.561a1.176,1.176,0,0,1-2.351,0ZM9.5,15.639v.772a.668.668,0,1,0,1.336,0v-.772a.668.668,0,1,0-1.336,0Z"
                transform="translate(0.5 0.5)"
              />
            </svg>

            <div onClick={() => {router.push("/artists");}}
              className=" text-sm text-white/50 hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Уран бүтээлч
            </div>
          </div>
          <div className="flex  ">
            <svg fill="white" width="56" height="22" viewBox="0 0 78 70">
              <path onClick={() => {router.push("/playlist");}}
                class="path_a cls-1"
                d="M58.31,19.51V15.75a7,7,0,0,0-7-7H37.17a7,7,0,0,0-7,7V44.36A13.28,13.28,0,1,0,37,55.94V30.05l15.94-3.73A7,7,0,0,0,58.31,19.51ZM23.69,62.43a6.49,6.49,0,1,1,6.49-6.49A6.5,6.5,0,0,1,23.69,62.43ZM51.51,19.51a.2.2,0,0,1-.14.19L37,23.07V15.75a.18.18,0,0,1,.19-.18H51.33a.18.18,0,0,1,.18.18Zm5.37,32.77H49a3.4,3.4,0,1,0,0,6.8h7.88a3.4,3.4,0,0,0,0-6.8ZM64.2,39.83H49a3.4,3.4,0,1,0,0,6.8H64.2a3.4,3.4,0,0,0,0-6.8Z"
              />
            </svg>

            <div onClick={() => {router.push("/playlist");}}
              className=" text-sm text-white/50 hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Плейлист
            </div>
          </div>
          <div className="flex  ">
            <svg fill="white" width="56" height="22" viewBox="0 0 78 70">
              <path 
                class="path_a cls-1"
                d="M56.11,51.62a3.4,3.4,0,0,0-3.4,3.4,7.4,7.4,0,0,1-7.39,7.39H28.53A7.4,7.4,0,0,1,21.14,55V23a7.4,7.4,0,0,1,7.39-7.39H45.32A7.4,7.4,0,0,1,52.71,23a3.4,3.4,0,0,0,6.8,0A14.21,14.21,0,0,0,45.32,8.79H28.53A14.21,14.21,0,0,0,14.34,23V55A14.21,14.21,0,0,0,28.53,69.21H45.32A14.21,14.21,0,0,0,59.51,55,3.4,3.4,0,0,0,56.11,51.62ZM65,35.6H44.33L47.42,32a3.4,3.4,0,1,0-5.16-4.43l-7.91,9.23a3.4,3.4,0,0,0,0,4.42l7.91,9.23a3.41,3.41,0,0,0,2.58,1.19A3.41,3.41,0,0,0,47.42,46L44.33,42.4H65a3.4,3.4,0,1,0,0-6.8Z"
              />
            </svg>

            <div  onClick={() => {router.push("/login");}}
              className=" text-sm text-white/50 hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Нэвтрэх
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <p
            className=" text-m text-white/80 hidden group-hover:block "
            style={{
              transition:
                'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
            }}
          >
            MMusic тухай
          </p>
          <p
            className=" text-m text-white/80 hidden group-hover:block "
            style={{
              transition:
                'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
            }}
          >
            {' '}
            Купон код оруулах
          </p>
        </div>
      </div>
        
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

      <div className="mt-2 mr-56 ml-72 ">
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