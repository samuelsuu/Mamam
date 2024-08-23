import React, { useState } from "react";
import { Box, Text, Input, Button, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function SignForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name && email && password) {
      // Save user info to local storage
      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      // Store the username separately
      localStorage.setItem("username", name);
      
      toast({
        title: "Account created.",
        description: "Your account has been created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Navigate to the login page
      navigate("/Login");
    } else {
      toast({
        title: "Sign up failed.",
        description: "Please fill in all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Text fontSize={{ base: "36px", md: "48px" }} fontWeight={600} mb={3}>
        Create an account
      </Text>
      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400} mb={2}>
        Let’s get you started.
      </Text>

      <Box pt={10}>
        <Text mb="8px" fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>Name</Text>
        <Input value={name} onChange={(e) => setName(e.target.value)} size="md" marginBottom={7} />

        <Text mb="8px" fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>Email Address</Text>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} size="md" marginBottom={7} />

        <Text mb="8px" fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>Password</Text>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} size="md" type="password" />
      </Box>

      <Box my={'50px'} fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
        <Button
          onClick={handleSignUp}
          bg='#D43710'
          color='#ffffff'
          w={{ base: '100%', md: '60vh' }} // Full width on mobile, fixed width on larger screens
          p={{ base: '1rem', md: '4px' }} // Larger padding on mobile
          borderRadius='10%'
          fontSize={{ base: 'sm', md: 'md' }} // Smaller font size on mobile
        >
          Create an Account
        </Button>
      </Box>

      <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={400}>
        I have an account?
        <Link to='/Login' style={{color: '#D43710'}}> Login</Link>
      </Text>
    </Box>
  );
}

export default SignForm;
