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
  Text,
  useColorModeValue,
  Container,
  useToast,
  Icon,
  Flex,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaShare } from 'react-icons/fa';
import contactPageContent from '@/app/content/contact.json';

const MotionBox = motion.div;

interface FormData {
  [key: string]: string;
}

const initialFormData: FormData = contactPageContent.formFields.reduce((acc, field) => {
  acc[field.name] = '';
  return acc;
}, {} as FormData);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const accentColor = 'brand.300';
  const textColor = useColorModeValue('brand.500', 'brand.200');
  const labelColor = useColorModeValue('gray.700', 'gray.500');
  const inputBgColor = useColorModeValue('gray.50', 'whiteAlpha.100');
  const cardBgColor = 'white';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
          description: "We've received your message and will get back to you soon.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData(initialFormData);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error sending message.',
        description: 'Please try again later or contact us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const ContactInfo = ({ icon, title, content }: { icon: React.ElementType; title: string; content: string }) => (
    <Flex align="center" mb={4}>
      <Icon as={icon} boxSize={6} color={accentColor} mr={4} />
      <Box>
        <Text fontWeight="bold">{title}</Text>
        <Text>{content}</Text>
      </Box>
    </Flex>
  );

  return (
    <>
      <Head>
        <title>{contactPageContent.pageTitle}</title>
        <meta name="description" content={contactPageContent.pageDescription} />
        <meta name="keywords" content={contactPageContent.pageKeywords} />
      </Head>

      <Box color={textColor} minH="100vh">
        <Container maxW="container.xl" py={20}>
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" textAlign="center" mb={4} color={accentColor}>
              {contactPageContent.heroTitle}
            </Heading>
            <Text fontSize="xl" textAlign="center" mb={12}>
              {contactPageContent.heroSubtitle}
            </Text>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
              <VStack spacing={8} align="stretch">
                <MotionBox
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Heading as="h2" size="lg" mb={4}>
                    Contact Information
                  </Heading>
                  <ContactInfo icon={FaEnvelope} title="Email" content={contactPageContent.contactInfo.email} />
                  <ContactInfo icon={FaPhone} title="Phone" content={contactPageContent.contactInfo.phone} />
                  <ContactInfo icon={FaMapMarkerAlt} title="Address" content={contactPageContent.contactInfo.address} />
                  <ContactInfo icon={FaClock} title="Business Hours" content={contactPageContent.contactInfo.hours} />
                  <Text mt={4}>
                    {contactPageContent.contactInfo.responseTime}
                  </Text>
                </MotionBox>
              </VStack>

              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 2 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Box bg={cardBgColor} p={8} borderRadius="lg" boxShadow="xl" color='black'>
                  <Heading as="h2" size="lg" mb={6} color="brand.500">
                    {contactPageContent.formTitle}
                  </Heading>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                      {contactPageContent.formFields.map((field) => (
                        <FormControl key={field.name} isRequired={field.required}>
                          <FormLabel color={labelColor}>{field.label}</FormLabel>
                          {field.type === 'select' ? (
                            <Select
                              name={field.name}
                              value={formData[field.name]}
                              bg={inputBgColor}
                              borderColor="gray.300"
                              onChange={handleChange}
                              placeholder="Select option"
                            >
                              {field.options?.map((option) => (
                                <option key={option.value} value={option.value} >
                                  {option.label}
                                </option>
                              ))}
                            </Select>
                          ) : field.type === 'textarea' ? (
                            <Textarea
                              name={field.name}
                              value={formData[field.name]}
                              bg={inputBgColor}
                              borderColor="gray.300"
                              onChange={handleChange}
                              placeholder={field.placeholder}
                              rows={5}
                            />
                          ) : (
                            <Input
                              name={field.name}
                              type={field.type}
                              bg={inputBgColor}
                              borderColor="gray.300"
                              value={formData[field.name]}
                              onChange={handleChange}
                            />
                          )}
                        </FormControl>
                      ))}
                      <Button
                        type="submit"
                        colorScheme="brand"
                        size="lg"
                        width="full"
                        leftIcon={<Icon as={FaShare} />}
                        isLoading={loading}
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                        transition="all 0.2s"
                      >
                        {contactPageContent.submitButtonText}
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Heading as="h2" size="xl" mb={6}>
                {contactPageContent.faqTitle}
              </Heading>
              <VStack spacing={6} align="stretch">
                {contactPageContent.faqs.map((faq, index) => (
                  <Box key={index}>
                    <Text fontWeight="bold" mb={2}>{faq.question}</Text>
                    <Text>{faq.answer}</Text>
                  </Box>
                ))}
              </VStack>
            </MotionBox>
            </Container>
      </Box>
    </>
  );
};

export default ContactPage;