import { Button, HStack, Icon, Link, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdOutlineEmail } from 'react-icons/md';

const contacts = [

    {
        label: 'Linkedin',
        link: 'https://www.linkedin.com/in/pablo-woinarovicz/',
        icon: AiFillLinkedin
    },
    {
        label: 'GitHub',
        link: 'https://github.com/pablovicz',
        icon: AiFillGithub
    },
    {
        label: 'Email',
        link: 'pablo.wramoss@gmail.com',
        icon: MdOutlineEmail
    },

]






export function Contacts() {

    const toast = useToast();

    function handleEmailCopy(email: string) {
        navigator.clipboard.writeText(email)
        toast({
            status: 'success',
            title: 'Email Copiado!',
            duration: 300,
            position: 'top-right',
            size: 'small',
            isClosable: true
        })
    }

    return (
        <HStack spacing="8">
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<Icon as={MdKeyboardArrowDown} />}
                    _focus={{ border: 'none', bgColor: 'gray.900', color: 'app.primary' }}
                    color="gray.100"
                    _hover={{ bgColor: 'gray.900', color: 'app.primary' }}
                    variant="unstyled"
                >
                    Contatos
                </MenuButton>

                <MenuList bgColor="gray.700" border="none" color='gray.100'>
                    {contacts.slice(0, 2).map(contact => (

                        <Link
                            href={contact.link}
                            key={contact.label}
                            isExternal
                            _hover={{ bgColor: 'gray.800', color: 'app.primary' }}
                        >
                            <MenuItem

                                _hover={{ bgColor: 'gray.800', color: 'app.primary' }}
                                _focus={{ bgColor: 'gray.800', color: 'app.primary' }}
                                icon={<Icon as={contact.icon} fontSize="32" />}
                            >

                                {contact.label}

                            </MenuItem>
                        </Link>
                    ))}
                    <MenuItem
                        key={contacts[2].label}
                        _hover={{ bgColor: 'gray.800', color: 'app.primary' }}
                        _focus={{ bgColor: 'gray.800', color: 'app.primary' }}
                        icon={<Icon as={contacts[2].icon} fontSize="32" />}
                        onClick={() => handleEmailCopy(contacts[2].link)}
                    >
                        {contacts[2].label}
                    </MenuItem>

                </MenuList>
            </Menu>


        </HStack >

    );
}