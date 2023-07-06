import { styled } from "styled-components";

export const Container = styled.div`
  width: 300px;
  max-height: 480px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: 0px 1px 41px -17px rgba(0, 0, 0, 0.75);
`;

export const Flag = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 190px;
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
