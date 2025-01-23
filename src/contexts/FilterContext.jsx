import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(() => {
    const filters = localStorage.getItem('filter');
    return filters ? JSON.parse(filters) : [];
  });

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  const addCategoryToFilter = (category) => {
    setFilter((filters) => {
      if (!filters.includes(category)) {
        return [...filters, category];
      }
      return filters;
    });
  };

  const isCategorySelected = (category) => {
    return filter.includes(category);
  };

  const removeCategoryFromFilter = (category) => {
    setFilter((filters) => filters.filter((item) => item !== category));
  };

  const clearFilter = (categories) => {
    setFilter((filters) => {
      return filters.filter((item) => item === categories);
    });
  };

  const filterProducts = (products) => {
    if (!filter.length) {
      return products;
    }
    return products.filter((product) =>
      product.categories.some((category) => filter.includes(category))
    );
  };

  return (
    <FilterContext.Provider
      value={{
        filter,
        addCategoryToFilter,
        isCategorySelected,
        removeCategoryFromFilter,
        clearFilter,
        filterProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
