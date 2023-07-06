import { styled, css } from "styled-components";

export const Header = styled.h1`
  margin: 0;

  ${({ as }) =>
    as === "h3" &&
    css`
      margin-bottom: 10px;
    `}
`;
