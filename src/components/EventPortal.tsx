import { useCallback, useState } from "react";
import type { EventItem } from "../types/event";

import { PageHeader } from "./PageHeader";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { FilterBar } from "./FilterBar";
import { EventList } from "./EventList";
import { Panel } from "./Panel";
import { EscapeListener } from "./EscapeListener";
import { useTheme } from "../hooks/useTheme";

const NOW = Date.now();

type EventPortalProps = {
  events: EventItem[];
};

export const EventPortal = ({ events }: EventPortalProps) => {
  const { theme } = useTheme();

  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [onlyFuture, setOnlyFuture] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag]
    );
  };

  const resetFilters = useCallback(() => {
    setSearch("");
    setSelectedTags([]);
    setOnlyFuture(false);
  }, []);

  const normalizedSearch = search.trim().toLowerCase();

  const tags = [
    ...new Set(events.flatMap((event) => event.tags)),
  ].sort();

  const filteredEvents = events
    .filter((event) =>
      event.title.toLowerCase().includes(normalizedSearch)
    )
    .filter(
      (event) =>
        selectedTags.length === 0 ||
        selectedTags.some((tag) => event.tags.includes(tag))
    )
    .filter(
      (event) =>
        !onlyFuture ||
        new Date(event.startsAt).getTime() >= NOW
    )
    .sort(
      (a, b) =>
        new Date(a.startsAt).getTime() -
        new Date(b.startsAt).getTime()
    );

  return (
    <div className={`app theme-${theme}`}>
      <header>
        <PageHeader />
        <ThemeToggle />
      </header>

      <main>
        <EscapeListener onReset={resetFilters} />

        <FilterBar
          search={search}
          selectedTags={selectedTags}
          onlyFuture={onlyFuture}
          tags={tags}
          onSearchChange={setSearch}
          onTagToggle={toggleTag}
          onClearTags={() => setSelectedTags([])}
          onOnlyFutureChange={setOnlyFuture}
        />

        <Panel title={`Kava (${filteredEvents.length} sündmust)`}>
          <EventList events={filteredEvents} now={NOW} />
        </Panel>
      </main>

      <Footer organization="Haapsalu Filmiklubi" />
    </div>
  );
};
