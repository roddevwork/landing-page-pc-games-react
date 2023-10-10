import styled from "styled-components"

export const ProductsSection = styled.section`
	width: 100%;
	min-height: 100vh;
	background-color: var(--bg-color-primary);
	margin-bottom: 30px;
`

export const ContainerProducts = styled.article`
	text-align: center;
	padding-top: var(--header-height);
`

export const TitleProductsSection = styled.h2`
	padding: 30px 0;
	font-size: 2rem;
	color: var(--white-color);
`
export const ContainerCards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	/* overflow-x: scroll; */
	gap: 8px;
`

export const Cards = styled.div`
	width: 200px;
	min-width: 200px;
	height: 400px;
	border-radius: 8px;
	margin: 20px auto;
	padding: 16px;
	margin: 10px;
	text-align: center;
	cursor: pointer;
	border: 1px solid var(--white-color);
	box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
	background-color: var(--bg-color-primary);

	&:hover {
		border: none;
		padding: 0;

		& img {
			height: 280px;
			object-fit: fill;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& h2 {
			padding: 0 8px;
		}

		& p {
			padding: 0 8px;
		}
	}

	& img {
		width: 100%;
		border-radius: 8px;
		object-fit: cover;
	}

	& h2 {
		margin-top: 8px;
		font-size: 1.2rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(--white-color);

		&:hover {
			white-space: normal;
			font-size: 1rem;
		}
	}
`
export const ContainerPrice = styled.div`
	display: flex;
	justify-content: space-around;

	& p {
		font-size: 1.2rem;
		color: var(--white-color);
		margin-top: 8px;
	}

	& p:first-child {
		text-decoration: line-through;
	}
	& p:last-child {
		color: var(--first-color);
	}
`

export const ContainerButtons = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;

	& button {
		padding: 5px;
		margin: 8px 5px 0px 5px;
		font-size: 1.1rem;
		color: var(--white-color);
		cursor: pointer;
	}
`
