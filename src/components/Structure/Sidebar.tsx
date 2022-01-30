import { Box, Stack } from '@chakra-ui/react';
import { NavLink } from 'components/Context/Sidebar/NavLink';
import { NavSection } from 'components/Context/Sidebar/NavSection';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
