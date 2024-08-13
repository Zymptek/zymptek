import React from 'react';
import { Box, Heading, Text, SimpleGrid, Container, Icon, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGlobeAsia, FaHandshake, FaTruck, FaChartLine } from 'react-icons/fa';

const MotionBox = motion(Box);

const Mission = () => {
  const textColor = useColorModeValue('brand.500', 'brand.100');
  const accentColor = useColorModeValue('brand.300', 'brand.200');

  const features = [
    { icon: FaGlobeAsia, title: "Global Reach", description: "Connecting importers worldwide with Indian exporters" },
    { icon: FaHandshake, title: "Trusted Partnerships", description: "Building reliable trade relationships" },
    { icon: FaTruck, title: "Door-to-Door Delivery", description: "Seamless logistics from origin to destination" },
    { icon: FaChartLine, title: "Growth Enabler", description: "Empowering businesses to expand internationally" },
  ];

  return (
    <Box py={20} id='mission'>
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="xl" color={textColor} textAlign="center" mb={8}>
            Our Mission
          </Heading>
          <Text fontSize="xl" color={textColor} textAlign="center" mb={12} maxW="800px" mx="auto">
            We're on a mission to democratize international trade, making it accessible, efficient, and transparent for businesses of all sizes. By removing barriers and streamlining processes, we're empowering companies to reach new markets and achieve unprecedented growth.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={12}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Flex direction="column" align="center" textAlign="center">
                <Icon as={feature.icon} boxSize={12} color={accentColor} mb={4} />
                <Text fontWeight="bold" fontSize="xl" color={textColor} mb={2}>
                  {feature.title}
                </Text>
                <Text fontSize="md" color={textColor}>
                  {feature.description}
                </Text>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Mission;