"use client"
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect, useState } from 'react'
import Card from '@/app/Components/Cards/AnimeCard'
import { AddBtn ,AddBtnContainer ,FiltersContainer } from './Styles'
import { useUser } from '@clerk/nextjs'
import ModalBtn from '@/app/Components/Modal/anime/CreateAnime/ModalBtn'
import CreateModal from '@/app/Components/Modal/anime/CreateAnime/CreateModal'
import CreateGenerModal from '@/app/Components/Modal/Gener/CreateGenerModal'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Input,Select,MultiSelect , Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {Helmet} from "react-helmet";

const Years = [
  {
     value: '1990', label: '1990' 
  },
  {
     value: '1991', label: '1991' 
  },
  {
     value: '1992', label: '1992' 
  },
  {
     value: '1993', label: '1993' 
  },
  {
     value: '1994', label: '1994' 
  },
  {
     value: '1994', label: '1994' 
  },
  {
     value: '1995', label: '1995' 
  },
  {
     value: '1996', label: '1996' 
  },
  {
     value: '1997', label: '1997' 
  },
  {
     value: '1998', label: '1998' 
  },
  {
     value: '1999', label: '1999' 
  },
  {
     value: '2000', label: '2000' 
  },
  {
     value: '2001', label: '2001' 
  },
  {
     value: '2002', label: '2002' 
  },
  {
     value: '2003', label: '2003' 
  },
  {
     value: '2004', label: '2004' 
  },
  {
     value: '2005', label: '2005' 
  },
  {
     value: '2006', label: '2006' 
  },
  {
     value: '2007', label: '2007' 
  },
  {
     value: '2008', label: '2008' 
  },
  {
     value: '2009', label: '2009' 
  },
  {
     value: '2010', label: '2010' 
  },
  {
     value: '2011', label: '2011' 
  },
  {
     value: '2012', label: '2012' 
  },
  {
     value: '2013', label: '2013' 
  },
  {
     value: '2014', label: '2014' 
  },
  {
     value: '2015', label: '2015' 
  },
  {
     value: '2016', label: '2016' 
  },
  {
     value: '2017', label: '2017' 
  },
  {
     value: '2018', label: '2018' 
  },
  {
     value: '2019', label: '2019' 
  },
  {
     value: '2020', label: '2020' 
  },
  {
     value: '2021', label: '2021' 
  },
  {
     value: '2022', label: '2022' 
  },
  {
     value: '2023', label: '2023' 
  },
]

