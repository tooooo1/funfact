"use client";

import { use, useOptimistic, useRef, useState } from "react";

async function updateLikeOnServer() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

async function updateDislikeOnServer() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export const FunFact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [fact, setFact] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const fetchNewFact = async () => {
    try {
      const response = await fetch("/api/fun-fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Failed to fetch new fact:", error);
    }
  };

  const [optimisticLikes, addOptimisticLike] = useOptimistic<number, number>(
    likes,
    (currentLikes, optimisticValue) => currentLikes + optimisticValue
  );

  const [optimisticDislikes, addOptimisticDislike] = useOptimistic<
    number,
    number
  >(
    dislikes,
    (currentDislikes, optimisticValue) => currentDislikes + optimisticValue
  );

  const handleAction = async (formData: FormData) => {
    const actionType = formData.get("action");

    if (actionType === "like") {
      addOptimisticLike(1);
      try {
        use(updateLikeOnServer());
        setLikes((prevLikes) => prevLikes + 1);
      } catch (error) {
        console.error("Failed to update likes:", error);
      }
    } else if (actionType === "dislike") {
      addOptimisticDislike(1);
      try {
        use(updateDislikeOnServer());
        setDislikes((prevDislikes) => prevDislikes + 1);
      } catch (error) {
        console.error("Failed to update dislikes:", error);
      }
    }
  };

  return (
    <form action={handleAction} ref={formRef}>
      <h2>Fun Fact</h2>
      <p>{fact}</p>
      <button type="button" onClick={fetchNewFact}>
        New Fact
      </button>
      <button name="action" value="like">
        Like
      </button>
      <button name="action" value="dislike">
        Dislike
      </button>
      <p>Likes: {optimisticLikes}</p>
      <p>Dislikes: {optimisticDislikes}</p>
    </form>
  );
};

export default FunFact;
