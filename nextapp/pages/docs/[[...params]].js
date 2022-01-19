//This is called a catch all route

import Link from "next/link";
import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();

  const { params = [] } = router.query;

  console.log(router.query);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for {params[0]} {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for {params[0]}</h1>;
  }

  return (
    <>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <h1>Doc Section</h1>
    </>
  );
}
