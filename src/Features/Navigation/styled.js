import { styled } from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.elements};
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  box-shadow: 1px -10px 15px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s;

  @media (max-width: 700px) {
    padding: 30px 15px;
  }

  @media (max-width: 600px) {
    font-size: 11px;
  }

  @media (max-width: 390px) {
    font-size: 9px;
  }
`;
