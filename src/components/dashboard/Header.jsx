import { Box, Flex, Text, Input, Image } from "@chakra-ui/react";
import React from "react";
import img from "../../assets/Frame.png";
import img1 from "../../assets/imag.png";

function Header() {
  // Retrieve username from local storage
  const username = localStorage.getItem("username") || "Guest";

  return (
    <Box px={[4, 8]} py={4} bg="white">
      <Flex 
        direction={["column", "row"]} 
        justifyContent={"space-between"} 
        alignItems={"center"} 
        gap={[4, 0]}
      >
        <Box>
          <Flex 
            gap={[3, 5]} 
            w={["100%", "auto"]} 
            alignItems={"center"} 
            direction={["column", "row"]}
          >
            <Image src={img} alt="Logo" boxSize={["50px", "auto"]} />
            <Text fontSize={["18px", "24px"]} fontWeight={500}>Welcome, {username}</Text>
          </Flex>
          <Text fontSize={["10px", "12px"]} fontWeight={400} mt={[2, 0]} ml={[0, 50]}>
            Don’t forget to eat healthy today!
          </Text>
        </Box>

        <Box w={["100%", "400px"]} mt={[4, 0]}>
          <Input 
            borderRadius={"24px"} 
            placeholder="Search..." 
            size="md" 
            pr="4.5rem" // To leave space for the icon
          />
        </Box>
      </Flex>

      <Flex 
        my={[6, 10]} 
        gap={4} 
        direction={["column", "row"]} 
        alignItems={["center", "flex-start"]}
      >
        <Text fontSize={["20px", "24px"]} fontWeight={500}>
          Find the right menu{" "}
        </Text>
        <Image src={img1} alt="Find the right menu" boxSize={["100px", "auto"]} />
      </Flex>
    </Box>
  );
}

export default Header;
