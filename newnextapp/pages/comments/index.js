import { useState } from "react";

export default function getAllComments() {
  const [comments, setComments] = useState([]);
  const handleClick = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json();

    setComments(data);
  };
  return (
    <>
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
