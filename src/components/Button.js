import * as React from "react";
import { Link } from "gatsby";
import { StyledButton } from "./styles/Button.styled";

export default function SiteButton({ pageLink, pageTitle, children }) {
  return (
    <StyledButton class='btn'>
      <Link to={pageLink} title={pageTitle}>
        {children}
      </Link>
    </StyledButton>
  );
}
