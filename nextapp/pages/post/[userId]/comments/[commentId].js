import { useRouter } from "next/router";

export default function UserComment() {
  const router = useRouter();
  const { userId, commentId } = router.query;
  const { ...params } = router.query;
  console.log(router.query);
  return (
    <h1>
      This is {userId} No. user's {commentId} no. comment
    </h1>
  );
}
