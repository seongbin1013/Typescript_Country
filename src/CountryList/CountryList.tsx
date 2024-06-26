import { useEffect, useState } from "react";
import { Country, CountryWithLike } from "../types/types";
import { fetchCountries } from "../api/api";
import { Box } from "..";
import CountryCard from "../CountryCard/CountryCard";

function CountryList() {
  const [countries, setCountries] = useState<CountryWithLike[]>([]);

  const handleToggle = (countryCode: string) => {
    const newCountry = countries.map((data) => {
      return data.cca2 === countryCode
        ? { ...data, isLiked: !data.isLiked }
        : data;
    });
    setCountries(newCountry);
    console.log(newCountry);
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data: Country[] = await fetchCountries();
        setCountries(data.map((d) => ({ ...d, isLiked: false })));
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  console.log(countries);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Favorite Countries</h1>
        <Box>
          {countries
            .filter((item) => item.isLiked === true)
            .map((country) => (
              <CountryCard
                key={country.name.common}
                country={country}
                onClick={() => handleToggle(country.cca2)}
              />
            ))}
        </Box>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>countries</h1>
        <Box>
          {countries
            .filter((item) => item.isLiked === false)
            .map((country) => (
              <CountryCard
                key={country.name.common}
                country={country}
                onClick={() => handleToggle(country.cca2)}
              />
            ))}
        </Box>
      </div>
    </>
  );
}

export default CountryList;
