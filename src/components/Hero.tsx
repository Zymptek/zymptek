import React from 'react';
import { Box, Flex, Heading, Text, Button, Container, useColorModeValue, Stack, Icon } from '@chakra-ui/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaGlobeAmericas, FaShip, FaHandshake } from 'react-icons/fa';
import Link from 'next/link';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Hero: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const textColor = useColorModeValue('brand.500', 'brand.100');
  const accentColor = useColorModeValue('brand.300', 'brand.200');

  return (
    <Box
      position="relative"
      height="100vh"
      overflow="hidden"
      id="home"
    >
      {/* Keep the animated background elements from the previous version */}

      <Container maxW="container.xl" height="100%">
        <Flex
          direction="column"
          justify="center"
          height="100%"
          pl={{ base: 4, md: 12 }}
        >
          <MotionFlex
            direction="column"
            maxW={{ base: "100%", md: "60%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MotionHeading
              as="h1"
              size="3xl"
              color={textColor}
              fontWeight="bold"
              letterSpacing="tight"
              mb={4}
              lineHeight="1.2"
            >
              Bridging Global Importers with Indian Exporters
            </MotionHeading>
            <MotionText
              fontSize="xl"
              color={textColor}
              mb={8}
            >
              We simplify international trade by connecting global importers directly to Indian exporters, ensuring seamless door-to-door delivery.
            </MotionText>
            <Stack direction="row" spacing={4} mb={8}>
              <Link href="#contact">
              <Button
                as={motion.button}
                size="lg"
                colorScheme="brand"
                leftIcon={<Icon as={FaHandshake} />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Trade
              </Button>
              </Link>
              <Link href="#about">
              <Button
                as={motion.button}
                size="lg"
                variant="outline"
                colorScheme="brand"
                leftIcon={<Icon as={FaGlobeAmericas} />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </Button>
              </Link>
            </Stack>
            <Flex align="center">
              <Icon as={FaShip} color={accentColor} boxSize={6} mr={2} />
              <Text color={textColor} fontWeight="bold">
                Facilitating Global Trade, One Shipment at a Time
              </Text>
            </Flex>
          </MotionFlex>
        </Flex>
      </Container>

      
    </Box>
  );
};

export default Hero;