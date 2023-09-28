
import React, { useEffect, useState , useRef } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button,Paper,Text ,TextInput,Input,Select,Textarea, Flex ,NumberInput, Checkbox } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { UpdateAnimeDto } from '@/app/types/DTO/Anime/UpdateAnimeDto';
import { MultiSelect } from '@mantine/core';
import axios from 'axios';

import {  CldUploadButton } from 'next-cloudinary';

import { useMutation, useQueryClient } from "@tanstack/react-query"

interface PageProps {
     id : number ;
  refetch : any ;
  title : string ;
  secondtitle : string ;
  type : string ;
  description : string ;
  imageUrl :string ;
  backdropImage : string ;
  rating : number;
  pin : boolean,
  year : number ,
  season : string ,
  status : string ;
  airday : string;

}

const UpdateModal = (props : PageProps) => {
  const [imageUrl,SetImageUrl] = useState<string>("")


  
  
  const form = useForm({
    validate: zodResolver(UpdateAnimeDto),
    initialValues: {
     id : props.id ,
     title : props.title ,
     secondtitle : props.secondtitle ,
     type : props.type ,
     description : props.description ,
     imageUrl : props.imageUrl,
     backdropImage : props.backdropImage ,
     rating : props.rating,
     pin : props.pin ,
     year : props.year ,
     season : props.season ,
     status : props.status  ,
     airday : props.airday ,

    },
  });


  const queryClient = useQueryClient()

  const onSubmit =async (values :any) => {
     mutate(values)
  
}

const { mutate } = useMutation(
  async (values ) => {
    return  axios.put('/api/anime/Update',values)
  },
  {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['animes'])
      props.refetch()
      form.reset()

    },
    onError: (error : any) => {
 
    
  
    },
  }
)

  
  return (
    <div>
      <Paper radius="md" p="xl" bg={"#101317"} >
      <Text color='#fff' align='center' size={'1.3rem'}>تعديل انمي</Text>
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <Flex justify={'center'} align={'center'} direction={'column'} mt={30}>
     <Input.Wrapper label="title" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <TextInput placeholder='العنوان'  w={200} type='text' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}   {...form.getInputProps('title')}  />
     </Input.Wrapper>            
     <Input.Wrapper label="Secondtitle" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <TextInput placeholder='العنوان 2'  w={200} type='text' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}   {...form.getInputProps('secondtitle')}  />
     </Input.Wrapper>            
    <Input.Wrapper  label="rating" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <NumberInput  w={200}  type='number' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}  {...form.getInputProps('rating')} />
     </Input.Wrapper>       
   
   
    <Input.Wrapper label="type" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    <Select
   w={200} 
      placeholder="اختر واحد"
      styles={{'input':{border:"0",background:"#ffff",color:"#000"}}} 

      data={[
        { value: 'TV', label: 'TV' },
        { value: 'MOVIE', label: 'MOVIE' },
        { value: 'ONA', label: 'ONA' },
        { value: 'OVA', label: 'OVA' },
      ]}
      {...form.getInputProps('type')}
    />
          </Input.Wrapper>   
          <Input.Wrapper label="Season" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    <Select
   w={200} 
      placeholder="اختر واحد"
      styles={{'input':{border:"0",background:"#ffff",color:"#000"}}} 
      data={[
        { value: 'صيف', label: 'صيف' },
        { value: 'خريف', label: 'خريف' },
        { value: 'شتاء', label: 'شتاء' },
        { value: 'ربيع', label: 'ربيع' },
      ]}
      {...form.getInputProps('season')}
    />
          </Input.Wrapper>  
          <Input.Wrapper label="Status" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    <Select
   w={200} 
      placeholder="اختر واحد"
      styles={{'input':{border:"0",background:"#ffff",color:"#000"}}} 
      data={[
        { value: 'مستمر', label: 'مستمر' },
        { value: 'منتهي', label: 'منتهي' }
      ]}
      {...form.getInputProps('status')}
    />
          </Input.Wrapper>       
          <Input.Wrapper label="Air Day" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    <Select
   w={200} 
      placeholder="اختر واحد"
      styles={{'input':{border:"0",background:"#ffff",color:"#000"}}} 
      data={[
        { value: 'الاحد', label: 'الاحد' },
        { value: 'الاثنين', label: 'الاثنين' },
        { value: 'الثلاثاء', label: 'الثلاثاء' },
        { value: 'الاربعاء', label: 'الاربعاء' },
        { value: 'الخميس', label: 'الخميس' },
        { value: 'الجمعة', label: 'الجمعة' },
        { value: 'السبت', label: 'السبت' },
      ]}
      {...form.getInputProps('airday')}
    />
          </Input.Wrapper>         
       
          <Input.Wrapper label="Year" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
          <NumberInput  w={200}  type='number' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}  {...form.getInputProps('year')} />

          </Input.Wrapper>       
          <Input.Wrapper label="" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
      
      <Group mt="xs">
        <Checkbox styles={{'input':{border:"0",background:"#ffff",color:"#fff"},'label':{color:"#fff"}}}    {...form.getInputProps('pin', { type: 'checkbox' })}   label="pin" />
      </Group>
  
          </Input.Wrapper>       
          
      
  
    <Input.Wrapper label="description" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    <Textarea
      placeholder="القصة"
      styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}
      w={200} 
      {...form.getInputProps('description')}
    />

          </Input.Wrapper>

    <Input.Wrapper label="imageUrl" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <TextInput placeholder='imageUrl'  w={200} type='text' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}   {...form.getInputProps('imageUrl')}  />
     </Input.Wrapper>       
    <Input.Wrapper label="backdropImage" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <TextInput placeholder='backdropImage'  w={200} type='text' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}   {...form.getInputProps('backdropImage')}  />
     </Input.Wrapper>   


        

    <Input.Wrapper style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    
    <Button type="submit" styles={{'root' :{background :"#FB2576",transition:"all 0.2s ease",':hover':{background:"#FB2576",opacity:"0.7"}}}}>Submit</Button>
          </Input.Wrapper>   
          
    <CldUploadButton   uploadPreset="z1w6dtxd" onUpload={(result :any) => {
    SetImageUrl(result?.info?.secure_url)
    
  }} />
  <p style={{color:"#fff",maxWidth:"50px"}} >{imageUrl}</p>
     </Flex>
        </form>
         
 

    
   
  </Paper>
    </div>
  )
}

export default UpdateModal
