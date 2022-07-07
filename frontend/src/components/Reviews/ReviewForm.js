import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Controls from './controls/Controls'
import { useForm, Form } from './useForm'
import * as reviewService from './reviewService'

const ratingItems = [
    { id: 'onestar', title: '1 star' },
    { id: 'twostars', title: '2 stars' },
    { id: 'threestars', title: '3 stars' },
    { id: 'fourstars', title: '4 stars' },
    { id: 'fivestars', title: '5 stars' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    comment: '',
    rating: 1,
    mobile: '',
    city: '',
    ratingStar: 'onestar',
    classtypeId: '',
    reviewDate: '',
    // hireDate: new Date(),
    // isPermanent: false,
}

export default function ReviewForm(props) {
    const { addOrEdit, recordForEdit } = props
    // const [currentDate, setCurrentDate] = useState(new Date())

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName
                ? ''
                : 'This field is required.'
        if ('email' in fieldValues)
            temp.email = /$^|.+@.+..+/.test(fieldValues.email)
                ? ''
                : 'Email is not valid.'
        if ('mobile' in fieldValues)
            temp.mobile =
                fieldValues.mobile.length > 9
                    ? ''
                    : 'Minimum 10 numbers required.'
        if ('classtypeId' in fieldValues)
            temp.classtypeId =
                fieldValues.classtypeId.length !== 0
                    ? ''
                    : 'This field is required.'
        setErrors({
            ...temp,
        })

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === '')
    }

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
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Comment"
                        name="comment"
                        value={values.comment}
                        onChange={handleInputChange}
                        error={errors.comment}
                    />
                    <Controls.Input
                        label="Rating"
                        name="rating"
                        value={values.rating}
                        onChange={handleInputChange}
                        error={errors.rating}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
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
                    <Controls.Select
                        name="classtypeId"
                        label="Class Type"
                        value={values.classtypeId}
                        onChange={handleInputChange}
                        options={reviewService.getClasstypeCollection()}
                        error={errors.classtypeId}
                    />
                    {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}

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
