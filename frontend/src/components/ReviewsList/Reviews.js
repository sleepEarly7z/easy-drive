import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {
    Paper,
    makeStyles,
    TableBody,
    TableRow,
    TableCell,
    Toolbar,
    InputAdornment,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import Notification from './Notification'
import ConfirmDialog from './ConfirmDialog'

import ReviewService from '../../redux/reviews/service'
import Controls from './controls/Controls'
import useTable from './useTable'
import Popup from './Popup'
import ReviewForm from './ReviewForm'
import RatingStar from './RatingStar'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
    addReviewAsync,
    updateReviewAsync,
    deleteReviewAsync,
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

const Reviews = ({ idType, page }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const classes = useStyles()

    const id =
        idType === 'instructorId' ? params.instructorId : params.studentId
    const { user } = useSelector((state) => state.auth)

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])

    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return items
        },
    })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: '',
        subTitle: '',
    })

    const headCells =
        page === 'reviewPage'
            ? [
                { id: 'fullName', label: 'Student Name', width: 300 },
                { id: 'rating', label: 'Rating', width: 200 },
                { id: 'comment', label: 'Comment', width: 600 },
                { id: 'reviewDate', label: 'Time', width: 300 },
            ]
            : [
                { id: 'fullName', label: 'Instructor Name', width: 300 },
                { id: 'rating', label: 'Rating', width: 200 },
                { id: 'comment', label: 'Comment', width: 600 },
                { id: 'reviewDate', label: 'Time', width: 300 },
                { id: 'actions', label: 'Actions', disableSorting: true },
            ]

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
                    return items.filter(
                        (x) => x.fullName,
                        // TODO: convert id to student name
                        // .toLowerCase()
                        // .includes(target.value.toLowerCase()),
                    )
            },
        })
    }

    const changeRatingValue = (review) => {
        switch (review.ratingStar) {
            case 'onestar':
                review.rating = 1
                return
            case 'twostars':
                review.rating = 2
                return
            case 'threestars':
                review.rating = 3
                return
            case 'fourstars':
                review.rating = 4
                return
            case 'fivestars':
                review.rating = 5
                return
            default:
                return
        }
    }

    const addOrEdit = (review, resetForm) => {
        changeRatingValue(review)

        if (review.id === 0) {
            console.log('insert review: ' + review)
            dispatch(addReviewAsync(review))
        } else {
            dispatch(updateReviewAsync(review))
        }
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success',
        })
        // setRecords(reviewService.getAllReviews())
        // setRecords(dispatch(getReviewsByInstructorIdAsync(params.instructorId)))
    }

    const openInPopup = (item) => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        dispatch(deleteReviewAsync(id))
        // setRecords(employeeService.getAllEmployees())
        // const reviews = ReviewService.getReviewsByUserId(id, idType)
        // setRecords(reviews)
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error',
        })
    }

    useEffect(() => {
        const getReviews = async () => {
            const reviews = await ReviewService.getReviewsByUserId(id, idType)
            setRecords(reviews)
        }
        getReviews()
    }, [])

    return (
        <>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.SearchInput
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
                    {user && user.data.role === 'student' ? (
                        <Controls.Button
                            text="Add New"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            className={classes.newButton}
                            onClick={() => {
                                if (user.data.role === 'instructor') {
                                    toast.error(
                                        'Sorry, instructors cannot write reviews',
                                    )
                                } else {
                                    setOpenPopup(true)
                                    setRecordForEdit(null)
                                }
                            }}
                        />
                    ) : (
                        <></>
                    )}
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((item) => (
                            <TableRow key={item._id}>
                                <TableCell width={headCells[0].width}>
                                    {/* {item.fullName} */}
                                    {item.student_name}
                                </TableCell>
                                <TableCell width={headCells[1].width}>
                                    <RatingStar average={item.rating} />
                                </TableCell>
                                <TableCell width={headCells[2].width}>
                                    {item.comment_content}
                                </TableCell>
                                <TableCell width={headCells[3].width}>
                                    {
                                        new Intl.DateTimeFormat(['ban', 'id']).format(new Date(item.createdAt))
                                    }
                                </TableCell>
                                <TableCell>
                                    {page === 'profilePage' && (
                                        <>
                                            <Controls.ActionButton
                                                color="primary"
                                                onClick={() => {
                                                    openInPopup(item)
                                                }}
                                            >
                                                <EditOutlinedIcon fontSize="small" />
                                            </Controls.ActionButton>

                                            <Controls.ActionButton
                                                color="secondary"
                                                onClick={() => {
                                                    setConfirmDialog({
                                                        isOpen: true,
                                                        title: 'Are you sure to delete this record?',
                                                        subTitle:
                                                            "You can't undo this operation",
                                                        onConfirm: () => {
                                                            onDelete(item._id)
                                                        },
                                                    })
                                                }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </Controls.ActionButton>
                                        </>
                                    )}
                                </TableCell>
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
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}

export default Reviews
