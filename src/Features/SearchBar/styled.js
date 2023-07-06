import { css, styled } from "styled-components";

export const Container = styled.div`
  margin: 50px -35px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 946px) {
    gap: 50px;
    margin: 50px 0;
  }
`;

export const Input = styled.input`
  padding: 20px;
  max-width: 550px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 7px;
  box-shadow: 0px 1px 41px -17px rgba(0, 0, 0, 0.75);
  margin: auto 45px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ as }) =>
    as === "select" &&
    css`
      max-width: 200px;
      width: 100%;
    `}
`;
