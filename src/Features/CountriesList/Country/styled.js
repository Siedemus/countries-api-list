import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  height: 400px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: 0px 1px 41px -17px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  cursor: pointer;

  &&:hover {
    transform: scale(1.05);
  }

  &&:active {
    transform: scale(1.05);
  }
`;

export const Flag = styled.img`
  border-radius: 9px 9px 0 0;
  width: 300px;
  height: 200px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 15px;
  margin: 0;
`;

export const Description = styled.div`
  display: grid;
  padding: 20px 25px 30px;
  gap: 15px;
`;
