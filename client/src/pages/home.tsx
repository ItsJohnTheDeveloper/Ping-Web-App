import { useState, useEffect } from "react";
import { getPings } from "../services/data_db";
import Posts from "../components/Feed/Posts";
import Post from "../components/Feed/Post";
import { Ping } from "../models/ping";
import { createPing } from "../services/data_db";
import { generateNewPing } from "../generateNew";
import FeedLoading from "../components/Feed/FeedLoading";
import SwipeableForm from "../components/Form/SwipeableForm";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initially populate pings
    getAllPings();
  }, []);

  async function getAllPings() {
    try {
      const data = await getPings();
      setPosts(data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
      console.log(err);
    }
  }

  const handleCreatePing = async (text: string) => {
    const ping = generateNewPing(text);

    const newPing = await createPing(ping);
    console.log("You made a PING!");
    console.log(newPing);
    await getAllPings();
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loading ? (
        <FeedLoading />
      ) : (
        <Posts>
          {posts.map((post: Ping) => (
            <Post text={post.text} />
          ))}
        </Posts>
      )}
      {error.toString()}
      <SwipeableForm onSubmit={handleCreatePing} />
    </>
  );
}
