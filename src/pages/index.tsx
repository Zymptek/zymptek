import React, { lazy, Suspense } from 'react';
import Head from 'next/head';
import { Box, Container, Heading, Text, Button, VStack, HStack, Grid, GridItem, Icon, useColorModeValue, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHandshake, FaShip, FaGlobeAmericas } from 'react-icons/fa';
import Image from 'next/image';
import content from '@/app/content/home.json';
import dynamic from 'next/dynamic';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const FeatureCard = dynamic(() => import('../components/FeatureCard'), {
  loading: () => <p>Loading...</p>,
});

const HomePage = () => {
  const textColor = useColorModeValue('brand.500', 'brand.100');
  const accentColor = 'brand.300';

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="keywords" content={content.meta.keywords} />
        <link rel="canonical" href={content.meta.url} />
      </Head>
      <Box as="main">
        <Box position="relative" minHeight="100vh" display="flex" alignItems="center" py={{ base: 12, md: 20 }}>
          <Container maxW="container.xl">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 8, lg: 12 }} alignItems="center">
              <GridItem>
                <VStack spacing={{ base: 6, md: 8 }} align="start">
                  <MotionHeading
                    as="h1"
                    size={{ base: "xl", md: "3xl" }}
                    color="brand.600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {content.hero.title}
                  </MotionHeading>
                  <MotionText
                    fontSize={{ base: "md", md: "xl" }}
                    color={textColor}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {content.hero.description}
                  </MotionText>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <HStack spacing={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                      <Link href={content.hero.cta1.link} passHref>
                        <Button
                          as={motion.button}
                          size={{ base: "md", md: "lg" }}
                          colorScheme="brand"
                          leftIcon={<Icon as={FaGlobeAmericas} />}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          mb={{ base: 2, md: 0 }}
                          w={{ base: 'full', md: 'auto' }}
                        >
                          {content.hero.cta1.text}
                        </Button>
                      </Link>
                      <Link href={content.hero.cta2.link} passHref>
                        <Button
                          as={motion.button}
                          size={{ base: "md", md: "lg" }}
                          variant="outline"
                          colorScheme="brand"
                          leftIcon={<Icon as={FaHandshake} />}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          w={{ base: 'full', md: 'auto' }}
                        >
                          {content.hero.cta2.text}
                        </Button>
                      </Link>
                    </HStack>
                  </MotionBox>
                  <Flex align="center" mt={0}>
                    <Icon as={FaShip} color={accentColor} boxSize={{ base: 5, md: 6 }} mr={2} />
                    <Text color={textColor} fontWeight="bold" fontSize={{ base: 'xs', md: 'md' }}>
                      {content.hero.tagline}
                    </Text>
                  </Flex>
                </VStack>
              </GridItem>
              <GridItem display={{ base: "none", lg: "block" }}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/globe_business.png"
                    alt="Global import illustration"
                    width={750}
                    height={392}
                    layout="responsive"
                    loading='lazy'
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                  />
                </MotionBox>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        <Suspense fallback={<div>Loading...</div>}>
          <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
              <VStack spacing={{ base: 12, md: 16 }}>
                <Heading as="h2" size={{ base: "xl", md: "2xl" }} textAlign="center" color={textColor}>
                  {content.features.title}
                </Heading>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: 6, md: 8 }}>
                  {content.features.items.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </Grid>
              </VStack>
            </Container>
          </Box>
        </Suspense>


        <Box bg="brand.50" py={{ base: 12, md: 20 }}>
          <Container maxW="container.xl">
            <VStack spacing={{ base: 8, md: 12 }}>
              <Heading as="h2" size={{ base: "xl", md: "2xl" }} textAlign="center" color="brand.600">
                {content.industries.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} textAlign="center" maxW="container.md">
                {content.industries.description}
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: 6, md: 8 }}>
                {content.industries.items.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    bg='white'
                    p={{ base: 4, md: 6 }}
                    borderRadius="lg"
                    boxShadow="xl"
                  >
                    <VStack>
                      <Heading as="h3" size={{ base: "md", md: "lg" }} color="brand.500">
                        {item.title}
                      </Heading>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="brand.500">
                        {item.value}
                      </Text>
                      <Text textAlign="center" fontSize={{ base: "sm", md: "md" }} color="brand.500">{item.description}</Text>
                    </VStack>
                  </MotionBox>
                ))}
              </Grid>
            </VStack>
          </Container>
        </Box>

        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="container.xl">
            <VStack spacing={{ base: 6, md: 8 }} align="center">
              <Heading as="h2" size={{ base: "xl", md: "2xl" }} textAlign="center" color="brand.600">
                {content.cta.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} textAlign="center" maxW="container.md">
                {content.cta.description}
              </Text>
              <Link href={content.cta.buttonLink} passHref>
                <Button as={motion.button} size={{ base: "md", md: "lg" }} colorScheme="brand" whileHover={{ scale: 1.05 }}>
                  {content.cta.buttonText}
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;