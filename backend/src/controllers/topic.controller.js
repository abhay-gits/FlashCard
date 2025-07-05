import Topic from "../models/topic.model.js";

//getTopics
export const getTopic = async (req, res) => {
  try {
    const topics = await Topic.find();
    if (!topics || topics.length === 0) {
      return res.status(404).json({ message: "No topics found" });
    }
    res.status(200).json({ topics });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving topics", error });
  }
};

//postTopic
export const postTopic = async (req, res) => {
  try {
    const { topicName } = req.body;
    if (!topicName) {
      return res.status(400).json({ message: "Topic name is required" });
    }
    // Check if the topic already exists
    const existingTopic = await Topic.findOne({ topic: topicName });
    if (existingTopic) {
      return res
        .status(400)
        .json({ message: `Topic '${topicName}' already exists` });
    }
    console.log("Received topicName:", topicName);
    // Create a new topic
    const newTopic = await Topic.create({ topic: topicName });
    res
      .status(201)
      .json({ message: `Topic '${topicName}' created successfully` });
  } catch (error) {
    res.status(500).json({ message: "Error creating topic", error });
  }
};

//updateTopic
export const updateTopic = async (req, res) => {
    const { topicId } = req.body;
    const { topicName } = req.body;
    console.log("Received topicId:", topicId);
    console.log("Received topicName:", topicName);
    try{
        if(!topicId && !topicName) {
            return res.status(400).json({ message: "Topic ID and Name is required" });
        }
        const topic = await Topic.findByIdAndUpdate(topicId, {topic: topicName} , { new: true });
        res.status(200).json({ message: `Topic updated successfully`, topic });
    } catch (error) {
        return res.status(500).json({ message: "Error updating topic", error });
    }
}

//deleteTopic
export const deleteTopic = async (req, res) => {
  const topicId = req.params.id;
  console.log("Received topicId:", topicId);
  try {
    if (!topicId) {
      return res.status(400).json({ message: "Topic ID is required" });
    }
    const deletedTopic = await Topic.findByIdAndDelete(topicId);
    console.log(deletedTopic);
    res.status(200).json({ message: "Topic deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting topic", error });
  }
};
