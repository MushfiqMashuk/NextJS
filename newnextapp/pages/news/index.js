export default function NewsList({ newsList }) {
  return (
    <>
      {newsList.map((news) => (
        <div key={news.id}>
          <h2>
            {news.title} {news.description}
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
}

// * Can not be run in a component, should be in a page.
// * Server side code can be written in this function

export async function getServerSideProps() {
  console.log("Refetching...");
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      newsList: data,
    },
  };
}
