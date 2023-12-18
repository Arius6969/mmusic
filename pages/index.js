import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
  return (

    <div className=" bg-[#131722] h-full w-screen grid gap-y-24">

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

      <div className='bg-green-500 h-[450px] w-full bg-cover bg-center relative'>
    <img className='absolute w-full h-[500px] object-cover' src='https://www.mmusic.mn/assets/img/demo/b2.jpg'></img>
    <div className='text-white absolute ml-36 text-xl font-bold mt-[160px]'>Хамгийн Том</div>
    <div className='text-white absolute ml-36 text-xl font-bold mt-[200px]'>Монгол Дуу</div>
    <div className='text-white absolute ml-36 text-xl font-bold mt-[240px]'>Хөгжмийн Сан</div>
    <div className='cursor-pointer text-blue-500 absolute ml-[1550px] mt-4'>Промо</div>
    <div className='cursor-pointer text-blue-500 absolute ml-[1620px] mt-4'>Тусламж</div>
    <div className='cursor-pointer text-blue-500 absolute ml-[1700px] mt-4'>Холбоо барих</div>
    <button className='bg-blue-600 text-white  w-[230px] h-[60px] mt-[180px] rounded-full absolute ml-[780px] flex items-start transition-all duration-500 hover:scale-110'>
    <p className='text-white ml-7 break-normal mt-1 font-bold'>1 сар</p> 
    <p className='text-white ml-7 absolute mt-7 font-bold'>Гишүүнчлэл</p>    
    <p className='text-white/50 ml-[140px] absolute mt-4 '>|</p> 
    <p className='text-white ml-[155px] absolute mt-4 font-bold '>4,900₮</p> 
    </button>
    <p className='text-white absolute ml-[770px] mt-[245px] text-xs'>Бүртгүүлээд 7 хоногийн үйлчилгээний эрх аваарай.</p>
    <img className='absolute cursor-pointer transition-all duration-500 hover:scale-110 ml-[180px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/apple.svg'></img>
    <img className='absolute cursor-pointer transition-all duration-500 hover:scale-110 ml-[310px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/gallery.svg'></img>
    <img className='absolute cursor-pointer transition-all duration-500 hover:scale-110 ml-[450px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/google.svg'></img>
    <img className='absolute cursor-pointer transition-all duration-500 hover:scale-110 ml-[590px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/mac.svg'></img>
    <img className='absolute cursor-pointer transition-all duration-500 hover:scale-110 ml-[720px] mt-[400px] ' src='https://www.mmusic.mn/assets/img/app/windows.svg'></img>
    
    
    </div>

    <div className="absolute text-white mt-[500px] ml-44"> Шинээр нэмэгдсэн цомгууд </div>

    <div className="mt-8 grid grid-cols-6 gap-y-28 gap-x-2 mr-56 ml-[180px] ">
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/54a5fe2fc7496e0ada0d362c249f17a0/264x264.jpg')] bg-cover h-56 w-56 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-56 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Toos to Zoos </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/559264b51732d36f9055a37e1e0a30e7/264x264.jpg')] bg-cover h-56 w-56 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-56 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> ATM </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://i.scdn.co/image/ab67616d00001e029375810f4080113fa3323dd2')] bg-cover h-56 w-56 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-56 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]">  Хүний хүн </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/ca51f1ce23ba8b327d0ac2166a722d7d/264x264.jpg')] bg-cover h-56 w-56 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-56 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> BABA</div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/4b59882e99ed2f7901afe60c85336bb0/264x264.jpg')] bg-cover h-56 w-56 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-56 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Бороо </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/66/3e/dc/663edc3f-328b-640f-1ffa-f0cc9911a81d/8718857971337.png/1200x1200bf-60.jpg')] bg-cover h-56 w-56 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-56 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> HOT BOY</div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
      </div>
      
            
       <div className=" ml-[180px]">
        <div className="bg-[#0C101B] mt-24 h-12 w-[1500px] rounded-t flex item-center ">
        <div className="text-white text-sm ml-8 mt-4"> Хамгийн өндөр сонсолттой дуунууд</div>
      </div>
       <div className=" bg-[#0C101B]  h-8 w-[1500px]  flex justify-center grid grid-cols-6 gap-x-10 items-center">
        <button className="text-white flex justify-start ml-10 text-xs"> Бүгд</button>
        <button className="text-white flex justify-start text-xs"> Поп</button>
        <button className="text-white flex justify-start text-xs"> Рок,Алтернатив</button>
        <button className="text-white flex justify-start text-xs"> Хип хоп,реп</button>
        <button className="text-white flex justify-start text-xs"> Жазз</button>
        <button className="text-white flex justify-start text-xs"> Нийтийн</button>
        </div>

         <div className="bg-[#0C101B] h-[850px] w-[1500px] rounded  ">
         <div className="grid grid-y-cols-6 gap-y-8 gap-x-2 ml-10">
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/54a5fe2fc7496e0ada0d362c249f17a0/264x264.jpg')] mt-12 bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="ml-16 grid grid-cols-3">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> Toos to Zoos </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 02:46 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/559264b51732d36f9055a37e1e0a30e7/264x264.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> ATM </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 03:26 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://i.scdn.co/image/ab67616d00001e029375810f4080113fa3323dd2')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56">  Хүний хүн </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 03:01 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/ca51f1ce23ba8b327d0ac2166a722d7d/264x264.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> BABA</div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 03:51 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/4b59882e99ed2f7901afe60c85336bb0/264x264.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> Бороо </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 04:06 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/66/3e/dc/663edc3f-328b-640f-1ffa-f0cc9911a81d/8718857971337.png/1200x1200bf-60.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> HOT BOY</div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 03:26 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpEhLkMkXO60lA0DGo4zTv1SD82qeYA_I4PYLG_zv0meUb3KcDVfql6HiNmF2wpCbeac&usqp=CAU')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> Ноён эмэгтэй </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56">04:09 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/173bafe1bb56b2fdbf220981e8b54573/264x264.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56">  Haluun maruujin  </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 04:55 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/65/e5/c2/65e5c291-06da-ea99-619a-b407c92780cf/8720623491437.png/600x600bf-60.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> Hatuu</div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 03:28 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️</div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/78/75/a2/7875a28f-82a6-9711-fdc0-8557c841a3cb/8721056097494.png/1200x1200bb.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> Afterland </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 03:06 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56">▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63e221fa_594833_1.jpg')] bg-cover h-10 w-10 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="ml-16 grid grid-cols-3 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] w-56"> Zuruhgui</div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[800px] w-56"> 04:05 </div>
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB] ml-[1100px] w-56"> ▶️ </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
      </div>
        </div>
       </div>

      <div className="w-screen h-72 bg-[#0C101B] mt-24 "> 
         <div className="mt-12 ml-56 absolute bg-[url('https://www.mmusic.mn/assets/images/music/mmusic.svg')] h-20 w-56 "> </div>
         <span className="mt-36 ml-56 absolute text-white"> Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Чингисийн өргөн чөлөө,
                 <br></br> Гурван гол оффис, 6 давхар 601 тоот</span>
                 <div> 
                 <img className='absolute h-8 w-8 mt-52 ml-56 ' src='https://cdn.discordapp.com/attachments/1024317850841792533/1185990641163968614/instagram-with-circle-svgrepo-com.png?ex=65919edb&is=657f29db&hm=ffef57d3083210a8138e5a7561badac30fea9d014ac920df3f1a8a7aa5a65573&'></img>
                 <img className='absolute h-8 w-8 mt-52 ml-[260px]' src='https://cdn.discordapp.com/attachments/1024317850841792533/1185990411060252833/facebook-round-svgrepo-com_1.png?ex=65919ea4&is=657f29a4&hm=3b051751cff04fe14b476e5b8a8ba6cd4e99d10d4c64a5ebf699cfef392ebedf&'></img>
                 <img className='absolute h-8 w-8 mt-52 ml-[296px]' src='https://cdn.discordapp.com/attachments/1024317850841792533/1185990290000068668/youtube-round-svgrepo-com_1.png?ex=65919e87&is=657f2987&hm=39494cdec95d29b5cfa6bd56ce0be2e2043d8cf653e9480ea352da68e0fa0ec6&'></img>
                 </div>
      </div>
        
      </div>
  )
}

