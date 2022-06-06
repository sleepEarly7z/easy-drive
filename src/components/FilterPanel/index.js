import './index.scss'
import { useState } from 'react'

const FilterPanel = () => {
  const categories = [
    {
      name: 'location',
      options: ['vancouver', 'richmond', 'burnaby']
    },
    {
      name: 'availability',
      options: ['7 a.m. to 12 p.m. ', '12 p.m. to 17 p.m. ', '17 p.m. to 22 p.m.']
    },
    {
      name: 'language',
      options: ['English', 'French', 'Mandarin', 'Cantonese', 'Korean']
    },
    {
      name: 'licence type',
      options: ['class 7', 'class 5', 'class 4']
    }
  ]

  const makeCategory = (categories) => {
    categories.forEach(category => {
      category.options = category.options.map((option, index) => (
        {
          id: category.category + '_' + index,
          type: 'radio',
          name: category.category,
          value: option
        }
      ));
    });
    return categories;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className='FilterPanel'>
      <h1>filter by</h1>
      <button>Reset</button>
      <form onSubmit={handleSubmit}>
        <ul>
          {
            makeCategory(categories).map((category) => (
              <li key={category.name}>
                <p>{category.name}</p>
                {category.options.map((option) => (
                  <>
                    <input key={option.id} {...option} />
                    <label htmlFor={option.id}>{option.value}</label>
                    <br />
                  </>
                ))}
              </li>))
          }
        </ul>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FilterPanel