import { useDispatch } from 'react-redux';

import { getFiltersAsync } from '../../redux/instructors/thunks';

import Grid from '@mui/material/Grid';

import FilterSortPanel from './FilterSortPanel';
import ResultList from './ResultList';

const FilterContainer = () => {

    const dispatch = useDispatch()
    const instructors = useSelector(state => state.instructors.filter);

    useEffect(() => {
        dispatch(getFiltersAsync());
    }, []);

    // states
    const [filterBy, setFilterBy] = useState([]);
    const [sortBy, setSortBy] = useState('');

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <FilterSortPanel
                    setFilterBy={setFilterBy}
                    setSortBy={setSortBy}
                />
            </Grid>

            <Grid item xs={8}>
                <ResultList />
            </Grid>

        </Grid>

    );
}

export default FilterContainer