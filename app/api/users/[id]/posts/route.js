import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, context) => {
  try {
    const params = await context.params;

    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }

    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
