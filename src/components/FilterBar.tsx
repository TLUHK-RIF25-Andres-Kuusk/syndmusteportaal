
type FilterBarProps = {
  search: string;
  selectedTags: string[];
  onlyFuture: boolean;
  tags: string[];
  onSearchChange: (value: string) => void;
  onTagToggle: (tag: string) => void;
  onClearTags: () => void;
  onOnlyFutureChange: (value: boolean) => void;
};

export const FilterBar = ({
  search,
  selectedTags,
  onlyFuture,
  tags,
  onSearchChange,
  onTagToggle,
  onClearTags,
  onOnlyFutureChange,
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Otsi sündmust"
        aria-label="Otsi sündmust"
      />

      <label>
        <input
          type="checkbox"
          checked={onlyFuture}
          onChange={(e) =>
            onOnlyFutureChange(e.target.checked)
          }
        />
        Ainult tulevased
      </label>

      <button
        type="button"
        className={
          selectedTags.length === 0 ? "is-selected" : ""
        }
        aria-pressed={selectedTags.length === 0}
        onClick={onClearTags}
      >
        Kõik
      </button>

      {tags.map((tag) => (
        <button
          type="button"
          key={tag}
          className={
            selectedTags.includes(tag) ? "is-selected" : ""
          }
          aria-pressed={selectedTags.includes(tag)}
          onClick={() => onTagToggle(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
