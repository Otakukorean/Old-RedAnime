import React, { useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Paper, Text, Flex, Group ,ScrollArea  } from '@mantine/core';
import { AiOutlineBell } from 'react-icons/ai';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import Link from 'next/dist/client/link';
const index = () => {
  const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch} = useInfiniteQuery(['notifications'] , async({pageParam = ''}) => {
    const res= await fetch(`/api/notifications/Get?page=${pageParam}`)
    return res.json()
  } , {
    getNextPageParam :  (lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
  })
  const {ref , inView} = useInView()
  useEffect(() => {
    if(inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])
     const [opened, { open, close }] = useDisclosure(false);
     const matches = useMediaQuery('(min-width: 56.25em)');
     const  ChnageToRead =async (id : number ) => {
      await axios.put(`/api/notifications/changetoread?id=${id}`).then(() => {
        refetch()        
      }).catch(err => {
        console.log(err.message);
        
      })
     }
     const checkifNotifications = data?.pages[0]?.result?.result?.filter((not :any) => !not.isread).length
    console.log(data);
    
  return (
    <div>
       <Modal  opened={opened} onClose={close} title="" styles={{'title':{color:"#fff"} ,'root':{backgroundColor:"#101317",width:"100%"}}}
        scrollAreaComponent={ScrollArea.Autosize}
        
       >
          <Paper bg={'#222831'} >
        <Text align='center' color='#fff' size={'2rem'}>الاشعارات</Text>
        <Flex justify={'center'} align={'center'} pb={'xl'} direction={'column'} >
        {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
            {
                page.result?.result?.map((el : any,key : any) => (
                  <Link onClick={() => {
                    close() 
                    ChnageToRead(el?.id)
                  }} href={`/watch/${el?.Anime?.title}/${el?.episode?.EpName}`} style={{width: '100%'}}>
                  <Group p={5} style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background: !el?.isread ? "#020000":"",padding:'5px',}} mt={50} >
                  <Image src={el?.Anime?.imageUrl} style={{borderRadius:"10px",objectFit:"cover"}} height={100} width={70} alt='' />
                  <Text dir={'rtl'} color='#fff' style={{maxWidth: !matches ? '200px' : "300px"}}>      تم اضافة الحلقة {el?.episode?.EpNumber} من انمي {el?.Anime?.title}  </Text>
                </Group>
                </Link>
                ))
                
            }
            {
                              !page.result?.result?.length && (
                                <Text color='#fff' size={'xl'} mt={50} >لاتوجد اشعارات</Text>
                              )
                              
            }
                  <span ref={ref}  style={{visibility:"hidden"}}>load more</span>

       
          </React.Fragment>
        ))
      } 
      
     

        </Flex>
          </Paper>
      </Modal>
     <div onClick={open} style={{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",cursor:"pointer"}} >

      <AiOutlineBell onClick={open} size={25} color='#fff' cursor={'pointer'} />
      {
        checkifNotifications && (
          <span style={{position:'absolute',background:"#FB2576",borderRadius:"50%",height:"17px",width:"17px",textAlign:"center",bottom:"0",left:"15px",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}} >
            {data?.pages[0]?.result?.result?.filter((not :any) => !not.isread).length}
          
              </span>
        )
      }

      </div>
    </div>
  )
}

export default index
