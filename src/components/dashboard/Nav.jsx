import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function Nav() {
  const [activeTab, setActiveTab] = useState('Recomended');

  const tabs = ['Recomended', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snacks'];

  return (
    <Flex
      gap={{ base: 4, md: 10 }} // Smaller gap on mobile, larger on bigger screens
      mt={{ base: 10, md: 20 }} // Smaller top margin on mobile
      borderBottom={"#F4F3F3 3px solid"}
      w={{ base: '100%', md: "579px" }} // Full width on mobile, fixed width on larger screens
      overflowX="auto" // Allows horizontal scrolling on smaller screens
    >
      {tabs.map((tab) => (
        <Text
          key={tab}
          borderBottom={activeTab === tab ? "orange 3px solid" : "transparent 3px solid"}
          w={{ base: 'auto', md: '117px' }} // Auto width on mobile, fixed width on larger screens
          cursor="pointer"
          fontSize={{ base: 'sm', md: 'md' }} // Smaller font size on mobile
          whiteSpace="nowrap" // Prevent text from wrapping
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Text>
      ))}
    </Flex>
  );
}

export default Nav;
