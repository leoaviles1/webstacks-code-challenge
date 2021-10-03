import styled from "styled-components";
import { respondTo } from "./Responsive";

export const MaxWidthContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 117rem;
  margin: 0 auto;
  padding: 0 2rem;

  ${respondTo.xl`
      padding: 0;
    `}
`;
