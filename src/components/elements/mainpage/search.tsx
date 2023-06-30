import { useState } from "react";
import Crossbar from "../../UI/crossbar";
import DisplayJobs from "./displayJobs";

type FilterItemsProps = {
  searchfields: string[];
  handleRemoveField: (item: string) => void;
};
const FilterItems = ({ searchfields, handleRemoveField }: FilterItemsProps) => {
  return (
    <>
      {searchfields.map((searchfield, id) => {
        return (
          <div key={id} className="flex mr-2 bg-[#e3f5f5] rounded-sm">
            <span className="px-1 whitespace-nowrap font-semibold text-[#64babb]">
              {searchfield}
            </span>
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
    <>
      <div className="absolute -top-8 h-16 w-full">
        <div className=" w-[70%] mx-auto px-8 bg-white shadow-md rounded-md">
          <div className="flex items-center">
            <FilterItems
              searchfields={searchfields}
              handleRemoveField={handleRemoveField}
            />
            <input
              className="h-16 w-full outline-none text-[#64babb]"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={handleKeypress}
              value={search}
              placeholder={!searchfields.length ? "Search Jobs.." : ""}
            />
            {searchfields.length ? (
              <button
                className="ml-2 font-semibold text-[#64babb] text-sm"
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
      <DisplayJobs searchfields={searchfields} />
    </>
  );
};

export default Search;
