// index.js (node example)
// b958f5ffbde0cc72857129fb99e22743ac8e0959

// index.js (node example)

import { createClient } from "@deepgram/sdk";
import fs from "fs";

export const transcribeFile = async () => {
    console.log("suceess1")
  const deepgram = createClient(process.env.DEEPGRAM_API_KEY as string);
//   const deepgram = createClient("b958f5ffbde0cc72857129fb99e22743ac8e0959");

  // STEP 2: Call the transcribeFile method with the audio payload and options
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    // path to the audio file
    // fs.readFileSync('./te')
    fs.readFileSync("test2.mp3"),
    // STEP 3: Configure Deepgram options for audio analysis
    {
      model: "nova-2",
      smart_format: true,
    }
  );
  console.log("suceess3")
  // console.log(result)
// const jsonData = JSON.stringify(result, null, 2);
// fs.writeFileSync("test.json",jsonData)

  if (error) throw error;
  // STEP 4: Print the results
  if (!error) console.dir(result, { depth: null });
};

// transcribeFile();