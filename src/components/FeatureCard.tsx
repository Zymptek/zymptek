// components/FeatureCard.tsx

import React from 'react';
import { Box, VStack, Icon, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';

const MotionBox = motion(Box);

interface IFeatureCard {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<IFeatureCard> = ({ icon, title, description }) => {
  const textColor = 'brand.500';
  const accentColor = 'brand.300';

  // Dynamically import the icon
  const IconComponent = Icons[icon as keyof typeof Icons] as IconType;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bg='white'
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      boxShadow="xl"
      color={textColor}
      _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
    >
      <VStack spacing={4} align="start">
        <Icon as={IconComponent} w={8} h={8} color={accentColor} />
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
      </VStack>
    </MotionBox>
  );
};

export default FeatureCard;