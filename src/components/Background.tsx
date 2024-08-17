import React, { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);

interface BackgroundProps {
  children: ReactNode;
}

interface BubbleProps { 
  size: number,
  color: string,
  initialPosition: number,
  scrollRange: number
}

const Bubble : React.FC<BubbleProps> = ({ size, color, initialPosition, scrollRange }) => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [initialPosition, scrollRange]);

  return (
    <MotionBox
      position="absolute"
      width={`${size}px`}
      height={`${size}px`}
      borderRadius="full"
      bg={color}
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1 }}
    />
  );
};

const Background : React.FC<BackgroundProps>= ({ children }) => {
  const bgColor = useColorModeValue("background.light", "background.dark");
  const accentColor = useColorModeValue('brand.300', 'brand.200');

  return (
    <Box position="relative" minHeight="100vh" bg={bgColor} overflow="hidden">
      <Box position="relative" zIndex={1}>
      <MotionBox
        position="fixed"
        top="0%"
        left="-5%"
        width="400px"
        height="400px"
        borderRadius="full"
        bg={accentColor}
        opacity={0.1}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: 1,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="fixed"
        bottom="-10%"
        right="-10%"
        width="400px"
        height="400px"
        borderRadius="full"
        bg={accentColor}
        opacity={0.1}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
        {children}
      </Box>
    </Box>
  );
};

export default Background;