"use server"

import { ApiClient, BibleClient } from "@youversion/platform-core";
const SECRET_API_KEY: string = process.env.SECRET_API_KEY as string;


export async function fetchBibleVerses(book: string, chapter: number) {
    console.log(`Fetching verses for ${book} ${chapter}`);
    const apiClient = new ApiClient({
        appKey: SECRET_API_KEY,
            });
    
    switch (book) {
  // Old Testament
  case "Genesis":
    book = "GEN";
    break;
  case "Exodus":
    book = "EXO";
    break;
  case "Leviticus":
    book = "LEV";
    break;
  case "Numbers":
    book = "NUM";
    break;
  case "Deuteronomy":
    book = "DEU";
    break;
  case "Joshua":
    book = "JOS";
    break;
  case "Judges":
    book = "JDG";
    break;
  case "Ruth":
    book = "RUT";
    break;
  case "1 Samuel":
    book = "1SA";
    break;
  case "2 Samuel":
    book = "2SA";
    break;
  case "1 Kings":
    book = "1KI";
    break;
  case "2 Kings":
    book = "2KI";
    break;
  case "1 Chronicles":
    book = "1CH";
    break;
  case "2 Chronicles":
    book = "2CH";
    break;
  case "Ezra":
    book = "EZR";
    break;
  case "Nehemiah":
    book = "NEH";
    break;
  case "Esther":
    book = "EST";
    break;
  case "Job":
    book = "JOB";
    break;
  case "Psalms":
    book = "PSA";
    break;
  case "Proverbs":
    book = "PRO";
    break;
  case "Ecclesiastes":
    book = "ECC";
    break;
  case "Song of Solomon":
  case "Song of Songs":
    book = "SNG";
    break;
  case "Isaiah":
    book = "ISA";
    break;
  case "Jeremiah":
    book = "JER";
    break;
  case "Lamentations":
    book = "LAM";
    break;
  case "Ezekiel":
    book = "EZK";
    break;
  case "Daniel":
    book = "DAN";
    break;
  case "Hosea":
    book = "HOS";
    break;
  case "Joel":
    book = "JOL";
    break;
  case "Amos":
    book = "AMO";
    break;
  case "Obadiah":
    book = "OBA";
    break;
  case "Jonah":
    book = "JON";
    break;
  case "Micah":
    book = "MCA";
    break;
  case "Nahum":
    book = "NAM";
    break;
  case "Habakkuk":
    book = "HAB";
    break;
  case "Zephaniah":
    book = "ZEP";
    break;
  case "Haggai":
    book = "HAG";
    break;
  case "Zechariah":
    book = "ZEC";
    break;
  case "Malachi":
    book = "MAL";
    break;

  // New Testament
  case "Matthew":
    book = "MAT";
    break;
  case "Mark":
    book = "MRK";
    break;
  case "Luke":
    book = "LUK";
    break;
  case "John":
    book = "JHN";
    break;
  case "Acts":
    book = "ACT";
    break;
  case "Romans":
    book = "ROM";
    break;
  case "1 Corinthians":
    book = "1CO";
    break;
  case "2 Corinthians":
    book = "2CO";
    break;
  case "Galatians":
    book = "GAL";
    break;
  case "Ephesians":
    book = "EPH";
    break;
  case "Philippians":
    book = "PHP";
    break;
  case "Colossians":
    book = "COL";
    break;
  case "1 Thessalonians":
    book = "1TH";
    break;
  case "2 Thessalonians":
    book = "2TH";
    break;
  case "1 Timothy":
    book = "1TI";
    break;
  case "2 Timothy":
    book = "2TI";
    break;
  case "Titus":
    book = "TIT";
    break;
  case "Philemon":
    book = "PHM";
    break;
  case "Hebrews":
    book = "HEB";
    break;
  case "James":
    book = "JAM";
    break;
  case "1 Peter":
    book = "1PE";
    break;
  case "2 Peter":
    book = "2PE";
    break;
  case "1 John":
    book = "1JO";
    break;
  case "2 John":
    book = "2JO";
    break;
  case "3 John":
    book = "3JO";
    break;
  case "Jude":
    book = "JDE";
    break;
  case "Revelation":
    book = "REV";
    break;
}


    const bibleClient = new BibleClient(apiClient);

    const passage = await bibleClient.getPassage(3034, `${book}.${chapter}`, "text");
    console.log(passage.content);
    return passage.content;
}