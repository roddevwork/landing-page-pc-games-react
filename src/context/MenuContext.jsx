import { createContext, useContext, useState } from "react"

// Creamos el contexto
const MenuContext = createContext()

export function useMenu() {
	return useContext(MenuContext)
}

// Proveedor del contexto que almacenará el estado del menú
export function MenuProvider({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// const openMenu = () => {
	// 	setIsMenuOpen(true)
	// }

	// const closeMenu = () => {
	// 	setIsMenuOpen(false)
	// }
	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState)
	}

	return (
		<MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	)
}
