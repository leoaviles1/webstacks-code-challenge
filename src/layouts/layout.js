import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/Theme";
import GlobalStyles from "../components/styles/Global";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Layout({ pageTitle, pageHeading, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='Wrapper'>
        <Header />
        <Hero />

        {/* <title>{pageTitle} Page</title>
        <h1>{pageHeading}</h1>
        {children} */}
      </div>
    </ThemeProvider>
  );
}
