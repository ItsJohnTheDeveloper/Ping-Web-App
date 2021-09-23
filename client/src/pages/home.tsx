import { useState, useEffect, useRef } from "react";
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
  const postsRef = useRef<null | HTMLElement>(null);

  const executeScroll = () => {
    if (postsRef && postsRef.current) {
      postsRef.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // Initially populate pings
    getAllPings();
  }, []);

  async function getAllPings() {
    try {
      const data = await getPings();
      setPosts(data);
      setTimeout(() => {
        setLoading(false);
      }, 800);
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
    executeScroll();
  };

  return (
    <>
      {error ?? null}
      {loading ? (
        <FeedLoading />
      ) : (
        <Posts postsRef={postsRef} pullToRefresh={getAllPings}>
          {posts.map((post: Ping) => (
            <Post text={post.text} date={post.date} />
          ))}
        </Posts>
      )}
      <SwipeableForm onSubmit={handleCreatePing} />
    </>
  );
}
