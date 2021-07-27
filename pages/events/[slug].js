import Layout from "@/Components/Layout/Layout";
import { API_URL } from "@/config/index";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }) {
  const router = useRouter();
  const deleteEvent = (e) => {
    console.log("delete");
  };
  return (
    <Layout>
      <h1>My Event</h1>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <div onClick={router.back}>
          <a className={styles.back}>{"<"} Go Back</a>
        </div>
      </div>
    </Layout>
  );
}
/*

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
  };
}
*/
// or

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((i) => ({ params: { slug: i.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
      revalidate: 1,
    },
  };
}
