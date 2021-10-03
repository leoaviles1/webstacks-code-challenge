import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/Theme";
import Wrapper from "../components/Wrapper";
import GlobalStyles from "../components/styles/Global";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Layout({ pageTitle, pageHeading, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper className='Wrapper'>
        <Header />
        <section id='#hero'>
          <Hero />
        </section>
      </Wrapper>
    </ThemeProvider>
  );
}
