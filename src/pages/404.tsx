import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={8} textAlign="center">
          <Heading as="h1" size="2xl" fontFamily="heading" color="brand.300">
            404 - Page Not Found
          </Heading>
          <Text fontSize="xl" fontFamily="body">
            Oops! The page you're looking for doesn't exist.
          </Text>
          <Button onClick={() => router.push('/')} variant="solid">
            Return to Homepage
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default NotFound