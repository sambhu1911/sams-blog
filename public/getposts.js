const mongoose = require("mongoose");

// Use a singleton connection (reuse connection across invocations)
let conn = null;

const connectDB = async () => {
  if (conn && mongoose.connection.readyState === 1) {
    return;
  }
  conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Avoid recompiling model if already compiled
const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    await connectDB();
    const posts = await Post.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(posts),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};