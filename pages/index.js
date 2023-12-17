import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className=" bg-[#131722] h-full w-screen grid gap-y-24">
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
      
      <div className="ml-[180px] bg-[#0C101B] mt-24 h-12 w-[1500px] rounded-t flex item-center ">
        <div className="text-white text-sm ml-8 mt-4"> Хамгийн өндөр сонсолттой дуунууд</div>
      </div>

      <div className="ml-[180px] bg-[#0C101B]  h-8 w-[1500px]  flex justify-center grid grid-cols-6 gap-x-10 items-center">
        <button className="text-white flex justify-start ml-10 text-xs"> Бүгд</button>
        <button className="text-white flex justify-start text-xs"> Поп</button>
        <button className="text-white flex justify-start text-xs"> Рок,Алтернатив</button>
        <button className="text-white flex justify-start text-xs"> Хип хоп,реп</button>
        <button className="text-white flex justify-start text-xs"> Жазз</button>
        <button className="text-white flex justify-start text-xs"> Нийтийн</button>
        
        </div>
      
       <div className=" ml-[180px]">
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

