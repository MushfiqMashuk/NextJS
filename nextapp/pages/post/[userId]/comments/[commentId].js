import { useRouter } from "next/router";

export default function UserComment() {
  const { userId, commentId } = useRouter().query;
  console.log(useRouter().query.params);
  return (
    <h1>
      This is {userId} No. user's {commentId} no. comment
    </h1>
  );
}
