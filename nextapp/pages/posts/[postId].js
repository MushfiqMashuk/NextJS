export default function SinglePost({ post }) {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = res.json();

  return {
    props: {
      post: data,
    },
  };
}
