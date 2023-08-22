import styled from "styled-components"

export const SectionAboutUs_Styled = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	padding: 30px;
	color: var(--white-color);
	background-color: var(--bg-color-primary);
`
export const Title_Styled = styled.h2`
	font-size: 2rem;
	text-align: center;
`
export const DivContainerItem_Styled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	@media screen and (width <=670px) {
		flex-direction: column;
		text-align: center;
	}
`

export const GamePassContainer_Styled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;

	& h3 {
		font-size: 1.5rem;
	}

	& p {
		font-size: 1.1rem;
	}
`
export const PagosContainer_Styled = styled(GamePassContainer_Styled)``
export const AtencionContainer_Styled = styled(GamePassContainer_Styled)``
