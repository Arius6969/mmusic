import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return (
    <div className="bg-white pb-24 dark:bg-[#131722]">
        
      <div className="flex justify-start ml-72"> 
        <button className="text-black text-sm mt-20 font-bold dark:text-white">Бүгд/ </button>
        <button className="text-black text-sm mt-20 font-bold dark:text-white">Цомог/ </button>
        <button className="text-black text-sm mt-20 font-bold dark:text-white">Сингл </button>
        <div className="ml-[812px] mt-20 w-[450px] mr-56 rounded-xl h-10 bg-neutral-600 dark:bg-[#0C101B]"> </div>  
      </div>
      <div className="mt-8 grid grid-cols-6 gap-y-28 gap-x-14 mr-56 ml-72">
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/54a5fe2fc7496e0ada0d362c249f17a0/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Toos to Zoos </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/559264b51732d36f9055a37e1e0a30e7/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> ATM </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://i.scdn.co/image/ab67616d00001e029375810f4080113fa3323dd2')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white">  Хүний хүн </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/ca51f1ce23ba8b327d0ac2166a722d7d/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> BABA</div>
                <span className="text-black flex items-start text-xs dark:text-white ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/4b59882e99ed2f7901afe60c85336bb0/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Бороо </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/66/3e/dc/663edc3f-328b-640f-1ffa-f0cc9911a81d/8718857971337.png/1200x1200bf-60.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> HOT BOY</div>
                <span className="text-black flex items-start text-xs dark:text-white ">Ginjin</span>
            </button>
        </div>
        <div className="bg-[url('https://m.media-amazon.com/images/I/51i5H7m+srL._SX354_SY354_BL0_QL100__UXNaN_FMjpg_QL85_.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Most HATED </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/e4caed0cf5031f4929466a81a6df60d7/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white">  Баярлалаа </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/3a6548cd859ab33d737f9441bb8acb1c/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Munkhud 21 </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Vandebon</span>
            </button>
            
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/0e2cb9494e36071491c8750ca3eef9cd/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> IN YOUR DREAM </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Vandebo</span>
            </button>
        </div> 
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/d29f3fcc1aa50b7fa786f45e8d50d021/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> дөнгөн данган </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://static.qobuz.com/images/covers/9b/p9/o65sq05d7p99b_600.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> 3-тун </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Vandebo</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/e679c857777c33b0e0848926584df215/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Нэг өдөр </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/65/e5/c2/65e5c291-06da-ea99-619a-b407c92780cf/8720623491437.png/600x600bf-60.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Хатуу </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/65713dea7d986ec48b1b77e5f04021b0/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Нисээрэй </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/627b223c_87817a_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Street </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://i.ytimg.com/vi/lgOzRcsfyk8/maxresdefault.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> чи өөрөө </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpEhLkMkXO60lA0DGo4zTv1SD82qeYA_I4PYLG_zv0meUb3KcDVfql6HiNmF2wpCbeac&usqp=CAU')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Ноён эмэгтэй </div>
                <span className="text-black flex items-start text-xs dark:text-white ">Thunderz</span>
            </button>
        </div>
        <div className="bg-[url('https://cdns-images.dzcdn.net/images/cover/173bafe1bb56b2fdbf220981e8b54573/264x264.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Халуун маруужин </div>
                <span className="text-black flex items-start text-xs dark:text-white ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63e222a2_bf7c20_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Okay </div>
                <span className="text-black flex items-start text-xs dark:text-white ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/78/75/a2/7875a28f-82a6-9711-fdc0-8557c841a3cb/8721056097494.png/1200x1200bb.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Afterland </div>
                <span className="text-black flex items-start text-xs dark:text-white ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63e221fa_594833_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> 90on </div>
                <span className="text-black flex items-start text-xs dark:text-white ">NENE</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/63eaf3b8_7c6a75_1.jpg')] bg-cover h-44 w-44 rounded-xl cursor-pointer transition-all duration-500 hover:scale-110">
        <button className="mt-44 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-white"> Zuruhgui </div>
                <span className="text-black flex items-start text-xs dark:text-white ">NENE</span>
            </button>
        </div>

      </div>
      
    </div>
 )
} 