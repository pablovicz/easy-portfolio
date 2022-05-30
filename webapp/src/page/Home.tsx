import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { AboutMeSection } from "../components/sections/AboutMeSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { NavigationProvider } from "../service/provider/NavigationProvider";
import { GoToInitButton } from "../components/Navigation/GoToInitButton";
import { GoToEndButton } from "../components/Navigation/GoToEndButton";
import { ProfessionalExperienceSection } from "../components/sections/ProfessionalExperienceSection";
import { AcademicBackgroundSection } from "../components/sections/AcademicBackgroundSection";
import { CoursesAndCertificationsSection } from "../components/sections/CoursesAndCertificationsSection";



export function Home() {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDir="column"
            overscrollX='none'
            overflowX='unset'
        >
            <NavigationProvider>
                <Header />
                <Flex
                    width="100%"
                    h="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDir="column"
                    maxW={1480}
                    overflowY='auto'
                    mt="150px"
                >

                    <AboutMeSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <ProfessionalExperienceSection />
                    <AcademicBackgroundSection />
                    <CoursesAndCertificationsSection />

                </Flex>

                {/* <GoToInitButton /> */}
                {/* <GoToEndButton /> */}
            </NavigationProvider>
        </Flex>
    );
}