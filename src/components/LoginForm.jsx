import React, { useState } from "react";
import { Box, Text, Input, Flex, Button, Checkbox, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get stored user info from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      toast({
        title: "Login successful.",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate("/Dashboard");
    } else {
      toast({
        title: "Login failed.",
        description: "Invalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Text fontSize={{ base: "36px", md: "48px" }} fontWeight={600} mb={3}>
        Welcome back
      </Text>
      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400} mb={2}>
        Welcome back! Please enter your details
      </Text>

      <Box pt={10} ml={{ base: "0", md: "50px" }}>
        <Text mb="8px" fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>Email</Text>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} size="md" marginBottom={7} />

        <Text mb="8px" fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>Password</Text>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} size="md" type="password" />
      </Box>

      <Flex justifyContent={'space-between'} my={'10px'} fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
        <Checkbox size="lg" isInvalid>
          Remember me
        </Checkbox>

        <Link to='/'>Forget Password?</Link>
      </Flex>

      <Box my={'50px'}>
        <Button
          onClick={handleLogin}
          bg='#D43710'
          color='#ffffff'
          w={{ base: '100%', md: '60vh' }} // Full width on mobile, 60vh on larger screens
          p={{ base: '1rem', md: '4px' }} // Larger padding on mobile
          borderRadius='10%'
          fontSize={{ base: 'sm', md: 'md' }} // Smaller font size on mobile
        >
          Sign in
        </Button>
      </Box>

      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
        Don’t have an account? 
        <Link to='/SignUp' style={{color: '#D43710'}}>Sign up for free</Link>
      </Text>
    </Box>
  );
}

export default LoginForm;
