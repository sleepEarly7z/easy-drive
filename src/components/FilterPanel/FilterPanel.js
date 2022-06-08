import './index.scss'
import { FILTER_CATEGORIES } from '../../utils/constants'
import FilterCategory from './FilterCategory';
import Button from 'react-bootstrap/Button';

const FilterPanel = () => {
  const categories = FILTER_CATEGORIES;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className='FilterPanel'>
      <div className="top">
        <h1>filter by</h1>
        <Button variant="outline-primary">reset</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {categories.map((category) => (
            <FilterCategory key={category.id} category={category} />
          ))}
        </ul>
        <Button type='submit'>submit</Button>
      </form>
    </div>
  );
}

export default FilterPanel