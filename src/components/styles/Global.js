import { createGlobalStyle } from "styled-components";
import { respondTo } from "./Responsive";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');


html {
	font-size: 62.5%; // Makes it so 1rem == 10px, 1.5rem == 15px, etc.
}

*{
  margin: 0;
  box-sizing: border-box;
}

body{
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  line-height: 2rem;
  font-family: 'Inter', sans-serif;
}

h1{
  font-size: 4rem;
  line-height: 4.8rem;
  margin-bottom: 2.8rem;

  ${respondTo.md`
    font-size: 5.6rem;
    line-height: 6.8rem;
  `}
}

h2{
  font-size: 1.8rem;
}

h5{
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;

  ${respondTo.md`
    font-size: 1.8rem;
    line-height: 22px;
    margin-bottom: 3rem;
  `}
}

p{
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2.2rem;
  margin: 0 0 2rem;

  ${respondTo.md`
    font-size: 1.8rem;
  `}

	&:last-child {
		margin-bottom: 0;
	}
}

a {
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.44rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: .5px;
	transition: color .3s linear, background-color .3s linear, border-color .3s linear;
  text-decoration: none;

  

	&:hover,
	&:active,
	&:focus,
	.active > & {
		color: ${({ theme }) => theme.colors.white};
	}
}

img {
  max-width: 100%;
}

.bgDiv {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
  }
`;

export default GlobalStyles;
