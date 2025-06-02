import Link from 'next/link'
import React from 'react'
import {Menubar, MenubarContent,MenubarItem, MenubarMenu, MenubarTrigger} from "../components/ui/menubar"

const Header = () => {
  return (
    <div className=' '>
      <header className=' flex flex-row justify-between items-center bg-indigo-500 my-5 mx-5 lg:mx-33 px-2 py-4'>
        <Link href={'/'}>
          <h1 className=' text-2xl lg:text-3xl font-bold ms-3'>TechTonic</h1>
        </Link>

        <Menubar >
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
                            <Link href={'/pages/contact'}>Count</Link>    
              </MenubarItem>
              <MenubarItem>
                            <Link href={'/dashboard/article/all'}>Articles</Link>    
              </MenubarItem>
   
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
    </div>
  )
}

export default Header
