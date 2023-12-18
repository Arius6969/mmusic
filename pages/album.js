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
        
      <div className=" flex justify-start ml-72"> 
        <button className="text-black text-sm mt-20 font-bold dark:text-[#E5E7EB]">Бүгд/ </button>
        <button className="text-black text-sm mt-20 font-bold dark:text-[#E5E7EB]">Цомог/ </button>
        <button className="text-black text-sm mt-20 font-bold dark:text-[#E5E7EB]">Сингл </button>  
        <div className="absolute ml-[610px] mt-[30px] text-white font-bold rounded-2xl p-6">
      <input
        className=" absolute bg-[#0C101B] ml-[300px] mt-1 p-2 w-[440px] rounded-xl" 
        placeholder="Хайх..."
      />
    </div>
      </div>

      <div className="mt-8 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-28 gap-x-14 mr-56 ml-72">
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/54a5fe2fc7496e0ada0d362c249f17a0/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Toos to Zoos </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/559264b51732d36f9055a37e1e0a30e7/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> ATM </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://i.scdn.co/image/ab67616d00001e029375810f4080113fa3323dd2')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]">  Хүний хүн </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/ca51f1ce23ba8b327d0ac2166a722d7d/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> BABA</div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/4b59882e99ed2f7901afe60c85336bb0/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Бороо </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/66/3e/dc/663edc3f-328b-640f-1ffa-f0cc9911a81d/8718857971337.png/1200x1200bf-60.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> HOT BOY</div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://m.media-amazon.com/images/I/51i5H7m+srL._SX354_SY354_BL0_QL100__UXNaN_FMjpg_QL85_.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Most HATED </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/e4caed0cf5031f4929466a81a6df60d7/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]">  Баярлалаа </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/3a6548cd859ab33d737f9441bb8acb1c/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Munkhud 21 </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Vandebon</span>
            </button>
            
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/0e2cb9494e36071491c8750ca3eef9cd/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> IN YOUR DREAM </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Vandebo</span>
            </button>
        </div> 
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/d29f3fcc1aa50b7fa786f45e8d50d021/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> дөнгөн данган </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://static.qobuz.com/images/covers/9b/p9/o65sq05d7p99b_600.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> 3-тун </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/e679c857777c33b0e0848926584df215/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Нэг өдөр </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/65/e5/c2/65e5c291-06da-ea99-619a-b407c92780cf/8720623491437.png/600x600bf-60.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Хатуу </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/65713dea7d986ec48b1b77e5f04021b0/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Нисээрэй </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/627b223c_87817a_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Street </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://i.ytimg.com/vi/lgOzRcsfyk8/maxresdefault.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> чи өөрөө </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpEhLkMkXO60lA0DGo4zTv1SD82qeYA_I4PYLG_zv0meUb3KcDVfql6HiNmF2wpCbeac&usqp=CAU')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Ноён эмэгтэй </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/173bafe1bb56b2fdbf220981e8b54573/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Халуун маруужин </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63e222a2_bf7c20_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Okay </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/78/75/a2/7875a28f-82a6-9711-fdc0-8557c841a3cb/8721056097494.png/1200x1200bb.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Afterland </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63e221fa_594833_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> 90on </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63eaf3b8_7c6a75_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Zuruhgui </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">NENE</span>
            </button>
        </div>

      </div>
      
    </div>
 )
} 