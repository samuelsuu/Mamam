import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function Nav() {
  const [activeTab, setActiveTab] = useState('Recomended');

  const tabs = ['Recomended', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snacks'];

  return (
    <Flex gap={10} mt={20} borderBottom={"#F4F3F3 3px solid"} w={"579px"}>
      {tabs.map((tab) => (
        <Text
          key={tab}
          borderBottom={activeTab === tab ? "orange 3px solid" : "transparent 3px solid"}
          w={'117px'}
          cursor="pointer"
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Text>
      ))}
    </Flex>
  );
}

export default Nav;
