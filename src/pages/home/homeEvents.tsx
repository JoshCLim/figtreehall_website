import { useEffect, useState } from "react";

import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import { EventType, Event } from "../../components/event";

function HomeEvents() {
  const [eventsList, setEventsList] = useState<EventType[] | null>(null);
  const eventsRef = collection(db, "events");

  // gets events from firebase and sets `eventsList` to the list
  const getEvents = async () => {
    const data = await getDocs(eventsRef);
    setEventsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as EventType[]
    );
  };

  // when the component renders, get all the events
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      {eventsList?.map((event) => (
        <Event event={event} />
      ))}
    </>
  );
}

export { HomeEvents };
