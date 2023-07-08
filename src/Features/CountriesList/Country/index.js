import { useNavigate } from "react-router-dom";
import { Header } from "../../../Common/Header/styled";
import { Container, Description, Flag, Text } from "./styled";

export const Country = ({ flag, name, population, region, capital, cca3 }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/country/${cca3}`);
      }}
    >
      <Flag src={flag} />
      <Description>
        <Header as="h3">{name ? name : "No data"}</Header>
        <Text>
          <strong>Population:</strong> {population ? population : "No data"}
        </Text>
        <Text>
          <strong>Region:</strong> {region ? region : "No data"}
        </Text>
        <Text>
          <strong>Capital:</strong> {capital ? capital : "No data"}
        </Text>
      </Description>
    </Container>
  );
};
