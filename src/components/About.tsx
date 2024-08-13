import React from 'react';
import Image from "next/image";
import { Box, Heading, Text, SimpleGrid, Container, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import companyData from '@/app/data.json';

const MotionBox = motion(Box);

const About = () => {
  const textColor = useColorModeValue('brand.500', 'brand.100');

  return (
    <Box py={20} id="about">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            position="relative"
            height={{ base: "300px", md: "100%" }}
          >
            <Image 
              src={companyData.aboutImage} 
              alt="about_us" 
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <VStack align="start" spacing={6}>
              <Heading as="h2" size="xl" color={textColor}>
                About Us
              </Heading>
              <Text fontSize="lg" color={textColor}>
                {companyData.aboutText}
              </Text>
              <Text fontSize="lg" color={textColor}>
                Founded in 2020, Zymptek has rapidly grown to become a trusted partner for businesses worldwide. We're revolutionizing global trade by creating a seamless bridge between international importers and Indian exporters.
              </Text>
              <Text fontSize="lg" color={textColor}>
                We've facilitated thousands of successful transactions, helping companies expand their global footprint and achieve unprecedented growth.
              </Text>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;