const page = () => {
  const [SelectedGeners , SetSelectedGeners] = useState<any>([])
  const [tags,SetTags] = useState([])
  const [type,SetType] = useState<string | any>('')
  const [season,SetSeason] = useState<string | any>('')
  const [Year,SetYear] = useState<string |  any>('')
  const [status,SetStatus] = useState<any>('')
  const [date,SetDate] = useState<any>('')
  const matches = useMediaQuery('(min-width: 56.25em)');

  const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch} = useInfiniteQuery(['filters'] , async({pageParam = 0}) => {
    const res= await fetch(`/api/anime/filter?page=${pageParam}${SelectedGeners &&`&geners=${SelectedGeners.join(',')}`}${type && `&type=${type}`}${season && `&season=${season}`}${Year && `&year=${Year}`}${status && `&status=${status}`}${date && `&date=${date}`}`)
    

    
    return res.json()
  } , {
    getNextPageParam: (lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
    ,
  })
  const {ref , inView} = useInView()
  
  
  const {user } = useUser()

  useEffect(() => {
    if(inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])
  useEffect( () => {
    axios.get('/api/tags/Get').then((res) => {
      SetTags(res.data)
    })
  },[])
  useEffect(() => {
    setTimeout(() => {
      refetch()
    },1000 )
    
  },[SelectedGeners,type,season,Year,date,status])
  

  


  return (
   <>

   <Helmet>
                <meta charSet="utf-8" />
                <title>قائمة الانمي</title>               
            </Helmet>
    <div >
   
      {user?.organizationMemberships[0].role === "admin" && (
           <AddBtnContainer>
                   <ModalBtn title={<AddBtn>Add Anime</AddBtn>} ModalPage={<CreateModal refetch={refetch}/>} />
                   <ModalBtn title={<AddBtn>Add Gener</AddBtn>} ModalPage={<CreateGenerModal/>} />
           
          
           </AddBtnContainer>
      )}
      <FiltersContainer>
      <Input.Wrapper  style={{marginBottom:"0.5rem",marginTop:"1rem"}} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"}}}>
    <MultiSelect
       data={tags}
       w={matches ? 200 : 150 } 
       onChange={SetSelectedGeners}
       placeholder="التصنيفات"
       style={{marginBottom:"1rem" }} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"},'wrapper':{background:"#FB2576",borderRadius:"15px",color:"#fff"} ,'values': {color:"#fff"},'defaultValueLabel': {color:"#fff"},'searchInput':{'::placeholder':{color:"#fff",textAlign:"center"}}}}
      
    />
          </Input.Wrapper>  
          <Input.Wrapper  style={{marginBottom:"0.5rem"}} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"}}}>
    <Select
   w={matches ? 200 : 150 } 
      placeholder="الموسم"
      styles={{'label' :{color:"#fff" , fontSize:"1.1rem"},'input':{background:"#FB2576",borderRadius:"15px",color:"#fff",border :'none','::placeholder':{color:"#fff",textAlign:"center"}}}}
      onChange={SetSeason}
      data={[
        { value: 'صيف', label: 'صيف' },
        { value: 'خريف', label: 'خريف' },
        { value: 'شتاء', label: 'شتاء' },
        { value: 'ربيع', label: 'ربيع' },
      ]}
    />
          </Input.Wrapper>   
          <Input.Wrapper  style={{marginBottom:"0.5rem"}} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"}}}>
    <Select
   w={matches ? 200 : 150 } 
      placeholder=" النوع"
      styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"},'input':{background:"#FB2576",borderRadius:"15px",color:"#fff",border :'none','::placeholder':{color:"#fff",textAlign:"center"}}}}
      onChange={SetType}
      data={[
        { value: 'TV', label: 'TV' },
        { value: 'MOVIE', label: 'MOVIE' },
        { value: 'ONA', label: 'ONA' },
        { value: 'OVA', label: 'OVA' },
      ]}
    />
          </Input.Wrapper>   
          <Input.Wrapper  style={{marginBottom:"0.5rem"}} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"}}}>
    <Select
   w={matches ? 200 : 150 } 
      placeholder="السنة"
      styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"},'input':{background:"#FB2576",borderRadius:"15px",color:"#fff",border :'none','::placeholder':{color:"#fff",textAlign:"center"}}}}
      onChange={SetYear}
    
      data={Years}
    />
          </Input.Wrapper>   
          <Input.Wrapper  style={{marginBottom:"0.5rem"}} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"}}}>
    <Select
   w={matches ? 200 : 150 } 
      placeholder="الحالة"
      styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"},'input':{background:"#FB2576",borderRadius:"15px",color:"#fff",border :'none','::placeholder':{color:"#fff",textAlign:"center"}}}}
      onChange={SetStatus}
    
      data={[
         { value: 'منتهي', label: 'منتهي' },
         { value: 'مستمر', label: 'مستمر' },
       ]}
    />
          </Input.Wrapper>   
          <Input.Wrapper  style={{marginBottom:"0.5rem"}} styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"}}}>
    <Select
   w={matches ? 200 : 150 } 
      placeholder="ترتيب حسب"
      styles={{'label' :{color:"#fff" , fontSize: matches ? "1.1rem" : "0.7rem"},'input':{background:"#FB2576",borderRadius:"15px",color:"#fff",border :'none','::placeholder':{color:"#fff",textAlign:"center"}}}}
      onChange={SetDate}
    
      data={[
         { value: 'asc', label: 'الاقدم' },
         { value: 'desc', label: 'الاحدث' },
       ]}
    />
          </Input.Wrapper>   
      </FiltersContainer>
      {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
                <CardContainer layout>
            {
                
                page.result?.result?.map((el : any,key : any) => (
                  <Card key={key} data={{title : el?.anime?.title,type : el?.anime?.type,id : el?.anime?.id,imageUrl:el?.anime?.imageUrl , rating:el?.anime?.rating,season:el?.season, year:el?.year,status:el?.status,description:el?.description}}/>
                ))
                
            }
            </CardContainer>
             <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
       
          </React.Fragment>
        ))
      }
      
    </div>
    </>
  )
}

export default page
