export default function Filter({ searchTerm, handleSearchFilter }) {
  return (
    <>
      Search:
      <input type="search" value={searchTerm} onChange={handleSearchFilter} />
    </>
  );
}
