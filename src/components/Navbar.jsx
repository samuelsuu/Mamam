import React from 'react'
import img from "../assets/Frame9.png"
import { Center, Flex, Spacer, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return ( 
    <Flex justifyContent={'space-between'} p={'30px 40px 10px 80px'} alignItems={'Center'} color={'#000000'} fontWeight={400} fontSize={20}>
        <div>
            <img src={img} alt="" srcset="" />
        </div>
        <div style={{display: "flex", gap: "2rem"}}>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>About Us</Link>
        </div>
        <Box>
            <Link to="/Login">Login</Link>
        </Box>
    </Flex>
  )
}

export default Navbar