import { useRouter } from "next/router";
import { useState } from "react";

export default function EventList({ eventList }) {
  const [filteredEvent, setFilteredEvent] = useState(eventList);
  const router = useRouter();
  let cat = [];

  for (const element of eventList) {
    if (!cat.includes(element.category)) {
      cat.push(element.category);
    }
  }

  const handleChange = async (e) => {
    const response = await fetch(
      `http://localhost:4000/events?category=${e.target.value}`
    );
    const data = await response.json();

    setFilteredEvent(data);
    router.push(`events?category=${e.target.value}`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <h2>List of events</h2>

      <select
        name="category"
        id="category"
        style={{ textTransform: "capitalize" }}
        defaultValue="Filter Events"
        // value={filterValue}
        onChange={handleChange}
      >
        <option disabled>Filter Events</option>
        {cat.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      {filteredEvent.map((event) => (
        <div key={event.id}>
          <h1>
            {event.id}
            {event.title} {event.date} | {event.category}
          </h1>
          <p>{event.description}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context; // {category: "international"}
  const { category } = query;

  const queryString = category ? `category=${category}` : '';

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
