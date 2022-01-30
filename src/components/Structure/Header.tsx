import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from 'components/Context/Header/Logo';
import { NotificationsNav } from 'components/Context/Header/NotificationsNav';
import { Profile } from 'components/Context/Header/Profile';
import { SearchBox } from 'components/Context/Header/SearchBox';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
