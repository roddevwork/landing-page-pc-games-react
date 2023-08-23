import styled from "styled-components"

export const Section = styled.section`
	width: 100%;
	min-height: 100vh;
	background-color: var(--bg-color-primary);
	color: var(--white-color);
	margin-top: var(--header-height);
`
export const Aside = styled.aside`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	padding: 30px;
	margin: 0 auto;

	& p {
		font-size: 1.3rem;
		line-height: 1.7rem;
		& p {
			font-weight: bold;
		}
	}

	@media screen and (width <= 980px) {
		width: 100%;
	}
`
