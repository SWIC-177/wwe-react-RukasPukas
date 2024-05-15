export default function Search({ handleSearch }) {
  return (
    <div className="mb-4">
      <label className="sr-only" htmlFor="search">
        Search champions
      </label>
      <input
        autoFocus
        onInput={handleSearch}
        className="p2 rounded border border-gray-300"
        id="search"
        placeholder="Search champions..."
        type="text"
      />
    </div>
  );
}
