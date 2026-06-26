"use server"

import { ApiClient, BibleClient } from "@youversion/platform-core";

const SECRET_API_KEY: string = process.env.SECRET_API_KEY as string;
console.log(SECRET_API_KEY);

const apiClient = new ApiClient({
  appKey: SECRET_API_KEY
});

const bibleClient = new BibleClient(apiClient);

const passage = await bibleClient.getPassage(3034, "JHN.3", "text");
console.log(passage.content);

const BibleServer = async () => {

  return (
    <div>
      {passage.content}
    </div>
  )
};

export default BibleServer;