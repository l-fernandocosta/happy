import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function NavDrawer() {
  return(
    <Stack spacing={'12'} align='flex-start'>

        <NavSection title =' GERAL'>
            <NavLink icon={RiDashboardLine} title={'Dashboard'}/>
            <NavLink icon={RiContactsLine} title={'Users'}/>
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink icon={RiInputMethodLine} title={'Formularies'}></NavLink>
          <NavLink icon={RiGitMergeLine} title={"Automation"}></NavLink>
        </NavSection>
          
      </Stack>
  )
}