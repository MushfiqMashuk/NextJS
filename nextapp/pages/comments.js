export default function GetAllComments({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=3 "
  );
  const data = await res.json();

  console.log(data);

  return {
    props: {
      comments: data,
    },
  };
}
