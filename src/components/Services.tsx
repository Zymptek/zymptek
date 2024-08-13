import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  useColorModeValue,
  Container,
  Button,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHandshake, FaSearch, FaShieldAlt, FaChartLine, FaShip, FaFileContract, FaMoneyBillWave, FaGlobeAsia } from 'react-icons/fa';

const MotionBox = motion(Box);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {

  return (
    <MotionBox
      bg="white"
      p={6}
      rounded="lg"
      shadow="md"
      textAlign="center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon as={icon} w={10} h={10} color="brand.300" mb={4} />
      <Heading as="h3" size="md" mb={2} color="brand.500">
        {title}
      </Heading>
      <Text color="brand.500">{description}</Text>
    </MotionBox>
  );
};

const ServicePage: React.FC = () => {
    const textColor = useColorModeValue('brand.500', 'brand.100');
    const accentColor = useColorModeValue('brand.300', 'brand.200');

  const services: ServiceCardProps[] = [
    {
      title: 'Buyer-Supplier Matchmaking',
      description: 'Connect Indian exporters with reliable global buyers, and help international buyers find trustworthy Indian suppliers.',
      icon: FaHandshake,
    },
    {
      title: 'Supplier Verification',
      description: 'Thorough vetting process to ensure all suppliers meet quality and reliability standards for worry-free transactions.',
      icon: FaShieldAlt,
    },
    {
      title: 'Market Intelligence',
      description: 'Provide up-to-date market trends, demand forecasts, and competitor analysis to inform strategic decisions.',
      icon: FaChartLine,
    },
    {
      title: 'Logistics Support',
      description: 'Comprehensive assistance with shipping, customs clearance, and last-mile delivery for seamless trade operations.',
      icon: FaShip,
    },
    {
      title: 'Trade Documentation',
      description: 'Expert guidance and support in preparing and managing all necessary export/import documentation.',
      icon: FaFileContract,
    },
    {
      title: 'Financial Services',
      description: 'Facilitate secure payment solutions and provide guidance on trade finance options to mitigate risks.',
      icon: FaMoneyBillWave,
    },
    {
      title: 'Global Compliance Assistance',
      description: 'Stay updated with international trade regulations and ensure compliance across different markets.',
      icon: FaGlobeAsia,
    },
    {
      title: 'Product Sourcing',
      description: 'Assist global buyers in finding and sourcing high-quality products from verified Indian manufacturers.',
      icon: FaSearch,
    },
  ];

  return (
    <Box minH="100vh" py={20} id="services">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4} color={textColor}>
              Empowering Global Trade with Zymptek
            </Heading>
            <Text fontSize="xl" maxW="3xl" mx="auto" color={textColor}>
              Zymptek bridges the gap between Indian exporters and global buyers, fostering reliable partnerships and facilitating seamless international trade. Our comprehensive services support both parties throughout the entire trade lifecycle.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServicePage;