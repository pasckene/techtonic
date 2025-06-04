import Image from "next/image";
import {Header, Footer, Category} from "@/components/index"
import image from '../public/assests/techtonic.jpg'
import image2 from '../public/assests/tt1.jpg'
import Link from "next/link";


export default function Home() {
  return (
   <>
   <Header />
   <section  className=" grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 lg:px-33 py-5 my-20">
    <div className=" relative h-[40rem] ">
      <Image src={image} width={100} height={100} alt="Hero Image" className="w-full h-full object-cover rounded-xl absolute" />
      <div className=" absolute bg-[#0b021bdb] w-full bottom-0 backdrop-blur-md rounded-xl p-3 space-y-3 ">
        <div className="inline-flex items-center gap-2 p-1 bg-indigo-500 w-auto text-xs me-2 rounded-full">
          <i className=" fas fa-umbrella"></i>
          <p>Life style</p>
        </div>
        <h1 className=" text-3xl font-bold drop-shadow-lg">Example Article Title</h1>
        <div className=" flex items-center gap-4 font-semibold text-gray-300 mt-2"> 
          <Image src={image2} alt="ano im"  className=" w-8 h-8 rounded-full object-cover" />
          <p>5th August, 2025</p>
          <p>,</p>
          <p>3 min read</p>
        </div>
      </div>
    </div>


     <div className=" grid grid-cols-2 gap-5 ">
      <div >
        <Link href="/">
          <div className=" relative h-[300px] w-full border-1 border-[#52456647] rounded-xl">
            <Image src={image2} alt="Author Image" width={100} height={100} className=" w-full h-full rounded-xl object-cover" />
            <div className=" absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-[#0b0a20] to-transparent "></div>
            <div className=" absolute bottom-0 left-0 w-full p-3 space-y-3 text-white rounded-b-xl">
              <div className="inline-flex items-center gap-2 p-1 bg-indigo-500 w-auto text-xs me-2 rounded-full">
                <i className=" fas fa-umbrella"></i>
                <p>Life style</p>
              </div>
              <h1 className=" text-2xl font-bold drop-shadow-lg ">Example Article Title</h1>
                <div className=" flex items-center gap-4 font-light text-gray-300 mt-2"> 
                  <p>By Kene Paschal</p>
                  
                  <p>3 min read</p>
                </div>
              
              
              
            </div>
          </div>
        </Link>
      </div>
      <div >
        <Link href="/">
          <div className=" relative h-[300px] w-full border-1 border-[#52456647] rounded-xl">
            <Image src={image2} alt="Author Image" width={100} height={100} className=" w-full h-full rounded-xl object-cover" />
            <div className=" absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-[#0b0a20] to-transparent "></div>
            <div className=" absolute bottom-0 left-0 w-full p-3 space-y-3 text-white rounded-b-xl">
              <div className="inline-flex items-center gap-2 p-1 bg-indigo-500 w-auto text-xs me-2 rounded-full">
                <i className=" fas fa-umbrella"></i>
                <p>Life style</p>
              </div>
              <h1 className=" text-2xl font-bold drop-shadow-lg ">Example Article Title</h1>
                <div className=" flex items-center gap-4 font-light text-gray-300 mt-2"> 
                  <p>By Kene Paschal</p>
                  
                  <p>3 min read</p>
                </div>
              
              
              
            </div>
          </div>
        </Link>
      </div>
      <div >
        <Link href="/">
          <div className=" relative h-[300px] w-full border-1 border-[#52456647] rounded-xl">
            <Image src={image2} alt="Author Image" width={100} height={100} className=" w-full h-full rounded-xl object-cover" />
            <div className=" absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-[#0b0a20] to-transparent "></div>
            <div className=" absolute bottom-0 left-0 w-full p-3 space-y-3 text-white rounded-b-xl">
              <div className="inline-flex items-center gap-2 p-1 bg-indigo-500 w-auto text-xs me-2 rounded-full">
                <i className=" fas fa-umbrella"></i>
                <p>Life style</p>
              </div>
              <h1 className=" text-2xl font-bold drop-shadow-lg ">Example Article Title</h1>
                <div className=" flex items-center gap-4 font-light text-gray-300 mt-2"> 
                  <p>By Kene Paschal</p>
                  
                  <p>3 min read</p>
                </div>
              
              
              
            </div>
          </div>
        </Link>
      </div>
      <div >
        <Link href="/">
          <div className=" relative h-[300px] w-full border-1 border-[#52456647] rounded-xl">
            <Image src={image2} alt="Author Image" width={100} height={100} className=" w-full h-full rounded-xl object-cover" />
            <div className=" absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-[#0b0a20] to-transparent "></div>
            <div className=" absolute bottom-0 left-0 w-full p-3 space-y-3 text-white rounded-b-xl">
              <div className="inline-flex items-center gap-2 p-1 bg-indigo-500 w-auto text-xs me-2 rounded-full">
                <i className=" fas fa-umbrella"></i>
                <p>Life style</p>
              </div>
              <h1 className=" text-2xl font-bold drop-shadow-lg ">Example Article Title</h1>
                <div className=" flex items-center gap-4 font-light text-gray-300 mt-2"> 
                  <p>By Kene Paschal</p>
                  
                  <p>3 min read</p>
                </div>
              
              
              
            </div>
          </div>
        </Link>
      </div>
    </div>

   

    
   </section>
   <Footer />
   
   </>
  );
}
