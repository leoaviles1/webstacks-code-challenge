import { createGlobalStyle } from "styled-components";

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
  background: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  line-height: 2rem;
  font-family: 'Inter', sans-serif;
}

h1{
  font-size: 5.6rem;
}

h2{
  font-size: 1.8rem;
}

h3{

}
h5{
  
}

p{
  margin: 0 0 2rem;
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

/* @media screen and (min-width: ){}
@media screen and (min-width: ){}
@media screen and (min-width: ){}
@media screen and (min-width: ){} */


`;

export default GlobalStyles;
