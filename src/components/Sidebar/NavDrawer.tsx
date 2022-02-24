import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function NavDrawer() {
  return(
    <Stack spacing={'12'} align='flex-start'>

        <NavSection title =' GERAL'>
            <NavLink href = {'/dashboard'}icon={RiDashboardLine} title={'Dashboard'}/>
            <NavLink href={'/users'} icon={RiContactsLine} title={'Users'}/>
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink href={'/forms'}icon={RiInputMethodLine} title={'Formularies'}></NavLink>
          <NavLink href={'/automation'} icon={RiGitMergeLine} title={"Automation"}></NavLink>
        </NavSection>
          
      </Stack>
  )
}