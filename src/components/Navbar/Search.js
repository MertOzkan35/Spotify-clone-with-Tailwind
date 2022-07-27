import { Icon } from "../../Icons";

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label className="w-10 h-10 text-black flex items-center justify-center absolute top-0 left-0 ">
        <Icon size={24} name="search" />
      </label>
      <input
        type="text"
        className=" h-10  bg-white rounded-3xl pl-10 text-sm w-96 text-black font-semibold"
        placeholder="Sanatçılar, şarkılar ve podcastler"
      />
    </div>
  );
}

export default Search;
