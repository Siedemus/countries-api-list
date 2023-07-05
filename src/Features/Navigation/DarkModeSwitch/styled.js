import { styled } from "styled-components";

export const Button = styled.button`
  font-weight: 800;
  display: flex;
  gap: 8px;
  font-size: 19px;
  color: ${({ theme }) => theme.colors.text};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  align-items: center;

  &&:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`;
