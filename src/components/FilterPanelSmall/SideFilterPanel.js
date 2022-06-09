import React from "react"
import './index.scss'
import { FILTER_CATEGORIES } from '../../utils/constants'
import SideFilterCategory from './SideFilterCategory';
import { Stack, Button} from '@mui/material';


const FilterPanel = ({open,onClose}) => {
  if(!open) return null;
  const categories = FILTER_CATEGORIES;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className='SideFilterPanel'>
      <div className="SideFilterPanel-top">
        <p>filter by</p>
        <Button onClick={onClose}>Close</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <Stack
          className='SideFilterPanel-categories-list'
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}>
          {categories.map((category) => (
            <SideFilterCategory key={category.id} category={category} />
          ))}
        </Stack>
        <div className="SideFilterPanel-filter-btns">
          <Button variant="outline-primary">reset</Button>
          <Button type='submit'>submit</Button>
        </div>
      </form>
    </div>
  );
}

export default FilterPanel