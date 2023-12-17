import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return (
    <div className="bg-white pb-2 dark:bg-[#131722]">
        
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
      
      <div className="mt-8 grid grid-cols-6  gap-y-28 gap-x-14 mr-56 ml-72">
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