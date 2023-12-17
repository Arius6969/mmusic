import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return (
    <div className="bg-white  pb-24 dark:bg-[#131722] ">
        
      <div className="flex justify-start justify-between ml-72"> 
        <div className=" mb-4 text-white text-sm mt-20 font-bold dark:text-white"> Уран бүтээлч </div>
        <div className="mt-20 w-[450px] mr-56 rounded-xl h-10 bg-white dark:bg-[#0C101B]"> </div>
      </div>
      <div className="mt-8 grid grid-cols-6 gap-y-14 gap-x-14 mr-56 ml-72">
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcybR97MzqUc51o2t-6t8tRUC2O7zz38zge09Z4nfSBzgLfKgn')] bg-cover rounded-full ">
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Ginjin </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 13 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://i1.sndcdn.com/avatars-WWfDTBInSvo8KEtz-xOuX1w-t500x500.jpg')] bg-cover rounded-full">
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> 290 </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 12 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://i1.sndcdn.com/artworks-qqe0WN93uayBfxES-w4xCPQ-t500x500.jpg')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> NENE </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 4 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/8HwsiGhFN2Gtj1XB978cEA3jQIW99sXpntQrtZkIJV4JsavCjNFrQOZ3BIV0PXzs6pByszXxRqo=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full">
            <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Thunderz </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 18 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/H7rZ8Tz1w0iBX8-KGjmSrd7R3q3zhXdqWEg3uJhn9aHhDM5ZIZcipqsnAWalbLOhq2geK42-XYY=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Mrs M</div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 10 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/6HrG6oF3uV297pFZbVEIOPQlPRxukHG27BgJ1DOpKljBgd4MI9fw2WHJqVXFoMmtwuAKutidDFY=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> FLA </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 4 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://m.media-amazon.com/images/I/41YGUWjk+JL._UXNaN_FMjpg_QL85_.jpg')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Mvchi </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 6 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/fTRrbXnK6EKVQvb4cZTlk6mP169XyJpq4oCDlpknwv3BAMmkaurXfJpHfDiDaWUsIIppJ3gL=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> SHUWU </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 6 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/SuJQ15FzqdGpaImeonIVd3NE85M_Q8iVCYZJ6x6kabFqbRVFEaLaTBQjU6COMRKZl46PRqMXoA=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Mo G </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 5 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://i.scdn.co/image/ab67616d0000b273062f82b283ecd2c79b7ed894')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> THE C </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 1 сингл </span></div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/pzvcrkMSIP_QS4ujtvS-tFFCTdNKPCQ86ZqnlTCWYbjNCETx8r9bhpFDxITKKYkjp2CenjnVYw=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> GANG BAY </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 19 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/k-nzRdEndiwbCmrSph1IwwhBb6AH5MPVLUmH5Bp-xXJd75dpFRUAs7EznMyw4bpMvpIdVlegLw=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> LOCE </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 3 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/RKOsxR2an4XNfrKxHgT618xuKhVuTZTDen_wmmtCaaen8ScjCM1x_tj5xh6VX0mKyhZWzeEiapE=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Wolfizm </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 4 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/rd8JoMNjopt-qkWJaurkdUuIVm8GKyJjQhGT_R2opR0-_7boL79NxZ-_kr3GgDxdcdfx_RjDzg=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Gvnsor </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 3 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/m_QE_ayyhwsPocgqDUGAg0jtPHBcjJvyFswVOeG1-PG6jaU8OVZz5D2NY1vSnYW-JJLpDO651A=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> sekstsagaanbogd </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 12 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/8Z_-GuXqc2wdkb_R6acmloQ3LGr13XRzZhgTT7nisnIogb8cW3sEUXTUv5gCRDiZ4yPXXVOl=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> URI MAE </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 5 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/ytc/AOPolaQ5UBMGpfxIBE68TuOXlWlonZin5JhGxwi7hLAg=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Lil Thug E </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 11 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/pgD2c8opYYywq9MJcOpLgAAFrTpqsrEHTkDU3jp460oLnlrlLypzT_H1has0tO5csdImnVrHnQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full">
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Rafor </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 7 сингл </span> 
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/ZphPrBpihztaK1wXG0ddm_AryWhrTyjSAvafk9m0jJERuuZR445I1-BB8sVS-P4ynGDuogSlgQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Davaidasha </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 9 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/qfS3ItyK40fc6_KCV_A9ahWrZ_7ANvdKOEUAOuCOTS4dEPjy1pJoP5g3UuvzSolKaBXBOQSJV7E=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> FOUX </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 10 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/TRnzlNzpFZptmcV0rX0ycti3EdOl7wUpaY5BjxNwnLRyoX8CO19D43047UjFhUjJDJ-LcqwHHyQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Trishna </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 19 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/jc9QOrNT3WS31D6YWYSEFDFBOdMtOmM-D_QvDgz7djtL6O11wdyRAJd44Y4iDwKOtYehuc_KJQ=s900-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Choidog </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 9 сингл </span>
            </div>
        </div>
        <div className="bg-white dark:bg-[#131313] h-[250px] w-52 rounded-xl flex justify-center cursor-pointer transition-all duration-500 hover:scale-110">
            <div className="mt-6 w-40 h-40 bg-[url('https://yt3.googleusercontent.com/_WWrpcwe667hn5gYmyJzzsN8WHKkFgZoFToGAMhaK8uUenAIi0mMoHfG2Qk66MdPc4lHPdYTGA=s176-c-k-c0x00ffffff-no-rj')] bg-cover rounded-full"> 
                <div className="text-gray-300 font-bold text-sm flex items-start mt-[170px] dark:text-white"> Big Gee </div>
                <span className="text-gray-300 flex items-start text-xs dark:text-white "> 21 сингл </span>
            </div>
        </div>

      </div>
      
    </div>
 )
} 

