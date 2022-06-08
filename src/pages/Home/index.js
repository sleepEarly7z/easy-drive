import './index.scss'
import Slider from '../../components/Slider'
import FilterPanel from '../../components/FilterPanel/FilterPanel'
import FilterList from '../../components/FilterList'
import ReviewForm from '../../components/ReviewForm'
import ReviewList from '../../components/ReviewList'

const Home = () => {
    return (
        <>
            <div className='Home'>
                <h1>Home</h1>
                {/* TODO: create a Search bar component */}
                <Slider />
                <FilterPanel />
                <FilterList />
                {/* TODO: can write ReviewForm and ReviewList into one component or not */}
                <ReviewForm />
                <ReviewList />
            </div>
        </>
    )
}

export default Home