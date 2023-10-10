import styled from "styled-components"

export const CategorySection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;

	background-color: var(--bg-color-primary);
	margin-bottom: 30px;

	& ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 7px;
		color: var(--white-color);

		& li {
			cursor: pointer;
			font-size: 1.2rem;

			&:hover {
				color: var(--first-color);
			}
		}
	}
`
