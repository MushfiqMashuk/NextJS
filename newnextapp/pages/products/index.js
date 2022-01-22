export default function GetAllProducts({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.id} {product.title} Price {product.price}
          </h2>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
