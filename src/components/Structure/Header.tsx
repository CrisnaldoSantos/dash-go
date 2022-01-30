import { Flex } from '@chakra-ui/react';
import { Logo } from 'components/Context/Header/Logo';
import { NotificationsNav } from 'components/Context/Header/NotificationsNav';
import { Profile } from 'components/Context/Header/Profile';
import { SearchBox } from 'components/Context/Header/SearchBox';

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1180}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
