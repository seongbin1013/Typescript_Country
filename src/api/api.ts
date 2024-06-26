import axios from "axios";
import { Country } from "../types/types";

const API_URL = "https://restcountries.com/v3.1/all";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
