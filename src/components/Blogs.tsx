// components/Blog.tsx
import { Box, Heading, SimpleGrid, Image, Text, VStack, Container, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import companyData from '@/app/data.json';

const MotionBox = motion(Box);

const Blogs = () => {
  return (
    <Box bg="white" py={20}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
          Latest Blog Posts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {companyData.blogPosts.map((post, index) => (
            <MotionBox
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                bg="brand.50"
                rounded="lg"
                shadow="md"
                overflow="hidden"
                spacing={4}
                h="100%"
              >
                <Image src={post.image} alt={post.title} />
                <VStack p={4} alignItems="flex-start" flex={1}>
                  <Heading as="h3" size="md" color="brand.700">
                    {post.title}
                  </Heading>
                  <Text color="gray.600" noOfLines={3}>
                    {post.excerpt}
                  </Text>
                  <Link color="brand.500" fontWeight="bold" href={post.url} isExternal mt="auto">
                    Read More
                  </Link>
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blogs;

