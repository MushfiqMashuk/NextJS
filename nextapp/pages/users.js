import Link from "next/link";
import User from "../components/user";

export default function Users(props) {
  const { users } = props;
  return (
    <>
      <Link href="/comments">
        <h2>Comments Page</h2>
      </Link>
      {users.map((user) => (
        <User user={user} key={user.id}/>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await result.json();

  return {
    props: {
      users: data,
    },
  };
}


// getStaticProps only runs once at the build time in Production mode. But in the development mode it will run on every request. 