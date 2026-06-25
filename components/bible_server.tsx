"use server";

async function fetchPassage() {
  const secretApiKey = process.env.SECRET_API_KEY;

  const response = await fetch('https://api.youversion.com/v1/bibles/3034/passages/MAT.1', {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${secretApiKey}`
    }
  });

  return response.json();
}

export default async function BibleServer() {
  const passage = await fetchPassage();

  return (
    <section>
      <h1>Passage</h1>
      <article>
        <p>{passage.content ?? 'No passage text available.'}</p>
      </article>
    </section>
  );
}
