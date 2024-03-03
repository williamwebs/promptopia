import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();
    /* we have to connect to the database everytime because 
      it is a lambda function that is going to die once it does its job.*/
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save(); //save it to the db
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
