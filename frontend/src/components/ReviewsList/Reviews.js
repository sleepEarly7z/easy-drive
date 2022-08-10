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
import ConfirmDialog from './ConfirmDialog'

import ReviewService from '../../redux/reviews/service'
import Controls from './controls/Controls'
import useTable from './useTable'
import Popup from './Popup'
import ReviewForm from './ReviewForm'
import RatingStar from './RatingStar'

import { useDispatch, useSelector } from 'react-redux'

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
    searchInputFullWidth: {
        width: '100%',
    },
    newButton: {
        position: 'absolute',
        right: '10px',
    },
}))

const Reviews = ({ idType, page }) => {
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
                else {
                    return items.filter((x) =>
                        x.student_name
                            ? x.student_name
                                .toLowerCase()
                                .includes(target.value.toLowerCase())
                            : x.instructor_name
                                .toLowerCase()
                                .includes(target.value.toLowerCase()),
                    )
                }
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
            dispatch(addReviewAsync(review))
        } else {
            dispatch(updateReviewAsync(review))
        }
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        toast.success('Submitted Successfully')
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
        toast.success('Deleted Successfully')
    }

    useEffect(() => {
        if (idType === "instructorId" || idType === "studentId") {
            const getReviews = async () => {
                const reviews = await ReviewService.getReviewsByUserId(id, idType)
                setRecords(reviews)
            }
            getReviews()
        }
    }, [id, idType])

    return (
        <>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.SearchInput
                        label="Search Reviews"
                        className={
                            page === 'reviewPage'
                                ? classes.searchInput
                                : classes.searchInputFullWidth
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleSearch}
                    />
                    {page === 'reviewPage' ? (
                        <Controls.Button
                            text="Add New"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            className={classes.newButton}
                            onClick={() => {
                                if (!user) {
                                    toast.error('Sorry, please sign in first.')
                                } else if (user.data.role === 'instructor') {
                                    toast.error(
                                        'Sorry, instructors cannot write reviews.',
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
                                    {item.student_name
                                        ? item.student_name
                                        : item.instructor_name}
                                </TableCell>
                                <TableCell width={headCells[1].width}>
                                    <RatingStar average={item.rating} />
                                </TableCell>
                                <TableCell width={headCells[2].width}>
                                    {item.comment_content}
                                </TableCell>
                                <TableCell width={headCells[3].width}>
                                    {new Intl.DateTimeFormat([
                                        'ban',
                                        'id',
                                    ]).format(new Date(item.createdAt))}
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
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}

export default Reviews
