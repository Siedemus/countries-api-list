import { useLocation, useNavigate } from "react-router-dom";
import { Container, Input } from "./styled";

export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const regionQuery = new URLSearchParams(location.search).get("region");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const onSelectChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target === "") {
      searchParams.delete("region");
    } else {
      searchParams.set("region", target.value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Container>
      <Input
        onInput={(e) => onInputChange(e)}
        placeholder="Search for a country..."
        value={searchQuery || ""}
      />
      <Input
        as="select"
        onChange={(e) => onSelectChange(e)}
        value={regionQuery || ""}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Input>
    </Container>
  );
};
