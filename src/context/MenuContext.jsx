import { createContext, useContext, useState } from "react"

// Creamos el contexto
const MenuContext = createContext()

export function useMenu() {
	return useContext(MenuContext)
}

// Proveedor del contexto que almacenará el estado del menú
export function MenuProvider({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const openMenu = () => {
		setIsMenuOpen(true)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<MenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
			{children}
		</MenuContext.Provider>
	)
}
