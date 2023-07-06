import { Header } from "../../../Common/Header/styled";
import { Container, Description, Flag, Text } from "./styled";

export const Country = ({ flag, name, population, region, capital }) => {
  return (
    <Container>
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
