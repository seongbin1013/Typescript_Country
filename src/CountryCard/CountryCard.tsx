import { Border } from "..";
import { Country } from "../types/types";

interface CountryCard {
  country: Country;
  onClick: () => void;
}

function CountryCard({ country, onClick }: CountryCard) {
  return (
    <>
      <Border onClick={onClick}>
        <img src={country.flags.png} alt="" />
        <div>
          <h2>{country.name.common}</h2>
          <p>{country.capital}</p>
        </div>
      </Border>
    </>
  );
}

export default CountryCard;
