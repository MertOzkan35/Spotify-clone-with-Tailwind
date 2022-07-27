import Categories from "../Data/Categories";

function Category({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative "
    >
      <div className="absolute inset-0  overflow-hidden">
        <h3 className="p-4 text-2xl  tracking-tighter font-semibold ">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className=" absolute bottom-0 right-0 w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%]  translate-y-[-2%]"
        />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div>
      <div>
        <h1 className=" text-2xl font-semibold pb-2  ">Hepsine göz at</h1>

        <div className="grid  grid-cols-5 gap-x-6 ">
          {Categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </div>
      <div>
        <h1 className=" text-2xl font-semibold pb-10  "></h1>

        <div className="grid  grid-cols-5 gap-x-6 ">
          {Categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </div>
      <div>
        <h1 className=" text-2xl font-semibold pb-10  "></h1>

        <div className="grid  grid-cols-5 gap-x-6 ">
          {Categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </div>
      <div>
        <h1 className=" text-2xl font-semibold pb-10  "></h1>

        <div className="grid  grid-cols-5 gap-x-6 ">
          {Categories.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
