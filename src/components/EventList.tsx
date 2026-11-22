import { EventCard } from "./EventCard";
import type { EventItem } from "../types/event";

type EventListProps = {
  events: EventItem[];
  now: number;
};

export const EventList = ({ events, now }: EventListProps) => {
  if (events.length === 0) {
    return <p>Ühtegi sündmust ei leitud.</p>;
  }

  return (
    <div className="cards">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          now={now}
        />
      ))}
    </div>
  );
};