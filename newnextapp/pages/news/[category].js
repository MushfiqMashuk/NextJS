export default function CategorizedNews({ articles, category }) {
  return (
    <>
      <h1>{category} Category News:</h1>
      <hr />
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.title} {article.title}
          </h2>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;
  console.log(req.headers.cookie);
  console.log(params);
  console.log(query);
  res.setHeader("Set-Cookie", ["name: Mashuk", "age: 45"]);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
