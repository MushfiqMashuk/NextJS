import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getDashboardData() {
      try {
        const response = await fetch("http://localhost:4000/dashboard");
        const dashboardData = await response.json();

        setData(dashboardData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getDashboardData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>Total Posts: {data.post}</h3>
      <h3>Total Likes: {data.likes}</h3>
      <h3>Total Users: {data.users}</h3>
      <h3>Total Followers: {data.followers}</h3>
    </div>
  );
}
