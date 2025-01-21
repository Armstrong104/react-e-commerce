import { categories } from '../../data';

export const FilterSection = () => {
  return (
    <div className="flex flex-col gap-4 my-4">
      <div>
        {categories.map((category) => (
          <button
            className="text-gray-800  hover:text-amber-500 font-semibold py-2 px-4 rounded mr-2"
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <button className="text-red-500 border border-gray-200 hover:border-red-500 font-bold py-2 px-4 rounded-lg">
          Clear Filters
        </button>
      </div>
    </div>
  );
};
