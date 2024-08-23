import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import LoginForm from '../components/LoginForm';
import img from '../assets/Rec.png';

function Login() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
      p={{ base: '20px', md: '20px 0 20px 80px' }}
      h={'100vh'}
      gap={'2rem'}
    >
      <Box w={{ base: '100%', md: 'auto' }} mb={{ base: '2rem', md: '0' }}>
        <LoginForm />
      </Box>

      <Box
        w={{ base: '100%', md: '710px' }}
        h={{ base: 'auto', md: '976px' }}
        borderRadius={'10px'}
        opacity={'85%'}
        overflow={'hidden'}
      >
        <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </Flex>
  );
}

export default Login;
