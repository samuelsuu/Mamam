import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/Rect.png'
import SignForm from '../components/SignForm'

function SignUp() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on larger screens
      justifyContent={'center'} // Center content
      alignItems={'center'}
      p={{ base: '20px', md: '20px 0 20px 80px' }} // Adjust padding for mobile and larger screens
      h={'100vh'}
      gap={'2rem'}
    >
      <Box w={{ base: '100%', md: 'auto' }} mb={{ base: '2rem', md: '0' }}>
        <SignForm />
      </Box>

      <Box
        w={{ base: '100%', md: '710px' }} // Full width on mobile, fixed width on larger screens
        h={{ base: 'auto', md: '976px' }} // Auto height on mobile, fixed height on larger screens
        borderRadius={'10px'}
        opacity={'85%'}
        overflow={'hidden'} // Ensure image fits within the box
      >
        <img src={img1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </Flex>
  )
}

export default SignUp
