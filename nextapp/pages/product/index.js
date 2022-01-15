import Link from "next/link";
import Router from "next/router";

export default function Products({ productId = 24 }) {
  return (
    <>
      <Link href={`/product/${productId}`}>
        <h1 style={{ cursor: "pointer" }}>{`Product ${productId}`}</h1>
      </Link>
      {/* replace prop will empty the routing stack and replace this route*/}
      <Link href={`/product/${productId + 1}`} replace>
        <h1 style={{ cursor: "pointer" }}>{`Product ${productId + 1}`}</h1>
      </Link>

      <Link href={`/product/${productId + 2}`}>
        <h1 style={{ cursor: "pointer" }}>{`Product ${productId + 2}`}</h1>
      </Link>

      <button onClick={() => Router.push("/")}>Place Order</button>
    </>
  );
}
