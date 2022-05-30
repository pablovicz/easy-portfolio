import { Button, HStack, Icon, IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useContext, useEffect, useMemo, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Contacts } from "../Header/Contacts";
import { RenderByCondition } from "../Others/RenderByCondition";
import { NavigationContext } from "../../service/provider/NavigationProvider";
import { useCallback } from "react";

export const fullSections = [
    {
        sectionName: 'about-me',
        enLabel: 'About me',
        ptLabel: 'Sobre mim'
    },
    {
        sectionName: 'projects',
        enLabel: 'Projects',
        ptLabel: 'Projetos'
    },
    {
        sectionName: 'skills',
        enLabel: 'Skills',
        ptLabel: 'Habilidades'
    },
    {
        sectionName: 'professional-experience',
        enLabel: 'Professional Experience',
        ptLabel: 'Experiência Professional'
    },
    {
        sectionName: 'academic-background',
        enLabel: 'Academic Background',
        ptLabel: 'Formação Acadêmica'
    },
    {
        sectionName: 'courses-certifications',
        enLabel: 'Courses & Certifications',
        ptLabel: 'Cursos & Certificações'
    }


]


export function Navbar() {

    const { selectedSection } = useContext(NavigationContext);


    return (
        <HStack spacing="8">
            {fullSections.map(option => (
                <Link
                    id={`link-to-${option.sectionName}`}
                    to={option.sectionName}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={1000}
                >
                    <Button
                        variant="unstyled"
                        isDisabled={option.sectionName === selectedSection}
                        color={option.sectionName === selectedSection ? 'app.primary' : 'gray.100'}
                        bgColor='gray.900'
                        _disabled={{ color: "app.primary", borderBottomColor: 'app.primary', borderBottomWidth: '1px', borderBottomStyle: 'solid', cursor: 'none' }}
                        _hover={{ color: "app.primary", borderBottomColor: 'app.primary', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
                        _focus={{ color: "app.primary", borderBottomColor: 'app.primary', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
                        borderRadius='0'
                    >
                        {option.enLabel}
                    </Button>
                </Link>
            ))}
        </HStack >
    );
}