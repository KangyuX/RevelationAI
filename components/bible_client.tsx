"use client"

import { useState, useEffect } from "react"
import { fetchBibleVerses } from "./actions"

const BibleBooks = [
  { book: "Genesis", chapters: 50 },
  { book: "Exodus", chapters: 40 },
  { book: "Leviticus", chapters: 27 },
  { book: "Numbers", chapters: 36 },
  { book: "Deuteronomy", chapters: 34 },
  { book: "Joshua", chapters: 24 },
  { book: "Judges", chapters: 21 },
  { book: "Ruth", chapters: 4 },
  { book: "1 Samuel", chapters: 31 },
  { book: "2 Samuel", chapters: 24 },
  { book: "1 Kings", chapters: 22 },
  { book: "2 Kings", chapters: 25 },
  { book: "1 Chronicles", chapters: 29 },
  { book: "2 Chronicles", chapters: 36 },
  { book: "Ezra", chapters: 10 },
  { book: "Nehemiah", chapters: 13 },
  { book: "Esther", chapters: 10 },
  { book: "Job", chapters: 42 },
  { book: "Psalms", chapters: 150 },
  { book: "Proverbs", chapters: 31 },
  { book: "Ecclesiastes", chapters: 12 },
  { book: "Song of Solomon", chapters: 8 },
  { book: "Isaiah", chapters: 66 },
  { book: "Jeremiah", chapters: 52 },
  { book: "Lamentations", chapters: 5 },
  { book: "Ezekiel", chapters: 48 },
  { book: "Daniel", chapters: 12 },
  { book: "Hosea", chapters: 14 },
  { book: "Joel", chapters: 3 },
  { book: "Amos", chapters: 9 },
  { book: "Obadiah", chapters: 1 },
  { book: "Jonah", chapters: 4 },
  { book: "Micah", chapters: 7 },
  { book: "Nahum", chapters: 3 },
  { book: "Habakkuk", chapters: 3 },
  { book: "Zephaniah", chapters: 3 },
  { book: "Haggai", chapters: 2 },
  { book: "Zechariah", chapters: 14 },
  { book: "Malachi", chapters: 4 },
  { book: "Matthew", chapters: 28 },
  { book: "Mark", chapters: 16 },
  { book: "Luke", chapters: 24 },
  { book: "John", chapters: 21 },
  { book: "Acts", chapters: 28 },
  { book: "Romans", chapters: 16 },
  { book: "1 Corinthians", chapters: 16 },
  { book: "2 Corinthians", chapters: 13 },
  { book: "Galatians", chapters: 6 },
  { book: "Ephesians", chapters: 6 },
  { book: "Philippians", chapters: 4 },
  { book: "Colossians", chapters: 4 },
  { book: "1 Thessalonians", chapters: 5 },
  { book: "2 Thessalonians", chapters: 3 },
  { book: "1 Timothy", chapters: 6 },
  { book: "2 Timothy", chapters: 4 },
  { book: "Titus", chapters: 3 },
  { book: "Philemon", chapters: 1 },
  { book: "Hebrews", chapters: 13 },
  { book: "James", chapters: 5 },
  { book: "1 Peter", chapters: 5 },
  { book: "2 Peter", chapters: 3 },
  { book: "1 John", chapters: 5 },
  { book: "2 John", chapters: 1 },
  { book: "3 John", chapters: 1 },
  { book: "Jude", chapters: 1 },
  { book: "Revelation", chapters: 22 }
];

export default function BibleClient() {
  const [book, setBook] = useState(BibleBooks[0].book); // default to first book
  const [chapter, setChapter] = useState(1);
  const [data, setData]: any = useState(null);

  async function handleFetch() {
    const data = await fetchBibleVerses(book, chapter);
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    handleFetch();
  }, [book, chapter]);

  const selectedBook = BibleBooks.find(b => b.book === book);
  const chapterCount = selectedBook?.chapters || 0;

  return (
    <main className="p-4">
      <header>
        <h1 className="text-2xl font-bold text-center py-4">Bible App</h1>
      </header>

      <main className="p-4">
        <nav className="flex bg-gray-200 text-black divide-x divide-gray-300">

        {/* Select Book */}
        <div className="flex-1 text-center py-4 border-b-2 border-blue-500">
          <label className="block font-semibold mb-1">Select Book</label>
          <select
            className="border rounded px-2 py-1 w-40"
            value={book}
            onChange={(e) => {
              setBook(e.target.value);
              setChapter(1); // reset chapter when book changes
            }}
          >
            {BibleBooks.map((b) => (
              <option key={b.book} value={b.book}>
                {b.book}
              </option>
            ))}
          </select>
        </div>

        {/* Select Chapter */}
        <div className="flex-1 text-center py-4 border-b-2 border-blue-500">
          <label className="block font-semibold mb-1">Select Chapter</label>
          <select
            className="border rounded px-2 py-1 w-40"
            value={chapter}
            onChange={(e) => setChapter(Number(e.target.value))}
          >
            {Array.from({ length: chapterCount }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Select Version */}
        <div className="flex-1 text-center py-4 border-b-2 border-blue-500">
          <label className="block font-semibold mb-1">Select Version</label>
          <span className="text-gray-600">Coming soon…</span>
        </div>

      </nav>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Verses</h2>
        <p className="text-gray-700">
          {data}
        </p>
      </div>
    </main>
    </main>
  );
}
