import mongoose from "mongoose";

const Chat = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  absent: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Chats", Chat);
