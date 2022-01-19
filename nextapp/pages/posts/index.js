import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/post?postId=${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
