import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Flex, Button, Icon, useColorModeValue, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChartLine, FaHandshake, FaTruckMoving, FaArrowRight, FaCheck } from 'react-icons/fa';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import content from '@/app/content/services.json';

// Type definitions
interface Service {
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: 'FaChartLine' | 'FaHandshake' | 'FaTruckMoving';
  services: Service[];
}

interface Content {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string,
  pageUrl: string,
  hero: {
    title: string;
    description: string;
  };
  serviceCategories: ServiceCategory[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const MotionContainer: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const ServiceSection: React.FC<{ category: ServiceCategory; index: number }> = ({ category, index }) => {
  const IconComponent = { FaChartLine, FaHandshake, FaTruckMoving }[category.icon];
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('brand.500', 'brand.100');
  const headingColor = useColorModeValue('brand.500', 'brand.300');
    const accentColor = 'brand.300';
  const isEven = index % 2 === 0;

  return (
    <Box py={20} bg={isEven ? bgColor : 'transparent'}>
      <Container maxW="container.xl">
        <MotionContainer delay={0.1}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            <Box flex={1} mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
              <HStack mb={4}>
                <Icon as={IconComponent} boxSize={8} color={accentColor} />
                <Heading as="h2" size="xl" color={textColor}>
                  {category.name}
                </Heading>
              </HStack>
              <Text fontSize="lg" mb={6} color={textColor}>
                {category.description}
              </Text>
              <VStack align="start" spacing={4}>
                {category.services.map((service, serviceIndex) => (
                  <Box key={serviceIndex}>
                    <Heading as="h3" size="md" color={headingColor} mb={2}>
                      {service.name}
                    </Heading>
                    <Text>{service.shortDescription}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
            <Box flex={1}>
              <VStack align="start" spacing={6}>
                {category.services.map((service, serviceIndex) => (
                  <MotionBox
                    key={serviceIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: serviceIndex * 0.1 }}
                  >
                    <Heading as="h4" size="sm" color={headingColor} mb={2}>
                      Key Features of {service.name}
                    </Heading>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <HStack key={featureIndex} align="start" mb={2}>
                        <Icon as={FaCheck} color="green.500" mt={1} />
                        <Text fontSize="sm">{feature}</Text>
                      </HStack>
                    ))}
                  </MotionBox>
                ))}
              </VStack>
            </Box>
          </Flex>
        </MotionContainer>
      </Container>
    </Box>
  );
};

const WhyChooseUs: React.FC = () => {
  const reasons = [
    "Industry-leading expertise",
    "Comprehensive global trade solutions",
    "Tailored services for your unique needs",
    "Cutting-edge technology integration",
    "Trusted by top companies worldwide",
    "Dedicated customer support"
  ];

  return (
    <Box bg="brand.500" py={20} color="white">
      <Container maxW="container.xl">
        <MotionContainer>
          <Heading as="h2" size="xl" textAlign="center" mb={12}>
            Why Choose Zymptek?
          </Heading>
          <Flex flexWrap="wrap" justifyContent="center">
            {reasons.map((reason, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                width={{ base: '100%', md: '50%', lg: '33.33%' }}
                p={4}
              >
                <HStack align="start">
                  <Icon as={FaCheck} color="green.300" mt={1} />
                  <Text fontSize="lg">{reason}</Text>
                </HStack>
              </MotionBox>
            ))}
          </Flex>
        </MotionContainer>
      </Container>
    </Box>
  );
};

const ServicesPage: React.FC = () => {
  const typedContent = content as Content;
  const textColor = useColorModeValue('brand.500', 'brand.100');

  return (
    <>
      <Head>
        <title>{typedContent.pageTitle}</title>
        <meta name="description" content={typedContent.pageDescription} />
        <meta name="keywords" content={typedContent.pageKeywords} />
        <link rel="canonical" href={typedContent.pageUrl} />
      </Head>
      <Box>
        <Box color={textColor} py={20}>
          <Container maxW="container.xl">
            <MotionFlex
              direction="column"
              align="center"
              textAlign="center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="2xl" mb={6}>
                {typedContent.hero.title}
              </Heading>
              <Text fontSize="xl" maxW="container.md" mb={8}>
                {typedContent.hero.description}
              </Text>
            </MotionFlex>
          </Container>
        </Box>

        {typedContent.serviceCategories.map((category, index) => (
          <ServiceSection key={index} category={category} index={index} />
        ))}

        <WhyChooseUs />

        <Box py={20}>
          <Container maxW="container.xl">
            <MotionContainer>
              <VStack spacing={8} align="center" textAlign="center">
                <Heading as="h2" size="xl" color="brand.600">
                  {typedContent.cta.title}
                </Heading>
                <Text fontSize="lg" maxW="container.md">
                  {typedContent.cta.description}
                </Text>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<Icon as={FaArrowRight} />}
                >
                  {typedContent.cta.buttonText}
                </Button>
              </VStack>
            </MotionContainer>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ServicesPage;