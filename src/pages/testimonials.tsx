import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Flex, Button, Icon, useColorModeValue, Avatar, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaQuoteLeft, FaStar, FaArrowRight } from 'react-icons/fa';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

// Import the JSON data
import testimonialsData from '@/app/content/testimonials.json';

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

const TestimonialCard: React.FC<{ testimonial: typeof testimonialsData.testimonials[0]; index: number }> = ({ testimonial, index }) => {
  const textColor = 'brand.500';
  const accentColor = 'brand.300';

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Box
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        position="relative"
        zIndex={1}
      >
        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontStyle="italic" color={textColor}>
            "{testimonial.quote}"
          </Text>
          <HStack spacing={4}>
            <Avatar src={testimonial.image} size="md" />
            <Box>
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text fontSize="sm" color={textColor}>{testimonial.company}</Text>
            </Box>
          </HStack>
          <HStack spacing={1}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Icon key={i} as={FaStar} color={accentColor} />
            ))}
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const SuccessStory: React.FC = () => {
  const bgColor = useColorModeValue("brand.300", "brand.400")
  const { successStory } = testimonialsData;

  return (
    <Box bg={bgColor} py={20} color="brand.100">
      <Container maxW="container.xl">
        <MotionContainer>
          <Heading as="h2" size="xl" textAlign="center" mb={12}>
            Client Success Story
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            <Box flex={1} mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
              <Heading as="h3" size="lg" mb={4}>
                {successStory.title}
              </Heading>
              <Text fontSize="lg" mb={6}>
                {successStory.description}
              </Text>
              <VStack align="start" spacing={4}>
                {successStory.achievements.map((achievement, index) => (
                  <Text key={index}>• {achievement}</Text>
                ))}
              </VStack>
            </Box>
            <Box flex={1}>
              <SimpleGrid columns={2} spacing={8}>
                {successStory.stats.map((stat, index) => (
                  <Stat key={index}>
                    <StatLabel>{stat.label}</StatLabel>
                    <StatNumber>{stat.value}</StatNumber>
                    <StatHelpText>
                      <StatArrow type={stat.type as "increase" | "decrease"} />
                      {stat.helpText}
                    </StatHelpText>
                  </Stat>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </MotionContainer>
      </Container>
    </Box>
  );
};

const TestimonialPage: React.FC = () => {
  const textColor = useColorModeValue('brand.500', 'brand.100');

  return (
    <>
      <Head>
        <title>{testimonialsData.pageTitle}</title>
        <meta name="description" content={testimonialsData.pageDescription} />
        <meta name="keywords" content={testimonialsData.pageKeywords} />
        <link rel="canonical" href={testimonialsData.pageUrl} />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Client Testimonials and Success Stories | Zymptek",
      "description": "Discover how Zymptek has helped businesses around the world streamline their global trade operations, enter new markets, and achieve remarkable growth. Read our client testimonials and success stories.",
      "url": "https://www.zymptek.com/testimonials",
      "mainEntity": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "John Smith"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "Global Logistics Co."
          },
          "reviewBody": "Zymptek's market intelligence services have been instrumental in our expansion into new markets. Their insights are always spot-on and actionable.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Emily Johnson"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "TechInnovate Inc."
          },
          "reviewBody": "The custom clearance process used to be a nightmare for us. Zymptek's trade facilitation services have streamlined our operations and saved us both time and money.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Michael Chang"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "EcoProducts Ltd."
          },
          "reviewBody": "Zymptek's logistics management solutions have revolutionized our supply chain. We've seen a 30% increase in efficiency since partnering with them.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ],
      "about": {
        "@type": "Organization",
        "name": "Zymptek",
        "sameAs": "https://www.zymptek.com"
      },
      "potentialAction": {
        "@type": "Action",
        "name": "Start Your Journey",
        "url": "https://www.zymptek.com/contact"
      }
    }
    
  ) }}
/>
      </Head>
      <Box>
        <Box color="white" py={20}>
          <Container maxW="container.xl">
            <MotionFlex
              direction="column"
              align="center"
              textAlign="center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              mb={10}
            >
              <Heading as="h1" size="2xl" mb={6} color={textColor}>
                {testimonialsData.heroTitle}
              </Heading>
              <Text fontSize="xl" maxW="container.md" mb={8} color={textColor}>
                {testimonialsData.heroDescription}
              </Text>
            </MotionFlex>
          </Container>
        </Box>

        <Box py={20}>
          <Container maxW="container.xl">
            <MotionContainer>
              <Heading as="h2" size="xl" textAlign="center" mb={12} color={textColor}>
                What Our Clients Say
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {testimonialsData.testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} index={index} />
                ))}
              </SimpleGrid>
            </MotionContainer>
          </Container>
        </Box>

        <SuccessStory />

        <Box py={20}>
          <Container maxW="container.xl">
            <MotionContainer>
              <VStack spacing={8} align="center" textAlign="center">
                <Heading as="h2" size="xl" color="brand.600">
                  {testimonialsData.ctaTitle}
                </Heading>
                <Text fontSize="lg" maxW="container.md">
                  {testimonialsData.ctaDescription}
                </Text>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<Icon as={FaArrowRight} />}
                >
                  {testimonialsData.ctaButtonText}
                </Button>
              </VStack>
            </MotionContainer>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default TestimonialPage;