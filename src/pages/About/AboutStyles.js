import styled from "styled-components"

export const Section = styled.section`
	width: 100%;
	min-height: 100vh;
	background-color: var(--bg-color-primary);
	color: var(--white-color);
	margin-top: var(--header-height);
`
export const Aside = styled.aside`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	padding: 30px;

	& p {
		font-size: 1.3rem;
	}
`
