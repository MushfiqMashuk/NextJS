import { useRouter } from "next/router";

export default function SinglePost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   const paths = data.map((post) => {
//     return {
//       params: { postId: `${post.id}` },
//     };
//   });

//   return {
//     // paths: [
//     //   {
//     //     params: { postId: "1" },
//     //   },
//     //   {
//     //     params: { postId: "2" },
//     //   },
//     //   {
//     //     params: { postId: "3" },
//     //   },
//     // ],
//     // fallback: false,
//     paths,
//     fallback: false,
//   };
// }

// Fallback set to false -> a path do not mentioned in the getStaticPaths will result an 404 page.
// fallback set to true -> Next will serve a Fallback page and concurrently generate the desired page in the background, then serve the page
// Fallback set to blocking -> works as true but there is no fallback state in between.

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  console.log("Context is :", context);
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await res.json();

  // Returning notFound set to true helps Next.js to serve the 404 page.

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
