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
        <div className=" mb-4 text-black text-sm mt-20 font-bold dark:text-[#E5E7EB]"> Уран бүтээлч </div>
        <div className="absolute ml-[610px] mt-[30px] text-white font-bold rounded-2xl p-6">
      <input
        className=" absolute bg-[#0C101B] ml-[300px] mt-1 p-2 w-[440px] rounded-xl" 
        placeholder="Хайх..."
      />
    </div>
      </div>
      <div className="mt-8 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-28 gap-x-14 mr-56 ml-72">
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcybR97MzqUc51o2t-6t8tRUC2O7zz38zge09Z4nfSBzgLfKgn')] bg-cover rounded-full ">
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Ginjin </div>
                <span className="text-white flex items-start text-xs "> 13 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://i1.sndcdn.com/avatars-WWfDTBInSvo8KEtz-xOuX1w-t500x500.jpg')] bg-cover rounded-full">
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> 290 </div>
                <span className="text-white flex items-start text-xs "> 12 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://i1.sndcdn.com/artworks-qqe0WN93uayBfxES-w4xCPQ-t500x500.jpg')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> NENE </div>
                <span className="text-white flex items-start text-xs "> 4 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/8HwsiGhFN2Gtj1XB978cEA3jQIW99sXpntQrtZkIJV4JsavCjNFrQOZ3BIV0PXzs6pByszXxRqo=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full">
            <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Thunderz </div>
                <span className="text-white flex items-start text-xs "> 18 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/H7rZ8Tz1w0iBX8-KGjmSrd7R3q3zhXdqWEg3uJhn9aHhDM5ZIZcipqsnAWalbLOhq2geK42-XYY=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Mrs M</div>
                <span className="text-white flex items-start text-xs "> 10 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/6HrG6oF3uV297pFZbVEIOPQlPRxukHG27BgJ1DOpKljBgd4MI9fw2WHJqVXFoMmtwuAKutidDFY=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> FLA </div>
                <span className="text-white flex items-start text-xs "> 4 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://m.media-amazon.com/images/I/41YGUWjk+JL._UXNaN_FMjpg_QL85_.jpg')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Mvchi </div>
                <span className="text-white flex items-start text-xs "> 6 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/fTRrbXnK6EKVQvb4cZTlk6mP169XyJpq4oCDlpknwv3BAMmkaurXfJpHfDiDaWUsIIppJ3gL=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> SHUWU </div>
                <span className="text-white flex items-start text-xs "> 6 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/SuJQ15FzqdGpaImeonIVd3NE85M_Q8iVCYZJ6x6kabFqbRVFEaLaTBQjU6COMRKZl46PRqMXoA=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Mo G </div>
                <span className="text-white flex items-start text-xs "> 5 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://i.scdn.co/image/ab67616d0000b273062f82b283ecd2c79b7ed894')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> THE C </div>
                <span className="text-white flex items-start text-xs "> 1 сингл </span></div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/pzvcrkMSIP_QS4ujtvS-tFFCTdNKPCQ86ZqnlTCWYbjNCETx8r9bhpFDxITKKYkjp2CenjnVYw=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> GANG BAY </div>
                <span className="text-white flex items-start text-xs "> 19 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/k-nzRdEndiwbCmrSph1IwwhBb6AH5MPVLUmH5Bp-xXJd75dpFRUAs7EznMyw4bpMvpIdVlegLw=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> LOCE </div>
                <span className="text-white flex items-start text-xs "> 3 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/RKOsxR2an4XNfrKxHgT618xuKhVuTZTDen_wmmtCaaen8ScjCM1x_tj5xh6VX0mKyhZWzeEiapE=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Wolfizm </div>
                <span className="text-white flex items-start text-xs "> 4 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/rd8JoMNjopt-qkWJaurkdUuIVm8GKyJjQhGT_R2opR0-_7boL79NxZ-_kr3GgDxdcdfx_RjDzg=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Gvnsor </div>
                <span className="text-white flex items-start text-xs "> 3 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/m_QE_ayyhwsPocgqDUGAg0jtPHBcjJvyFswVOeG1-PG6jaU8OVZz5D2NY1vSnYW-JJLpDO651A=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> sekstsagaanbogd </div>
                <span className="text-white flex items-start text-xs "> 12 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/8Z_-GuXqc2wdkb_R6acmloQ3LGr13XRzZhgTT7nisnIogb8cW3sEUXTUv5gCRDiZ4yPXXVOl=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> URI MAE </div>
                <span className="text-white flex items-start text-xs "> 5 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/ytc/AOPolaQ5UBMGpfxIBE68TuOXlWlonZin5JhGxwi7hLAg=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Lil Thug E </div>
                <span className="text-white flex items-start text-xs "> 11 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/pgD2c8opYYywq9MJcOpLgAAFrTpqsrEHTkDU3jp460oLnlrlLypzT_H1has0tO5csdImnVrHnQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full">
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Rafor </div>
                <span className="text-white flex items-start text-xs "> 7 сингл </span> 
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/ZphPrBpihztaK1wXG0ddm_AryWhrTyjSAvafk9m0jJERuuZR445I1-BB8sVS-P4ynGDuogSlgQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Davaidasha </div>
                <span className="text-white flex items-start text-xs "> 9 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/qfS3ItyK40fc6_KCV_A9ahWrZ_7ANvdKOEUAOuCOTS4dEPjy1pJoP5g3UuvzSolKaBXBOQSJV7E=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> FOUX </div>
                <span className="text-white flex items-start text-xs "> 10 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/TRnzlNzpFZptmcV0rX0ycti3EdOl7wUpaY5BjxNwnLRyoX8CO19D43047UjFhUjJDJ-LcqwHHyQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Trishna </div>
                <span className="text-white flex items-start text-xs "> 19 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/jc9QOrNT3WS31D6YWYSEFDFBOdMtOmM-D_QvDgz7djtL6O11wdyRAJd44Y4iDwKOtYehuc_KJQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Choidog </div>
                <span className="text-white flex items-start text-xs "> 9 сингл </span>
            </div>
        </div>
        <div className="bg-black dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/_WWrpcwe667hn5gYmyJzzsN8WHKkFgZoFToGAMhaK8uUenAIi0mMoHfG2Qk66MdPc4lHPdYTGA=s176-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-white font-bold text-sm flex items-start mt-[170px]"> Big Gee </div>
                <span className="text-white flex items-start text-xs "> 21 сингл </span>
            </div>
        </div>

      </div>
      
    </div>
 )
} 

