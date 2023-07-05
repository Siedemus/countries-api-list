import { styled } from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.elements};
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  box-shadow: 1px -10px 15px 0px rgba(0, 0, 0, 0.75);
`;
