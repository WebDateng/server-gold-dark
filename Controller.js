import Chat from "./Models.js";

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const saveChat = async (req, res) => {
  const chat = new Chat(req.body);
  try {
    const insertChat = await chat.save();
    res.status(201).json(insertChat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
