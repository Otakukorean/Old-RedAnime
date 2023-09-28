"use client"
import { SignIn } from '@clerk/nextjs'
import { Flex } from '@mantine/core'
import React from 'react'

const page = () => {
  return (
    <>
    <title></title>
    <Flex justify={'center'} align={'center'} pt={50}>
     <SignIn />
    </Flex>
    </>
  )
}

export default page
