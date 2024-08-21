import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      bg={"#FF4213"}
      h={"307px"}
      color={"#ffffff"}
      justifyContent={"space-between"}
      p={"30px 40px 10px 80px"}
      alignItems={"center"}
      
    >
      <Box>
        <Text
          color={"#000000"}
          fontWeight={400}
          fontSize={"16px"}
          bg={"#FCFCFC"}
          p={"7px, 29px, 7px, 29px"}
          w={"182px"}
          textAlign={"center"}
          borderRadius={"14px"}
          my={10}
        >
          Lot of Discounts
        </Text>
        <Text fontSize={39} fontWeight={600}>Get lots of discounts and <br />free shipping here</Text>
      </Box>

      <Box bg={"#000000"} h={"210px"} w={"475px"} p={10}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Text fontSize={'25px'} fontWeight={600}>Get Discount 44%</Text>
            <Text fontSize={'20px'} fontWeight={400}>Just for new user</Text>
          </Box>
          <Box fontSize={'20px'} fontWeight={400} color={'#000000'} bg={'#ffffff'} p={1} borderRadius={'26px'}>
            <button>Get it now</button>
          </Box>
        </Flex>

        <Flex justifyContent={"space-between"} alignItems={"center"} my={10}>
          <Text fontSize={'16px'} fontWeight={400}>Until 27 Apr 2022</Text>
          <Text fontSize={'16px'} fontWeight={400}>Terms n condition</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
