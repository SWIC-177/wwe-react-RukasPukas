export default function Search() {
  return (
    <div className="mb-4">
      <label className="sr-only" htmlFor="search">
        Search champions
      </label>
      <input
        autoFocus
        onInput={(e) => {
          console.log(e.target.value);
        }}
        className="p2 rounded border border-gray-300"
        id="search"
        placeholder="Search champions..."
        type="text"
      />
    </div>
  );
}
