import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

interface PageProps {
     ModalPage : React.ReactElement;
     title : React.ReactElement;
}

const ModalBtn = (props : PageProps) => {
     const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
     <Modal opened={opened} onClose={close}  centered>
          {props.ModalPage}
      </Modal>

     <span onClick={open}>
     {props.title}
     </span>
    
    </>
  )
}

export default ModalBtn
