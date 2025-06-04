import Link from 'next/link'
import React from 'react'
import {Menubar, MenubarContent,MenubarItem, MenubarMenu, MenubarTrigger} from "../components/ui/menubar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <div className=' '>
      <header className=' flex flex-row justify-between items-center bg-indigo-500 my-5 mx-5 lg:mx-33 px-2 py-4'>
        <Link href={'/'}>
          <h1 className=' text-2xl lg:text-3xl font-bold ms-3'>TechTonic</h1>
        </Link>

        <Menubar className=' text-white bg-[#0000] border-0 shadow-none hidden lg:flex'>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href={'/'}>Home</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href={'/category'}>Category</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Dashboard
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href={'/dashboard'}>Overview</Link>    
              </MenubarItem>
              <MenubarItem>
                <Link href={'/dashboard/article/manage'}>Create Article</Link>    
              </MenubarItem>
              <MenubarItem>
                <Link href={'/dashboard/article/all'}>Articles</Link>    
              </MenubarItem>
              <MenubarItem>
                <Link href={'/dashboard/profile'}>Edit Profile</Link>    
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Pages
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href={'/pages/about'}>About</Link>    
              </MenubarItem>
              <MenubarItem>
                <Link href={'/pages/contact'}>Contact</Link>    
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className=' flex items-center space-x-3'>
        {/* bookmark */}
          <Dialog>
            <DialogTrigger>
              <i className="ri-heart-line text-2xl"></i>
            </DialogTrigger>
            <DialogContent className={`max-w-xl text-white bg-[#050510] border border-gray-800`}>
              <DialogHeader>
                <h1>Bookmark Article (3) </h1>
              </DialogHeader>
              <div className=' flex items-center space-x-2 mt-6'>
                <div className=' grid flex-1 gap-2'>
                  <div className=' overflow-auto max-h-[20rem]'>
                    <div key={1}>
                      <Link href={`/`} >
                        <div className=' flex items-center gap-3 rounded-lg p-3 my-5 bg-[#08081a] '> 
                          <img src="../assests/techtonic.jpg" alt="Article Thumbnail" className='w-full h-32 object-cover rounded-lg' />
                          <div className=' space-y-2 w-full'>
                            <h3>Example Article Title</h3>
                            <div className=' flex items-center justify-between gap-3'>
                              <p className=' text-sm text-gray-400'>
                                <i className="fa fa-eye"></i>123 views
                              </p>
                              <button className=' bg-red-200 text-red-600 px-3 py-2 rounded-lg hover:bg-red-600 transition-all duration-200'>
                                <i className='fa fa-trash'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {/* search */}
          <Dialog>
            <DialogTrigger>
              <i className="ri-search-line text-2xl"></i>
            </DialogTrigger>
            <DialogContent className={`max-w-xl text-white bg-[#050510] border border-gray-800`}>
              <DialogHeader>
                <input type="text" placeholder='Enter a keword...' id='' className=' border-1 border-[#0b0b24] bg-[#08081a] rounded-lg py-2 outline-0 focus:ring-indigo-500 focus:ring-2 px-2 placeholder:text-sm text-[#7070b2] ' />
              </DialogHeader>
              <div className=' flex items-center space-x-2 mt-6'>
                <div className=' grid flex-1 gap-2'>
                  <h1>3 Articles found</h1>
                  <div className=' overflow-auto max-h-[20rem]'>
                    <div key={1}>
                      <Link href={`/`} >
                        <div className=' flex items-center gap-3 rounded-lg p-3 my-5 bg-[#08081a] '> 
                          <img src="../assests/techtonic.jpg" alt="Article Thumbnail" className='w-full h-32 object-cover rounded-lg' />
                          <div className=' space-y-2 w-full'>
                            <h3>Example Article Title</h3>
                            <div className=' flex items-center justify-between gap-3'>
                              <p className=' text-sm text-gray-400'>
                                <i className="fa fa-eye"></i>123 views
                              </p>
                              <button className=' bg-red-200 text-red-600 px-3 py-2 rounded-lg hover:bg-red-600 transition-all duration-200'>
                                <i className='fa fa-trash'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Link href={'/auth/login'} className=' hidden lg:flex bg-gradient-to-r from-indigo-500 to-pink-500 cursor-pointer text-[15px] font-bold px-6 py-3 rounded-full border-0 mr-3'>
           Login <i className="fas fa-sign-in-alt me-3"></i>

          </Link>

          <Sheet>
            <SheetTrigger>
              <i className="ri-menu-2-line text-2xl lg:hidden"></i> 
            </SheetTrigger>
            <SheetContent side="left" className=' bg-[#050510] text-white border border-gray-800'>
              <SheetHeader>
                <SheetTitle className=' text-2xl font-bold'>TechTonic</SheetTitle>
                <SheetDescription>
                  Your one touch blog
                </SheetDescription>
              </SheetHeader>
              <ul className=' ms-3 space-y-7'>
                <li>
                  <a href="" className=' flex items-center gap-3'><i className='ri-home-2-line'></i>Dashboard</a>
                </li>
                <li>
                  <a href="" className=' flex items-center gap-3'><i className='ri-book-2-line'></i>Article</a>
                </li>
               
                <li>
                  <a href="" className=' flex items-center gap-3'><i className='ri-user-2-line'></i>Profile</a>
                </li>
                <li>
                  <a href="" className=' flex items-center gap-3'><i className='ri-settings-2-line'></i>Settings</a>
                </li>
              </ul>
              </SheetContent>
             

          </Sheet>
        </div>
      </header>
    </div>
  )
}

export default Header
