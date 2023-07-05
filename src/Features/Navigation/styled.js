import { styled } from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.elements};
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
