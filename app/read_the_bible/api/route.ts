export async function GET() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "SECRET_KEY",
      Accept: "application/json",
    },
  };

  try {
    const res = await fetch(
      "https://api.youversion.com/v1/bibles/3034/passages/MAT.1",
      options
    );

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
