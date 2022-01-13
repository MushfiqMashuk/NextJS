import { useRouter } from "next/router";
export default function AllComments() {
  const { userId } = useRouter().query;
  return <h1>All Comments of {userId} User</h1>;
}
