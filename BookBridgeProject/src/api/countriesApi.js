const API_KEY = import.meta.env.VITE_COUNTRIES_API_KEY;

export async function getAfricanCountries() {
  const response = await fetch(
    "https://api.restcountries.com/countries/v5/region/Africa?response_fields=names.common,region&limit=100",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  const data = await response.json();

  return data.data.objects
    .map((country) => country.names.common)
    .sort((a, b) => a.localeCompare(b));
}