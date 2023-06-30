import Filter from "./filter";

const Search = () => {
  return (
    <div className="absolute -bottom-8 h-16 w-full">
      <div className=" w-[80%] mx-auto px-8 bg-white">
        <Filter>
          <input className="h-16 w-full" />
        </Filter>
      </div>
    </div>
  );
}

export default Search