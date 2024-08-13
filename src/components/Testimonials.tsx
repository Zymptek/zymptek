import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Avatar,
  useColorModeValue,
  VStack,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonial = ({ name, role, content, avatar }: TestimonialProps) => {
  const textColor = "black";

  return (
    <VStack
      bgColor="white"
      spacing={4}
      align="center"
      maxW="700px"
      mx="auto"
      p={8}
      borderRadius="lg"
      boxShadow="xl"
      position="relative"
      height="100%"
    >
      <Box position="absolute" top={4} left={4} color="brand.500" fontSize="3xl">
        <FaQuoteLeft />
      </Box>
      <Avatar src={avatar} size="xl" mb={4} name={name}/>
      <Text fontSize="lg" textAlign="center" color={textColor} fontStyle="italic">
        {content}
      </Text>
      <VStack spacing={0} mt="auto">
        <Text fontWeight="bold" fontSize="md">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {role}
        </Text>
      </VStack>
    </VStack>
  );
};

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const { onMove, carouselState: { currentSlide, deviceType } } = rest;
  return (
    <IconButton
      aria-label="next slide"
      icon={<ChevronRightIcon />}
      onClick={() => onClick()}
      position="absolute"
      right={0}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      colorScheme="brand"
    />
  );
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const { onMove, carouselState: { currentSlide, deviceType } } = rest;
  return (
    <IconButton
      aria-label="previous slide"
      icon={<ChevronLeftIcon />}
      onClick={() => onClick()}
      position="absolute"
      left={0}
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      colorScheme="brand"
    />
  );
};

const Testimonials: React.FC = () => {
    const textColor = useColorModeValue('brand.500', 'brand.100');
  const accentColor = useColorModeValue('brand.300', 'brand.200');

  const testimonials: TestimonialProps[] = [
    {
      name: 'John Doe',
      role: 'CEO at ABC Company',
      content: 'Zymptek has revolutionized our import process. Their seamless connections with Indian suppliers have significantly improved our product quality and reduced costs.',
      avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      name: 'Jane Smith',
      role: 'Procurement Manager at XYZ Corp',
      content: "The market intelligence provided by Zymptek has been invaluable. It's helped us make informed decisions and stay ahead of market trends.",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    // Add 13 more testimonials here...
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box py={16} id='testimonials'>
      <Container maxW="6xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center" color={textColor}>
            What Our Clients Say
          </Heading>
          <Box w="80%" position="relative">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {testimonials.map((testimonial, index) => (
                <Box key={index} px={4}>
                  <Testimonial {...testimonial} />
                </Box>
              ))}
            </Carousel>
          </Box>
        </VStack>
      </Container>    
    </Box>
  );
};

export default Testimonials;