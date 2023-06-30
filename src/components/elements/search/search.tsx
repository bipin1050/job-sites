import { useState } from "react";
import Crossbar from "../../UI/crossbar";


type FilterItemsProps = {
  searchfields: string[];
  handleRemoveField: (item: string) => void;
};
const FilterItems = ({ searchfields, handleRemoveField }: FilterItemsProps) => {
  return (
    <>
      {searchfields.map((searchfield, id) => {
        return (
          <div className="flex mr-2 bg-[#dbf6f6] rounded-sm">
            <span className="px-1 whitespace-nowrap">{searchfield}</span>
            <button
              onClick={(event) => {
                handleRemoveField(searchfield);
              }}>
              <Crossbar />
            </button>
          </div>
        );
      })}
    </>
  );
};

const Search = () => {

  const [search, setSearch] = useState("");
  const [searchfields, setSearchfields] = useState<string[]>([]);

  const handleKeypress = (e: React.KeyboardEvent) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      setSearchfields((searchfields) => [...searchfields, search]);
      setSearch("");
    }
  };

  const handleRemoveField = (itemToRemove: String) => {
    setSearchfields((prevSearchfields) =>
      prevSearchfields.filter((item) => item !== itemToRemove)
    );
  };


  return (
    <div className="absolute -top-8 h-16 w-full">
      <div className=" w-[80%] mx-auto px-8 bg-white">
        <div className="flex items-center">
          <FilterItems
            searchfields={searchfields}
            handleRemoveField={handleRemoveField}
          />
          <input
            className="h-16 w-full outline-none"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={handleKeypress}
            value={search}
            placeholder={!searchfields.length ? "Search Jobs.." : ""}
          />
          {searchfields.length ? (
            <button
              className="ml-2"
              onClick={() => {
                setSearchfields([]);
              }}>
              Clear
            </button>
          ) : (
            <button></button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search