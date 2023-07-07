import { Container, Input } from "./styled";

export const SearchBar = () => {


  return (
    <Container>
      <Input placeholder="Search for a country..." />
      <Input as="select">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Input>
    </Container>
  );
};
