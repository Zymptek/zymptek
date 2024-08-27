import React from 'react';
import { Box, Container, Heading, Text, VStack, Grid, GridItem, Image, HStack, Button, Icon, useColorModeValue, Flex, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUsers, FaGlobeAsia, FaHandshake, FaRocket, FaChartLine } from 'react-icons/fa';
import Head from 'next/head';
import content from '@/app/content/about.json';
import { IconType } from 'react-icons';

const MotionBox = motion(Box);

interface IValueCard {
    icon: string,
    title: string,
    description: string
}

const iconMap: Record<string, IconType> = { FaUsers, FaGlobeAsia, FaHandshake, FaRocket, FaChartLine }

const TimelineItem = ({ year, event } : any) => {
  const insideText = useColorModeValue('brand.100','brand.500')
  const textColor = useColorModeValue('brand.500', 'brand.100');
  const accentColor = useColorModeValue('brand.300','brand.200');
  
  return(
  <MotionBox
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    color={textColor}
    transition={{ duration: 0.5 }}
  >
    <HStack spacing={4} alignItems="flex-start">
      <Box bg={accentColor} color={insideText} px={3} py={1} borderRadius="full">
        {year}
      </Box>
      <Text>{event}</Text>
    </HStack>
  </MotionBox>
)};



const ValueCard = ({ icon, title, description } : IValueCard) => {
  const textColor = 'brand.500';
  const accentColor = 'brand.300';

  const IconComponent = iconMap[icon];
  return (
    <VStack
      bg="white"
      p={6}
      borderRadius="md"
      boxShadow="md"
      align="center"
      spacing={4}
      color={textColor}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Box as={IconComponent} size="50px" color={accentColor} />
      <Heading as="h3" size="md" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

const AboutPage = () => {
  const textColor = useColorModeValue('brand.500', 'brand.100');
  const accentColor = useColorModeValue('brand.300','brand.200');

  return (
    <>
      <Head>
        <title>{content.pageTitle}</title>
        <meta name="description" content={content.pageDescription} />
        <title>{content.pageTitle}</title>
        <meta name="description" content={content.pageDescription} />
        <meta name="keywords" content={content.pageKeywords} />
        <link rel="canonical" href={content.pageUrl} />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "url": "https://www.zymptek.com/about",
      "name": "About Us | Zymptek",
      "description": "Learn more about Zymptek, our mission, vision, and the team behind our innovative solutions.",
      "inLanguage": "en",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.zymptek.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://www.zymptek.com/about"
          }
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zymptek",
        "url": "https://www.zymptek.com/",
        "logo": "https://www.zymptek.com/logo.png"
      }
    }
  ) }}
/>

      </Head>
      <Box>
        <Box py={{ base: 10, md: 20 }} mt={{ base: 10, sm: 20, md: 10 }}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <VStack spacing={8} align="start">
                <Heading as="h1" size={{ base: "xl", md: "2xl" }} color={textColor}>
                  {content.hero.title}
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor}>
                  {content.hero.description}
                </Text>
                <Flex wrap="wrap" justify="center" pt={8} gap={6}>
                  {content.hero.features.map((feature, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    >
                      <VStack>
                        <Icon as={iconMap[feature.icon]} boxSize={12} color={accentColor} />
                        <Text fontWeight="bold" color={textColor}>{feature.text}</Text>
                      </VStack>
                    </MotionBox>
                  ))}
                </Flex>
              </VStack>
            </MotionBox>
          </Container>
        </Box>

        <Container maxW="container.xl" py={16} px={{ base: 4, md: 8 }}>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={12}>
            <GridItem>
              <VStack align="start" spacing={6}>
                <Heading as="h2" size={{ base: "lg", md: "xl" }}>
                  {content.story.title}
                </Heading>
                {content.story.paragraphs.map((paragraph, index) => (
                  <Text key={index} fontSize={{ base: "md", md: "lg" }}>
                    {paragraph}
                  </Text>
                ))}
                <Button as={Link} href="/contact" colorScheme="brand" size="lg">
                  {content.story.ctaText}
                </Button>
              </VStack>
            </GridItem>
            <GridItem>
              <Image src="/images/ships.jpg" alt="Zymptek office" borderRadius="md" boxShadow="lg" w="100%" h="auto" mt={10}/>
            </GridItem>
          </Grid>
        </Container>
        
        <Box py={16}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }} color={textColor}>
            <VStack spacing={12}>
              <Heading as="h2" size={{ base: "lg", md: "xl" }} textAlign="center">
                {content.journey.title}
              </Heading>
              <MotionBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <VStack spacing={6} align="start">
                  {content.journey.events.map((event, index) => (
                    <TimelineItem key={index} year={event.year} event={event.event} />
                  ))}
                </VStack>
              </MotionBox>
            </VStack>
          </Container>
        </Box>

        <Container maxW="container.xl" py={16} px={{ base: 4, md: 8 }}>
          <VStack spacing={12}>
            <Heading as="h2" size={{ base: "lg", md: "xl" }} textAlign="center">
              {content.values.title}
            </Heading>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={8}>
              {content.values.cards.map((card, index) => (
                <GridItem key={index}>
                  <ValueCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Container>

        <Box bg="brand.50" py={16}>
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <VStack spacing={8}>
              <Heading as="h2" size={{ base: "lg", md: "xl" }} textAlign="center">
                {content.impact.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" maxW="container.md">
                {content.impact.description}
              </Text>
              <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={8}>
                {content.impact.stats.map((item, index) => (
                  <GridItem key={index}>
                    <VStack>
                      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={textColor}>
                        {item.number}
                      </Heading>
                      <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" textAlign="center">
                        {item.description}
                      </Text>
                    </VStack>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </Container>
        </Box>

        <Container maxW="container.xl" py={16} px={{ base: 4, md: 8 }}>
          <VStack spacing={8} align="center">
            <Heading as="h2" size={{ base: "lg", md: "xl" }} textAlign="center">
              {content.cta.title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" maxW="container.md">
              {content.cta.description}
            </Text>
            <Button as={Link} href="/contact" size="lg" colorScheme="brand">
              {content.cta.buttonText}
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;