import useSWR from "swr";

async function fetcher() {
  console.log("Refetching...");
  const response = await fetch("http://localhost:4000/dashboard");
  const dashboardData = await response.json();

  return dashboardData;
}

export default function Dashboard() {
  // first argument is an unique key. 2nd argument is a fetcher function

  const { data, error } = useSWR("dashboard", fetcher);

  if (!error && !data) return <h2>Loading...</h2>;

  if (error) return <h2>There was an error!</h2>;

  return (
    <div>
      <h2>Post: {data.post}</h2>
      <h2>User: {data.users}</h2>
      <h2>Likes: {data.likes}</h2>
    </div>
  );
}
