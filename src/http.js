export const dessertsData = async () => {
  const response = await fetch("/data.json");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch desserts!");
  }

  return resData;
};
