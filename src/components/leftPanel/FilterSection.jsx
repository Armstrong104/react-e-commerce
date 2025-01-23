import { categories } from '../../data';
import { useFilter } from '../../hooks';

export const FilterSection = () => {
  const { addCategoryToFilter, isCategorySelected, removeCategoryFromFilter,clearFilter } = useFilter();

  return (
    <div className="flex flex-col gap-4 my-4">
      <div>
        {categories.map((category) => (
          <button
            onClick={() =>
              isCategorySelected(category)
                ? removeCategoryFromFilter(category)
                : addCategoryToFilter(category)
            }
            className={`${
              isCategorySelected(category)
                ? 'text-amber-500 font-semibold'
                : 'text-gray-800 hover:text-amber-500'
            } py-2 px-4 rounded mr-2`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={() => clearFilter(categories)}
          className="text-red-500 border border-gray-200 hover:border-red-500 font-bold py-2 px-4 rounded-lg"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};
