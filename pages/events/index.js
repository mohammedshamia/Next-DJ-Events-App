import Layout from "@/Components/Layout/Layout";
import EventItem from "@/Components/EventItem/EventItem";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const res = await fetch(API_URL + "/api/events");
  const events = await res.json();
  return { props: { events }, revalidate: 1 };
}
