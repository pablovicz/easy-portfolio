import { createContext, ReactNode, useMemo, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { fullSections } from "../../components/Navbar";


type NavigationContextProps = {
    selectedSection: string;
    setSelectedSection: (section: string) => void;
    scrollToTop: () => void;
    scrollToBottom: () => void;
    isFirstSection: boolean;
    isLastSection: boolean;
    sectionIndex: number;
};

export const NavigationContext = createContext({} as NavigationContextProps);


type NavigationProviderProps = {
    children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {

    const [selectedSection, setSelectedSection] = useState('about-me');

    const isLastSection = useMemo(() => {
        return fullSections.map(s => (s.sectionName)).indexOf(selectedSection) === fullSections.length - 1
    }, [selectedSection]);

    const isFirstSection = useMemo(() => {
        return fullSections.map(s => (s.sectionName)).indexOf(selectedSection) === 0
    }, [selectedSection]);

    const sectionIndex = useMemo(() => {
        return fullSections.map(s => (s.sectionName)).indexOf(selectedSection)
    }, [selectedSection])

    const scrollToTop = () => {
        scroll.scrollToTop();
        setSelectedSection(fullSections[0].sectionName)
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
        setSelectedSection(fullSections[fullSections.length - 1].sectionName)
    };

    return (
        <NavigationContext.Provider value={{ selectedSection, setSelectedSection, isLastSection, isFirstSection, scrollToTop, scrollToBottom, sectionIndex }}>
            {children}
        </NavigationContext.Provider>
    );

 }