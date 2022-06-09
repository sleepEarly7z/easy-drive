import React from "react"
import './index.scss'
import { FILTER_CATEGORIES } from '../../utils/constants'
import FilterCategory from './FilterCategory';
import { Stack, Button} from '@mui/material';


const FilterPanel = () => {
  const categories = FILTER_CATEGORIES;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className='FilterPanel'>
      <div className="top">
        <p>filter by</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Stack
          className='categories-list'
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}>
          {categories.map((category) => (
            <FilterCategory key={category.id} category={category} />
          ))}
        </Stack>
        <div className="filter-btns">
          <Button variant="outline-primary">reset</Button>
          <Button type='submit'>submit</Button>
        </div>
      </form>
    </div>
  );
}

export default FilterPanel