import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/Rect.png'
import SignForm from '../components/SignForm'

function SignUp() {
  return (
    <Flex justifyContent={'space-between'} p={'20px 0 20px 80px'} alignItems={'center'} h={'100vh'} gap={'2rem'}>
        <SignForm />

        <Box  h={'976px'}  borderRadius={'10px'} opacity={'85%'}>
        <img src={img1} />
        </Box>
        
    </Flex>
  )
}

export default SignUp