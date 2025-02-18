export async function questionsFetch() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=15&type=multiple",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw Error(`Failed to fetch questions ${response.statusText}`);
  }

  return response.json();
}
