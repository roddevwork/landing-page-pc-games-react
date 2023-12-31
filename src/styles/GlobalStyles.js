import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
/* ********** Custom Properties ********** */
:root {
	--first-color: #ff6347;
	--bg-color-primary: rgb(34, 34, 34);
	--bg-color-sedondary: rgba(0, 0, 0, 0.8);
	--black-color: rgb(0, 0, 0);
	--white-color: rgb(253, 253, 253);
	--font-family: Arial, Helvetica, sans-serif;
	--max-width: 1200px;
	--header-height: 70px;
}

/* ********** Reset ********** */
html {
	box-sizing: border-box;
	font-size: 16px;
	scroll-behavior: smooth;
}

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
	list-style: none;
	font-family: var(--font-family);
}

body {
	/* width: 100vw;
	display: flex;
	flex-direction: column;
	min-height: 100vh; */
	overflow-x: hidden;
	background-color: var(--bg-color-primary);
}

a {
	text-decoration: none;
	color: var(--white-color);
}

.none {
	display: none;
}
`
