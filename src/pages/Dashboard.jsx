import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/dashboard/Header'
import Nav from '../components/dashboard/Nav'
import Card from '../components/dashboard/Cardy'

function Dashboard() {
      
  return (
    <Box p={"30px 70px"}>
        <Header />
        <Nav />
        <Card />
    </Box>
  )
}

export default Dashboard