"use server";

async function fetchPassage() {
  const secretApiKey = process.env.SECRET_API_KEY;

  if (!secretApiKey) {
    console.error("Missing SECRET_API_KEY in environment variables.");
    return { content: null };
  }

  const response = await fetch(
    "https://api.youversion.com/v1/bibles/3034/passages/MAT.1",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${secretApiKey}`
      }
    }
  );

  if (!response.ok) {
    console.error("Failed to fetch passage:", response.statusText);
    return { content: null };
  }

  return response.json();
}

export default async function BibleServer() {
  const passage = await fetchPassage();

  return (
    <section>
      <h1>Passage</h1>
      <article>
        <p>{passage?.content ?? "No passage text available."}</p>
      </article>
    </section>
  );
}
