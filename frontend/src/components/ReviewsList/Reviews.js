import React, { useEffect, useState } from 'react'
import {
    Paper,
    Grid,
    makeStyles,
    TableBody,
    TableRow,
    TableCell,
    Toolbar,
    InputAdornment,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

// import * as reviewService from './reviewService'
import ReviewService from '../../redux/reviews/service'
import Controls from './controls/Controls'
import useTable from './useTable'
import Popup from './Popup'
import ReviewForm from './ReviewForm'
import RatingStar from './RatingStar'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'

import {
    addReviewAsync,
    getReviewsByInstructorIdAsync,
    updateReviewAsync,
} from '../../redux/reviews/thunks'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    pageContent: {
        padding: theme.spacing(3),
    },
    searchInput: {
        width: '75%',
    },
    newButton: {
        position: 'absolute',
        right: '10px',
    },
}))

const headCells = [
    { id: 'fullName', label: 'Student Name', width: 300 },
    { id: 'rating', label: 'Rating', width: 200 },
    { id: 'comment', label: 'Comment', width: 600 },
    // { id: 'classtype', label: 'Class Type' },
    { id: 'reviewDate', label: 'Time', width: 300 },
    // { id: 'actions', label: 'Actions', disableSorting: true },
]

const Reviews = ({ idType }) => {
    const dispatch = useDispatch()
    const params = useParams()
    const classes = useStyles()
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([]);
    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return items
        },
    })
    const [openPopup, setOpenPopup] = useState(false)
    
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    } = useTable(records, headCells, filterFn)

    const handleSearch = (e) => {
        let target = e.target
        setFilterFn({
            fn: (items) => {
                if (target.value === '') return items
                else
                    return items.filter((x) =>
                        x.fullName
                            .toLowerCase()
                            .includes(target.value.toLowerCase()),
                    )
            },
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id === 0) {
            console.log('insert employee: ' + employee)
            // reviewService.insertReview(employee)
            dispatch(addReviewAsync(employee))
        } else {
            dispatch(updateReviewAsync(employee))
        }
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        // setRecords(reviewService.getAllReviews())
        // setRecords(dispatch(getReviewsByInstructorIdAsync(params.instructorId)))
    }

    const openInPopup = (item) => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const id = params.instructorId

    useEffect(() => {
        const getReviews = async () => {
            const reviews = await ReviewService.getReviewsByUserId(id, idType);
            setRecords(reviews);
        }
        getReviews();
    }, [])

    return (
        <>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search Reviews"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleSearch}
                    />
                    {/* <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Controls.Select
                                name="ratingId"
                                label="Rating"
                                // onChange={handleInputChange}
                                options={reviewService.getRatingCollection()}
                            />
                        </Grid>
                    </Grid> */}
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {
                            setOpenPopup(true)
                            setRecordForEdit(null)
                        }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((item) => (
                            <TableRow key={item._id}>
                                <TableCell width={headCells[0].width}>
                                    {/* {item.fullName} */}
                                    {item.student_id}
                                </TableCell>
                                <TableCell width={headCells[1].width}>
                                    <RatingStar average={item.rating} />
                                </TableCell>
                                <TableCell width={headCells[2].width}>
                                    {item.comment_content}
                                </TableCell>
                                {/* <TableCell>
										{item.mobile}
									</TableCell> */}
                                {/* <TableCell>{item.classtype}</TableCell> */}
                                <TableCell width={headCells[3].width}>
                                    {item.createdAt}
                                </TableCell>
                                {/* <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                        onClick={() => {
                                            openInPopup(item)
                                        }}
                                    >
                                        <EditOutlinedIcon fontSize="small" />
                                    </Controls.ActionButton>
                                    <Controls.ActionButton color="secondary">
                                        <CloseIcon fontSize="small" />
                                    </Controls.ActionButton>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="Review Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ReviewForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
        </>
    )
}

export default Reviews
