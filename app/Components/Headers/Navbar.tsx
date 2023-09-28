import React , {Dispatch, SetStateAction, useState} from 'react'
import { Avatar, Header , Items, Logo, Nav, SecondItemsContainer, Ul ,LogoMenuContainer ,SignInBtn} from './Style'
import {AiOutlineBell,AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai'
import { UserButton, useUser,useAuth } from '@clerk/nextjs';
import { useOrganizationList } from "@clerk/nextjs";
import Search from '../Search'
import Notification from '../notifications'
interface PageProps {
     active : boolean ;
     setActive : Dispatch<SetStateAction<boolean>>
}

const Navbar = ({active , setActive} : PageProps) => {
     const {isSignedIn , user} = useUser()
     const [isSearchOpen , setisSearchOpen] = useState(false)

     const { organizationList } = useOrganizationList();

     
     
  return (
    <div>
      <Header>
               <Nav>
                    <Ul>
                         <Items>
                         <LogoMenuContainer>
                              <Logo>
                                   <img src="/1116148-illustration-anime-logo-moustache-Death-Note-wing-sketch-horn-font.jpg" alt="" />
                              </Logo>
                              <AiOutlineMenu cursor={'pointer'} size={30} color='#fff' onClick={() => setActive(!active)} />
                         </LogoMenuContainer>
                         </Items>

                         <SecondItemsContainer>
                              {isSignedIn ? (
                                   <>
                                       <Items>
                             
                                       <UserButton afterSignOutUrl="/"/>
                        </Items>
                        <Items>
                             <Notification/>
                        </Items>
                                   </>
                              ) : <>
                                   <SignInBtn href='/sign-in'>
                                   تسجيل دخول
                                   </SignInBtn>
                              </>}
                          
                              <Items>
                                   <AiOutlineSearch onClick={()=> setisSearchOpen(true)} cursor={'pointer'} color='#fff' size={25}/>
                              </Items>
                         </SecondItemsContainer>
                    </Ul>
               </Nav>
      </Header>
      {
      isSearchOpen && <Search isSearchOpen={isSearchOpen} setSearchOpen={setisSearchOpen} />
    }
    </div>
  )
}

export default Navbar


