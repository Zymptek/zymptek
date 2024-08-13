import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface NavItemProps {
  label: string;
  children?: Array<{
    label: string;
    href: string;
    subLabel?: string;
  }>;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, children, href }) => {
  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box>
          <NextLink href={href ?? '#'} passHref>
            <Button
              p={2}
              fontSize={'sm'}
              fontWeight={500}
              color={'text'}
              variant="ghost"
              _hover={{
                textDecoration: 'none',
                bg: 'hoverBg',
              }}
            >
              {label}
              {children && <Icon as={ChevronDownIcon} w={5} h={5} ml={1} />}
            </Button>
          </NextLink>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent
          border={0}
          boxShadow={'xl'}
          bg={'background'}
          p={4}
          rounded={'xl'}
          minW={'sm'}
        >
          <Stack>
            {children.map((child) => (
              <SubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

interface SubNavProps {
  label: string;
  href: string;
  subLabel?: string;
}

const SubNav: React.FC<SubNavProps> = ({ label, href, subLabel }) => {
  return (
    <NextLink href={href} passHref>
      <Box
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'hoverBg' }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'brand.300' }}
              fontWeight={500}
              fontFamily={'subheading'}
            >
              {label}
            </Text>
            <Text fontSize={'sm'} fontFamily={'body'}>
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'brand.300'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </NextLink>
  );
};

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('background.light', 'background.dark');
  const textColor = useColorModeValue('text.light', 'text.dark');
  const borderColor = useColorModeValue('border', 'brand.400');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      animate={{
        backgroundColor: scrolled ? bgColor : 'transparent',
        boxShadow: scrolled ? 'md' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <Flex
        bg={bgColor}
        color={textColor}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderColor={borderColor}
        align={'center'}
        justify={'space-between'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NextLink href="/" passHref>
              <Flex align="center">
                <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  color={'text'}
                  fontWeight="bold"
                  fontSize="xl"
                  ml={2}
                >
                  Zymptek
                </Text>
              </Flex>
            </NextLink>
          </MotionBox>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'} // Align the menu and buttons to the right side
          direction={'row'}
          spacing={6}
        >
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>

          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </MotionBox>
  );
};

const DesktopNav: React.FC = () => {
  const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about',
      children: [
        { label: 'Learn More', subLabel: 'Learn About Us', href: '#about' },
        { label: 'Mission', subLabel: 'Check out our mission', href: '#mission' }
      ],
     },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNav: React.FC = () => {
  const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <Stack bg={'background'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

interface MobileNavItemProps {
  label: string;
  children?: Array<{
    label: string;
    href: string;
    subLabel?: string;
  }>;
  href?: string;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={NextLink}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={600} color={'text'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={'border'}>
          {children &&
            children.map((child) => (
              <NextLink key={child.label} href={child.href} passHref>
                <Text py={2} color={'text'} _hover={{ textDecoration: 'none' }}>
                  {child.label}
                </Text>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default Navbar;
