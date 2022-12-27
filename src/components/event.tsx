import {
  MoneySquare as MoneySquareIcon,
  Pin as PinIcon,
  ClockOutline as ClockIcon,
  ProfileCircled as ProfileIcon,
} from "iconoir-react";

export interface EventType {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  cost: string;
  location: string;
  time: number;
  organiser: string;
}

interface EventPropsType {
  event: EventType;
}

function Event(props: EventPropsType) {
  const event: EventType = props.event;

  return (
    <div className="Event">
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <img src={event.heroImage} />
      <p>
        <MoneySquareIcon />
        {event.cost}
      </p>
      <p>
        <PinIcon /> {event.location}
      </p>
      <p>
        <ClockIcon /> {event.time}
      </p>
      <p>
        <ProfileIcon /> {event.organiser}
      </p>
    </div>
  );
}

export { Event };
