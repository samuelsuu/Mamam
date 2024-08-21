import React from "react";
import {
  Card,
  CardBody,
  Box,
  Stack,
  Heading,
  Button,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import data from "./Meals";

function Cardy() {
  return (
    <Box mt={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {data.map((item) => (
          <Card key={item.id} w={"100%"}>
            <CardBody>
              <Image
                src={item.img}
                alt={item.title}
                borderRadius="lg"
                w={"100%"}
                h={"186px"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" fontSize={"18px"} fontWeight={400}>
                  {item.title}
                </Heading>
                <Text color="Orange.600" fontSize="24px" fontWeight={500}>
                  {item.price}
                </Text>
              </Stack>
            </CardBody>

            <Box
              display="flex"
              justifyContent="flex-end"
              p={4}
              mr={5}
              borderRadius="30%"
            >
              <Button variant="solid" colorScheme="blue" bg={"orange"}>
                Order
              </Button>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Cardy;
