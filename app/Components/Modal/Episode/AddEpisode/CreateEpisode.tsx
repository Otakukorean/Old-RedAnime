import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button, Code,Paper,Flex,Input, NumberInput, Checkbox } from '@mantine/core';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from 'axios';
import { on } from 'events';

interface PageProps {
  animeId : number;
  refetch : any
}


export const  CreateEpisode = (props : PageProps) => {
  const form = useForm({
    initialValues: {
      animeId : props.animeId,
      Servers: [{ name: '', ServerUrl: "" }],
      EpNumber : 0 ,
      EpName :"" ,
      islast : false ,
      isfirst : false ,
      pin :false
    },
    validate : {
      Servers : {
        name : (value) => (value.length ===0 ? "name is Required" : null),
        ServerUrl : (value) => (value.length ===0 ? "ServerUrl is Required" : null),
      }  ,
      animeId : (value) => (value == 0 ? "animeId is Required" : null),
      EpNumber : (value) => (value == 0 ? "EpNumber is Required" : null),
       
    }
  });

  const onSubmit = (values :any) => {
    mutate(values)
 
}
const queryClient = useQueryClient()

const { mutate } = useMutation(
 async (values ) => {
   return  axios.post('/api/Episodes/Create',values)
 },
 {
   onSuccess: (data) => {
     queryClient.invalidateQueries(['episodes'])
     props.refetch()
     form.reset()

   },
   onError: (error : any) => {

   console.log(error);
   
 
   },
 }
)


  const fields = form.values.Servers.map((item, index) => (
    <Group  mt="xs">
      <TextInput
        placeholder="name"
  
        sx={{ flex: 1 }}
        {...form.getInputProps(`Servers.${index}.name`)}
        label="اضافة سيرفر"
        styles={{'label' :{color:"#fff",marginBottom:"10px",fontSize:"1rem"},'input' : {border:"0",background:"#ffff",color:"#000"}}}
       
      />
      <TextInput
    placeholder="ServerUrl"
  
    sx={{ flex: 1 }}
    {...form.getInputProps(`Servers.${index}.ServerUrl`)}
    label="اضافة سيرفر"
    styles={{'label' :{color:"#fff",marginBottom:"10px",fontSize:"1rem"},'input' : {border:"0",background:"#ffff",color:"#000"}}}
       
      />

      <ActionIcon color="red" onClick={() => form.removeListItem('Servers', index)}>
       
      </ActionIcon>
    </Group>
  ));

  return (
     <Paper radius="md" p="xl" bg={"#101317"} >
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
    <Flex justify={'center'} align={'center'} direction={'column'}>
    <Input.Wrapper  label="animeId" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <NumberInput  w={200} readOnly  type='number' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}  {...form.getInputProps('animeId')} />
     </Input.Wrapper>
    <Input.Wrapper  label="EpNumber" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <NumberInput  w={200}  type='number' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}  {...form.getInputProps('EpNumber')} />
     </Input.Wrapper>
    <Input.Wrapper   style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <Group mt="xs">
        <Checkbox styles={{'input':{border:"0",background:"#ffff",color:"#fff"},'label':{color:"#fff"}}}    {...form.getInputProps('isfirst', { type: 'checkbox' })}   label="isfirst" />
        <Checkbox styles={{'input':{border:"0",background:"#ffff",color:"#fff"},'label':{color:"#fff"}}}    {...form.getInputProps('islast', { type: 'checkbox' })}   label="islast" />
        <Checkbox styles={{'input':{border:"0",background:"#ffff",color:"#fff"},'label':{color:"#fff"}}}    {...form.getInputProps('pin', { type: 'checkbox' })}   label="pin" />
      </Group>     
      </Input.Wrapper>
    <Input.Wrapper  label="EpName" style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.2rem"}}}>
    <TextInput  w={200}  type='text' styles={{'input':{border:"0",background:"#ffff",color:"#000"}}}  {...form.getInputProps('EpName')} />
     </Input.Wrapper>
      
      {fields}

      <Group position="center" mt="md" mb={30}>
        <Button
          onClick={() =>
            form.insertListItem('Servers', {  name: '', ServerUrl: "" })
          }
        >
          اضافة سيرفر
        </Button>
      </Group>
      <Input.Wrapper style={{marginBottom:"1rem"}} styles={{'label' :{color:"#fff" , fontSize:"1.1rem"}}}>
    
    <Button type="submit" styles={{'root' :{background :"#FB2576",transition:"all 0.2s ease",':hover':{background:"#FB2576",opacity:"0.7"}}}}>Submit</Button>
          </Input.Wrapper>      
      </Flex>
      </form>


      
   
    </Paper>
  );
}