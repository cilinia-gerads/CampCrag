import { createContext, useState } from "react"

export const NavbarContext = createContext();
const NavbarProvider = (props) => {

    const [ menu, setMenu ] = useState("home");
    const [ mobileMenu, setMobileMenu ] = useState(false);
    const [ sticky, setSticky ] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    const NavbarValue = { menu, setMenu, mobileMenu, setMobileMenu, sticky, setSticky, toggleMenu,  }

    return (
        <NavbarContext.Provider value={NavbarValue}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider
