import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId, // user is going to be a doc in the database
    ref: 'User', // is going to be one-to-many relationship. meaning, one user can create multiple prompts
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
// check the db if there is a prompt collection / cluster already. If not, create a Prompt collection / cluster with the PromptSchema

export default Prompt;
