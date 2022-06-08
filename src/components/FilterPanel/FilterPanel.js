import './index.scss'
import { FILTER_CATEGORIES } from '../../utils/constants'
import FilterCategory from './FilterCategory';

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
        <button>Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {categories.map((category) => (
            <FilterCategory key={category.id} category={category} />
          ))}
        </ul>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default FilterPanel