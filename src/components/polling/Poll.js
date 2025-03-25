import { useEffect, useRef, useState } from "react";

const Poll = () => {
  const pollRef = useRef(null);
  const [votes, setVotes] = useState({ React: 5, Vue: 3, Angular: 2 });

  useEffect(() => {
    const pollElement = pollRef.current;

    // Update the Web Component when votes change
    if (pollElement) {
      pollElement.setAttribute("votes", JSON.stringify(votes));
    }

    // Listen for votes from the Web Component
    const handleVote = (event) => {
      const option = event.detail.option;
      setVotes((prev) => ({ ...prev, [option]: (prev[option] || 0) + 1 }));
    };

    pollElement?.addEventListener("vote-cast", handleVote);

    return () => {
      pollElement?.removeEventListener("vote-cast", handleVote);
    };
  }, [votes]);

  return (
    <live-poll
      ref={pollRef}
      question="Which is the best JS framework?"
      options={JSON.stringify(["React", "Vue", "Angular"])}
    ></live-poll>
  );
};

export default Poll;
