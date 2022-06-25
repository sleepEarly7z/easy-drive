import './index.scss'
import Slider from '../../components/Slider'
import FilterPanel from '../../components/FilterPanel/FilterPanel'
import FilterList from '../../components/FilterList'
import ShrinkedFilterPanel from '../../components/FilterPanelSmall/ShrinkedFilterPanel'
import FilterSearchBar from '../../components/FilterPanelSmall/FilterSearchBar'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFiltersAsync } from '../../redux/instructors/thunks'

const Explore = () => {
    const dispatch = useDispatch()
    const instructors = useSelector((state) => state.instructors.filter)

    useEffect(() => {
        dispatch(getFiltersAsync());
    }, []);
    return (
        <>
            <div className="Explore">
                {/* TODO: create a Search bar component */}
                <Slider />

                <div className="shrinkedFilterPanel">
                    <ShrinkedFilterPanel instructors={instructors} />
                    <FilterSearchBar />
                </div>
                <div className="filter-function-container">
                    <FilterPanel mainFilter={true} open={true} />
                    <FilterList instructors={instructors} />
                </div>
            </div>
        </>
    )
}

export default Explore
