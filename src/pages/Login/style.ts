import styled from "styled-components"

export const Box = styled.div`
	background-color: #fff;
	padding: 60px;
	box-shadow: 0 0 10px #00000068;
	width: 480px;
	text-align: center;

	h1 {
		margin-bottom: 35px;
	}

	span {
		color: gray;

		a {
			color: #f18c27;

			&:hover {
				text-decoration: underline;
				color: #f18c27;
			}
		}
	}
`
export const BaseInput = styled.input`
	height: 50px;
	width: 100%;
	margin-bottom: 20px;
	font-size: 1rem;
	padding: 0 10px;
	outline: none;
	border: 1px solid #d3d3d3;
`

export const MainButton = styled.button`
	width: 100%;
	height: 50px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: #d17e37;
	border: none;
	color: #fff;
	font-size: 1rem;
	font-weight: 500;

	&:hover {
		background-color: #f18c27;
	}
`
