import React, { useState } from 'react';
import { Box, Flex, IconButton, Link, useDisclosure, VStack } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import img from "../assets/Frame9.png";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <Box bg="white" boxShadow="md" py={4} px={8}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        {/* Logo */}
        <Box>
          <img src={img} alt="Logo" style={{ height: '40px' }} />
        </Box>

        {/* Desktop Menu */}
        <Flex display={{ base: 'none', md: 'flex' }} gap="2rem" alignItems="center">
          <RouterLink to='/'>Home</RouterLink>
          <RouterLink to='/contact'>Contact Us</RouterLink>
          <RouterLink to='/about'>About Us</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={menuOpen ? <FiX /> : <FiMenu />}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          variant="ghost"
        />

        {/* Mobile Menu */}
        {isOpen && (
          <Box
            position="absolute"
            top="60px"
            right="0"
            width="100%"
            bg="white"
            shadow="md"
            display={{ base: 'block', md: 'none' }}
            zIndex={20}
          >
            <VStack spacing={4} alignItems="flex-start" p={4}>
              <RouterLink to='/' onClick={toggleMenu}>Home</RouterLink>
              <RouterLink to='/contact' onClick={toggleMenu}>Contact Us</RouterLink>
              <RouterLink to='/about' onClick={toggleMenu}>About Us</RouterLink>
              <RouterLink to="/login" onClick={toggleMenu}>Login</RouterLink>
            </VStack>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
