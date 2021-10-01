import * as React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    white: "#fff",
    footer: "#003333",
    cPrimary: "#2885F6",
    cSecondary: "#767D84",
  },
};

export default function Layout({ pageTitle, pageHeading, children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>

        <title>{pageTitle} Page</title>
        <h1>{pageHeading}</h1>
        {children}
      </>
    </ThemeProvider>
  );
}
