import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Controls from './controls/Controls'
import { useForm, Form } from './useForm'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ratingItems = [
    { id: 'onestar', title: '1 star', number: 1 },
    { id: 'twostars', title: '2 stars', number: 2 },
    { id: 'threestars', title: '3 stars', number: 3 },
    { id: 'fourstars', title: '4 stars', number: 4 },
    { id: 'fivestars', title: '5 stars', number: 5 },
]

const initialFValues = {
    id: 0,
    instructor_id: '',
    student_id: '62d761555c08a0f631db58a7',
    comment_content: '',
    ratingStar: 'onestar',
    reviewDate: '',
}

export default function ReviewForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('student_id' in fieldValues)
            temp.student_id = fieldValues.student_id
                ? ''
                : 'This field is required.'
        setErrors({
            ...temp,
        })

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === '')
    }

    const { user } = useSelector((state) => state.auth)
    const params = useParams();

    initialFValues.student_id = user.data._id
    initialFValues.instructor_id = params.instructorId

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues, true, validate)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm)
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit,
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="student_id"
                        label="Full Name"
                        value={values.student_id}
                        onChange={handleInputChange}
                        error={errors.student_id}
                    />
                    <Controls.Input
                        label="comment_content"
                        name="comment_content"
                        value={values.comment_content}
                        onChange={handleInputChange}
                        error={errors.comment_content}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="ratingStar"
                        label="Rating Star"
                        value={values.ratingStar}
                        onChange={handleInputChange}
                        items={ratingItems}
                    />
                    <div>
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}