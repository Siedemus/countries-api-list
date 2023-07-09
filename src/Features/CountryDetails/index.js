import { useParams } from "react-router-dom";
import {
  Container,
  Content,
  Description,
  ErrorMessage,
  Flag,
  Text,
  Button,
  ButtonsContainer,
  Footer,
  Page,
  BackButton,
} from "./styled";
import { Header } from "../../Common/Header/styled";
import { useCreateDataPack } from "./useCreateDataPack";

export const CountryDetails = () => {
  const { id } = useParams();
  const data = useCreateDataPack(id);

  return (
    <Page>
      <BackButton to="/">
        <ion-icon name="arrow-back-sharp"></ion-icon>
        Back
      </BackButton>
      <Container>
        {!data ? (
          <ErrorMessage>Hello</ErrorMessage>
        ) : (
          <>
            <Flag src={data.flag} />
            <Description>
              <Header>{data.commonName}</Header>
              <Content>
                <Text>
                  <strong>Official Name: </strong>
                  {data.officialName}
                </Text>
                <Text>
                  <strong>Population: </strong>
                  {data.population}
                </Text>
                <Text>
                  <strong>Region: </strong>
                  {data.region}
                </Text>
                <Text>
                  <strong>Sub Region: </strong>
                  {data.subRegion}
                </Text>
                <Text>
                  <strong>Capital: </strong>
                  {data.capital}
                </Text>
                <Text>
                  <strong>Top Level Domain: </strong>
                  {data.tld}
                </Text>
                <Text>
                  <strong>Currencies: </strong>
                  {data.currencies}
                </Text>
                <Text>
                  <strong>Languages: </strong>
                  {data.languages}
                </Text>
              </Content>
              <Footer>
                <strong>Border Countries: </strong>
                <ButtonsContainer>
                  {data.borders === "No Data" ? (
                    <Text>{data.borders}</Text>
                  ) : (
                    data.borders.map((borderCountry) => (
                      <Button
                        to={`/country/${borderCountry}`}
                        key={borderCountry}
                      >
                        {borderCountry}
                      </Button>
                    ))
                  )}
                </ButtonsContainer>
              </Footer>
            </Description>
          </>
        )}
      </Container>
    </Page>
  );
};
