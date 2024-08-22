import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LoginForm from '../components/LoginForm'
import img from '../assets/Rec.png'

function Login() {
  return (
    <Flex justifyContent={'space-between'} p={'20px 0 20px 80px'} alignItems={'center'} h={'100vh'} gap={'2rem'} >
        <LoginForm />

        <Box w={'710px'} h={'976px'} borderRadius={'10px'} opacity={'85%'}>
        <img src={img} />
        </Box>
        
    </Flex>
  )
}

export default Login