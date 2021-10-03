import * as React from "react";
import { Link } from "gatsby";
import { StyledButton } from "./styles/Button.styled";

export default function SiteButton({ pageLink, pageTitle, customClass, children }) {
  return (
    <StyledButton className={customClass}>
      <Link to={pageLink} title={pageTitle}>
        {children}
      </Link>
    </StyledButton>
  );
}
