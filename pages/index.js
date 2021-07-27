import Layout from "@/Components/Layout/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/Components/EventItem/EventItem";
import Link from "next/link";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const res = await fetch(API_URL + "/api/events");
  const events = await res.json();
  events.length = 3;
  return { props: { events }, revalidate: 1 };
}
