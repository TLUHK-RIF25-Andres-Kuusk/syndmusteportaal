
import type { EventItem } from "../types/event";
import { Link } from "react-router";

type EventCardProps = {
  event: EventItem;
  now: number;
};

export const EventCard = ({ event, now }: EventCardProps) => {
  const eventTime = new Date(event.startsAt).toLocaleString("et-EE");
  const isPast = new Date(event.startsAt).getTime() < now;

  return (
    <article className={`event-card ${isPast ? "is-past" : ""}`}>

      {event.imageUrl && (
        <img
          className="event-card__image"
          src={event.imageUrl}
          alt={`Filmi „${event.title}” illustratsioon`}
          loading="lazy"
        />
      )}

      <h3>
  <Link to={`/sundmused/${event.id}`}>
    {event.title}
  </Link>
</h3>

      {isPast && <span className="past-label">Möödunud</span>}

      <p>{event.description}</p>

      <p>
        <strong>Aeg:</strong> {eventTime}
      </p>

      <p className="location">
        <strong>Koht: </strong>
        {event.location}
      </p>

      <div className="tags">
        {event.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </span>
        ))}
      </div>
    </article>
  );
};
