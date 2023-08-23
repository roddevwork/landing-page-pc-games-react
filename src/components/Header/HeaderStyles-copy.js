import styled from "styled-components"

export const Header_Styled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--header-height);
	padding: 1rem;
	z-index: 999;
	color: rgb(234, 234, 234);
	background-color: var(--bg-color-sedondary);
`

export const Section_ContainerMenu_Styled = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (width >= 981px) {
		display: flex;
		justify-content: space-between;
	}
`

export const Div_ContainerLogo_Styled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;

	& img {
		width: 42px;
	}

	& p {
		color: var(--first-color);
		font-size: 1rem;
		font-weight: bold;
	}
`
export const Nav_NavMenu_Styled = styled.nav`
	display: none;

	.links-container {
		& a {
			padding: 10px;
			text-align: center;
			font-size: 1rem;
			font-weight: bold;
			transition: color 0.3s, background-color 0.3s;
			color: var(--first-color);

			&:hover {
				color: var(--white-color);
			}
		}
	}

	&.active {
		display: flex;
		flex-direction: column;
		background-color: var(--bg-color-sedondary);
		opacity: 1;
		position: absolute;
		top: var(--header-height);
		left: 0;
		width: 100%;
		padding: 0;
		z-index: 1000;

		.links-container {
			display: flex;
			flex-direction: column;
			height: auto;

			& a {
				font-size: 1.5rem;
			}
		}
		.shop-icon {
			text-align: center;
			margin-bottom: 15px;
			padding-top: 10px;
			color: var(--first-color);

			& svg.svg-inline--fa {
				width: 32px;
				height: 32px;
			}
		}
	}

	@media screen and (width >= 981px) {
		display: flex;
		align-items: center;
		gap: 20px;

		.links-container {
			&.active {
				z-index: 0;
			}
		}

		.shop-icon {
			color: var(--first-color);

			& svg.svg-inline--fa {
				width: 32px;
				height: 32px;
			}
		}
	}
`

export const Button_BtnMenu_Styles = styled.button`
	display: block;
	cursor: pointer;
	border: none;
	background-color: transparent;

	.svg-inline--fa {
		font-size: 32px;
		color: var(--first-color);

		&:hover {
			color: var(--white-color);
		}
	}

	@media screen and (width >= 981px) {
		display: none;
	}
`
