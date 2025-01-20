import { categories } from '../../data';

export const FilterSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
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
        <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
          Clear Filters
        </button>
      </div>
    </div>
  );
};
