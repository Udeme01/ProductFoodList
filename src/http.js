export const fetchDesserts = async () => {
  const response = await fetch("http://localhost:5173/data.json");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch desserts!");
  }

  return resData;
};
