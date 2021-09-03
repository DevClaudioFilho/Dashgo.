import { Stack } from "@chakra-ui/react";

import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuarios
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <Stack spacing="12" mt="8" align="stretch">
          <NavLink href="/forms" icon={RiInputMethodLine}>
            Formularios
          </NavLink>
          <NavLink href="/automation" icon={RiGitMergeLine}>
            AUTOMAÇÃO
          </NavLink>
        </Stack>
      </NavSection>
    </Stack>
  );
}
