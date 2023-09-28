"use client"
import { SignUp } from '@clerk/nextjs'
import { Flex } from '@mantine/core'
import React from 'react'

const page = () => {
  return (
    <Flex justify={'center'} align={'center'} pt={50}>
     <SignUp />
    </Flex>
  )
}

export default page