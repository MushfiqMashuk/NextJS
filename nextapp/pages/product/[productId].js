import { useRouter } from "next/router";

export default function ProductDetails(context) {
  const router = useRouter();

  const productId = router.query.productId;

  console.log(context);
  return <h1>This is product {productId} page</h1>;
}
