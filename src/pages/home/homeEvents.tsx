import { useEffect, useState } from "react";

import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import { Grid } from "@mui/material";

import { EventType, Event } from "../../components/event";

function HomeEvents() {
  const [eventsList, setEventsList] = useState<EventType[] | null>(null);
  const eventsRef = collection(db, "events");

  // gets events from firebase and sets `eventsList` to the list
  const getEvents = async () => {
    const data = await getDocs(eventsRef);

    const events = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as EventType[];

    setEventsList(
      events
        .filter((event) => {
          return event.time.toDate().getTime() > Date.now();
        })
        .sort((event1: EventType, event2: EventType) => {
          // sort in order of time
          return (
            event1.time.toDate().getTime() - event2.time.toDate().getTime()
          );
        })
        .slice(0, 3) // only show the top 3 events
    );
  };

  // when the component renders, get all the events
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      alignItems="stretch"
      className="HomeEvents"
      flexWrap="nowrap"
      overflow="auto"
      whiteSpace="nowrap"
    >
      {eventsList?.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </Grid>
  );
}

export { HomeEvents };
