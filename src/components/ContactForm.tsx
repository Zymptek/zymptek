import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  useColorModeValue,
  Container,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface FormData {
  type: string;
  name: string;
  email: string;
  description: string;
}

const InitialFormData = {
  type: '',
  name: '',
  email: '',
  description: '',
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(InitialFormData);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully.',
          description: 'Your message has been sent. We will get back to you shortly.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData(InitialFormData); // Reset form
      } else {
        toast({
          title: 'Failed to send message.',
          description: 'Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'There was an error sending your message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const bgColor = 'white';
  const textColor = useColorModeValue('brand.500', 'brand.200');
  const labelColor = useColorModeValue('gray.700', 'gray.500');
  const inputBgColor = useColorModeValue('gray.50', 'whiteAlpha.100');

  return (
    <Box py={20} id="contact">
      <Container maxW="container.md">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="xl" textAlign="center" mb={8} color={textColor}>
            Contact Us
          </Heading>
          <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="xl" color="black">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color={labelColor}>I am a</FormLabel>
                  <Select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleChange} 
                    placeholder="Select option"
                    bg={inputBgColor}
                    borderColor="gray.300"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={labelColor}>Name</FormLabel>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    bg={inputBgColor}
                    borderColor="gray.300"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={labelColor}>Email</FormLabel>
                  <Input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    bg={inputBgColor}
                    borderColor="gray.300"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={labelColor}>How can we help?</FormLabel>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe what kind of help you need"
                    bg={inputBgColor}
                    borderColor="gray.300"
                  />
                </FormControl>
                <Button type="submit" colorScheme="brand" size="lg" width="full" isLoading={loading}>
                  Submit
                </Button>
                {message && <Box mt={4} color={textColor}>{message}</Box>}
              </VStack>
            </form>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactForm;
