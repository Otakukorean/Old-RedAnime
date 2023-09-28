import React, { ReactNode, useEffect } from 'react'
import {Main, SiderBarContainer ,Nav,NavLogo,NavList,NavLogoIcon,NavName} from './Style'
import Link from 'next/link'
import {AiOutlineHome,AiOutlineClockCircle,AiFillHeart,AiOutlineOrderedList} from 'react-icons/ai'
import {PiFireBold} from 'react-icons/pi'
import {BsEye} from 'react-icons/bs'
import {usePathname} from 'next/navigation'
interface Props {
  children : ReactNode ,
  active : boolean
}

const Links = [
  {
    name : 'قائمة الانمي' ,
    icon : <AiOutlineOrderedList size={30} color='#fff'/> ,
    url : '/anime-list'
  } ,
  {
    name : 'الاكثر شعبية' ,
    icon : <PiFireBold size={30} color='#fff'/> ,
    url : '/popular'
  } ,
  {
    name : 'سجل المشاهدة' ,
    icon : <BsEye size={30} color='#fff'/> ,
    url : '/history'
  } ,
  {
    name : 'المشاهدة لاحقا' ,
    icon : <AiOutlineClockCircle size={30} color='#fff'/> ,
    url : '/watch-later'
  } ,
  {
    name : 'المفضلة' ,
    icon : <AiFillHeart size={30} color='#FB2576'/> ,
    url : '/favourite'
  } ,
  
]

const Sidebar = ({children , active} : Props) => {
  const path = usePathname()
  
  return (
    <Main className={active ? 'Show-space-toggle' : 'space-toggle'} >
    <SiderBarContainer className={active ? 'show' : ''}>
        <Nav>
          <div>
          <Link href={'/'} className={path === '/' ? 'active' : ''}  passHref legacyBehavior>
          <NavLogo className={path === '/' ? 'active' : ''}>
            <NavLogoIcon>
          <AiOutlineHome size={30} color='#fff' />
          </NavLogoIcon>
          <NavName>الصفحة الرئيسية</NavName>
          </NavLogo>
          </Link>
          <div>  
            {Links?.map((val,key) => (
         <Link href={val.url}  passHref className={path == val.url ? 'active' :''} legacyBehavior>
         <NavLogo className={path == val.url ? 'active' :''} >
           <NavLogoIcon>
              {val.icon}
         </NavLogoIcon>
         <NavName>{val.name}</NavName>
         </NavLogo>
         </Link>
            ))}    
          </div>
          </div>

        </Nav>
    </SiderBarContainer>
    {children}
    </Main>
  )
}

export default Sidebar
