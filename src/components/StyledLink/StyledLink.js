import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: inherit;
	img {
		width: 200px;
	}
`;
export default StyledLink;
