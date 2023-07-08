import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  gap: 70px;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Flag = styled.img`
  min-width: 290px;
  max-width: 800px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: grid;
  gap: 90px;

  @media (max-width: 1100px) {
    gap: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.p`
  margin-right: 25px;
  margin: 0 25px 0 0;
`;

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.colors.elements};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 6px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 5px 0px 30px -7px rgba(0, 0, 0, 0.75);
  gap: 10px;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1000px) {
    display: grid;
  }
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.elements};
`;

export const ButtonsContainer = styled.label`
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
`;

export const BackButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.elements};
  border: none;
  display: flex;
  gap: 5px;
  max-width: 80px;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 5px 0px 30px -7px rgba(0, 0, 0, 0.75);
  text-decoration: none;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Page = styled.div`
  text-align: center;
  margin-top: 70px;
`;
