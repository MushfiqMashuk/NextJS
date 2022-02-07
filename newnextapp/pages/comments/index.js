import { useState } from "react";

export default function getAllComments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleClick = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data);

    console.log(newComment);
  };

  const postComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment: newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();

    setNewComment("");

    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={postComment}>Write a Review</button>
      <button onClick={handleClick}>Get All Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>
            {comment.id} | {comment.text}
          </h3>
        </div>
      ))}
    </>
  );
}

// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3000/api/comments");
//   const data = await response.json();

//   console.log(data);

//   return {
//     props: {
//       comments: data,
//     },
//   };
// }
