import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} Price: {product.price}
      </h2>
      <hr />
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log("Regenerating...");
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
    revalidate: 60,
  };
}
