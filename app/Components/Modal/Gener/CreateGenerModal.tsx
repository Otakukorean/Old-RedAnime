import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button,Paper,Text ,TextInput,Input,Select,Textarea, Flex  } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { CreateGenerDto } from '@/app/types/DTO/Geners/CreateGenereDto';
import axios from 'axios';
import { log } from 'console';
const CreateGenerModal = () => {
  const form = useForm({
    validate: zodResolver(CreateGenerDto),
    initialValues: {
    name :""
    },
  });
  const onSubmit =async (values :any) => {
      await axios.post('/api/Gener/Create',values).then((res) => {
        if(res.data.success) {
          form.reset()
        }
        
      }).catch((error) => {
        console.log(error.message);
        
      })
    
  }
  return (
    <div>
      <Paper radius="md" p="xl" bg={"#101317"} >
      <Text color='#fff' align='center' size={'1.3rem'}>انشاء تصنيف</Text>
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <Flex justify={'center'} align={'center'} direction={'column'} mt={30}>
     <Input.Wrapper label="title" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <TextInput placeholder='العنوان'  w={200} type='text' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}   {...form.getInputProps('name')}  />
     </Input.Wrapper>       
     <Input.Wrapper style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    
    <Button type="submit" styles={{'root' :{background :"#FB2576",transition:"all 0.2s ease",':hover':{background:"#FB2576",opacity:"0.7"}}}}>Submit</Button>
          </Input.Wrapper>   
          
          

     </Flex>
        </form>
         
 

      
   
  </Paper>
    </div>
  )
}

export default CreateGenerModal
