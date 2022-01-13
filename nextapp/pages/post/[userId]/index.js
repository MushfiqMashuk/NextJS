import { useRouter } from "next/router";
export default function userPost() {
  const router = useRouter();
  const userId = router.query.userId;

  return <h1>Post of {userId} no. user</h1>;
}
