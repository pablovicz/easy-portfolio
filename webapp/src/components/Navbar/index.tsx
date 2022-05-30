import { Button, HStack, Icon, IconButton } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useEffect, useMemo } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Contacts } from "../Header/Contacts";
import { RenderByCondition } from "../Others/RenderByCondition";

interface NavbarProps {
    selectedSelection: string;
    onCallback: (option: string) => void;
}


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


export function Navbar({ selectedSelection, onCallback }: NavbarProps) {


    function getSelectedOptionIndex() {
        return fullSections.map(op => (op.sectionName)).indexOf(selectedSelection);
    }

    const currentIndex = useMemo(() => {
        return fullSections.map(op => (op.sectionName)).indexOf(selectedSelection);
    }, [selectedSelection])

    const options = useMemo(() => {



        const index = getSelectedOptionIndex();

        console.log(index)

        if (index <= 2) {

            return fullSections.slice(0, 3)
        }

        if (3 >= index && index <= 4) {
            return fullSections.slice(index, index + 2)
        }

        return fullSections.slice(4, fullSections.length)


    }, [selectedSelection]);

    function handleNextClick() {
        const index = getSelectedOptionIndex();
        if (index !== fullSections.length - 1) {
            onCallback(fullSections.map(op => (op.sectionName))[index + 1])
        }
    }

    function handleBackClick() {
        const index = getSelectedOptionIndex();
        if (index > 0) {
            onCallback(fullSections.map(op => (op.sectionName))[index - 1])
        }
    }

    return (
        <HStack spacing="8">
            <RenderByCondition condition={currentIndex > 0}>
                <IconButton
                    aria-label="Back"
                    icon={<Icon as={MdOutlineKeyboardArrowLeft} fontSize="24" />}
                    borderRadius="50%"
                    bgColor="gray.900"
                    color="app.primary"
                    _hover={{ bgColor: "gray.600" }}
                    _focus={{ bgColor: "gray.600", border: 'none' }}
                    size="xs"
                    onClick={() => handleBackClick()}
                />
            </RenderByCondition>
            {options.map(option => (
                <Link
                    to={option.sectionName}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={1000}
                >

                    <Button
                        variant="unstyled"
                        isDisabled={option.sectionName === selectedSelection}
                        color={option.sectionName === selectedSelection ? 'app.primary' : 'gray.100'}
                        bgColor='gray.900'
                        _disabled={{ color: "app.primary", borderBottomColor: 'app.primary', borderBottomWidth: '1px', borderBottomStyle: 'solid', cursor: 'none' }}
                        _hover={{ color: "app.primary", borderBottomColor: 'app.primary', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
                        _focus={{ color: "app.primary", borderBottomColor: 'app.primary', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
                        borderRadius='0'
                        onClick={() => onCallback(option.sectionName)}
                    >
                        {option.enLabel}
                    </Button>
                </Link>
            ))}
            <RenderByCondition condition={currentIndex < fullSections.length - 1}>
                <IconButton
                    aria-label="Next"
                    icon={<Icon as={MdOutlineKeyboardArrowRight} fontSize="24" />}
                    borderRadius="50%"
                    bgColor="gray.900"
                    color="app.primary"
                    _hover={{ bgColor: "gray.600" }}
                    _focus={{ border: 'none' }}
                    size="xs"
                    onClick={() => handleNextClick()}
                />
            </RenderByCondition>
            <Contacts />

        </HStack >
    );
}