import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
 return (
    <div className="bg-white pb-2 dark:bg-[#131722]">

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
        <div className=" mb-4 text-black text-sm mt-20 font-bold dark:text-[#E5E7EB]"> Тоглуулах жагсаалтууд </div>
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
      
      <div className="mt-8 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-28 gap-x-14 mr-56 ml-72">
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/49/19/7c/49197c9e-5e65-8f41-372e-65adb9c86fb7/8720623457617.png/600x600bf-60.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110 ">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> duu </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">enhbold</span>
            </button>
        </div>
        <div className="bg-[url('https://yt3.googleusercontent.com/Zd8UaGuCygN9xMSGYcwK1SfBUSFM423J3XGolwhZXRcowiiMJk1Q80vCJGE7-lmv9sK12DzgSw=s900-c-k-c0x00ffffff-no-rj')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Vandebo </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB] ">Enh Vjin</span>
            </button>
        </div>
        <div className="bg-[url('https://i1.sndcdn.com/artworks-000091106868-2pa49d-t500x500.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> minii durtai duunuud </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Chamindul Duluu</span>
            </button>
        </div>
        <div className="bg-[url('https://i1.sndcdn.com/artworks-000492844665-cifwag-t500x500.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> goy duunuud </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Bataa </span>
            </button>
        </div>
        <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rokitbay_1st_album_he_edit_himself_that_photo.jpg/220px-Rokitbay_1st_album_he_edit_himself_that_photo.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> sonsoh durtai </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Zaya Zaya</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/6417c3dc_311f23_1.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> me songs </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Ochir Erdene</span>
            </button>
        </div>
        <div className="bg-[url('https://i.ytimg.com/vi/S0df5DjD8j8/sddefault.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> boldbaatar </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Huduuni ah</span>
            </button>
        </div>
        <div className="bg-[url('https://i.ytimg.com/vi/KMKhA3WH_2g/sddefault.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> hurim nair </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Chimgee Chimedtseren</span>
            </button>
        </div>
        <div className="bg-[url('https://i1.sndcdn.com/artworks-000325457940-ij7pgg-t500x500.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Urtiin duunuud  </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]"> Dorjoo B</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ff/70/30/ff703057-56bf-359c-156b-a7979e340885/artwork.jpg/400x400cc.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> huduu sonsoh duu </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Aylagc Algaa</span>
            </button>
        </div>
        <div className="bg-[url('https://p16-tm-sg.tiktokmusic.me/img/tos-alisg-v-2102/75fc860952e84f649c79fe5444523374~c5_500x500.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Hairiin duunuud </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Togtuun </span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/artists/62d69f60_2e2628_1.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Playlist1 </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Enxs</span>
            </button>
        </div>
        <div className="bg-[url('https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> 10hours rick roll </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Troll face</span>
            </button>
        </div>
        <div className="bg-[url('https://pbs.twimg.com/profile_images/1022390515335974912/7dnlNnKj_400x400.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> mungu duuddag duu </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Saran-Davaa egc</span>
            </button>
        </div>
        <div className="bg-[url('https://viberatecdn.blob.core.windows.net/entity/artist/wolfizm-haTAi')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Wolfizm </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Gang Gar Galaa</span>
            </button>
        </div>
        <div className="bg-[url('https://i.guim.co.uk/img/media/5ad344663c735ac3420480ac2609d52a68a847a8/0_231_3077_1846/master/3077.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9522828eeb993d551eca6477c086bb1f')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> 2023.11.21 </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Enhjin Bold</span>
            </button>
        </div>
        <div className="bg-[url('https://theubposts.com/media/ubpost/content/news/2016/07/Javhlan-gishuun-Muugi-.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Durtai Arius Sonsoh</div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Arius</span>
            </button>
        </div>
        <div className="bg-[url('https://i1.sndcdn.com/artworks-000224084156-xl4lum-t500x500.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> lumino goy </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Michid Michka</span>
            </button>
        </div>
        <div className="bg-[url('https://i.ytimg.com/vi/S0df5DjD8j8/sddefault.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> ardin duu </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Boldbaatr Fan Boy</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/albums/62afed16_3b333e_1.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> My playlist </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Dulamsvren Nymtsetseg</span>
            </button>
        </div>
        <div className="bg-[url('https://d15xdsbb8need2.cloudfront.net/images/music/artists/615d5622_4c3f5e_1.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> Muunuu type shit </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">prodmuunuu</span>
            </button>
        </div>
        <div className="bg-[url('https://i1.sndcdn.com/artworks-000074985064-bil8mc-t500x500.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> dursamj </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Bronze Axe</span>
            </button>
        </div>
        <div className="bg-[url('https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a4/7e/44/a47e4427-6cee-f249-49d5-a37c09aeffec/artwork.jpg/375x375bb.jpg')] h-44 w-44 rounded-xl bg-cover cursor-pointer transition-all duration-500 hover:scale-110">
            <button className="mt-44 ml-2 ">
                <div className="text-black font-bold text-sm flex items-start dark:text-[#E5E7EB]"> top 50 </div>
                <span className="text-black flex items-start text-xs dark:text-[#E5E7EB]">Turuu Bno</span>
            </button>
        </div>

      </div>
      
    </div>
 )
} 