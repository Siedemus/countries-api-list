import apiLink from "../../Assets/Data/apiLink";

export const getCountries = async () => {
  const response = await fetch(apiLink);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
