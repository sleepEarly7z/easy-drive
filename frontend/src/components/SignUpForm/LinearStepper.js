import React, { useState, useEffect } from 'react'
import './index.scss'
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from '@material-ui/core'
import { CssBaseline, Container, Paper, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

import {
    getInstructorsAsync,
    addInstructorAsync,
} from '../../redux/instructors/thunks'

import CarProvided from './CarProvided'
import Loading from '../Animation/Loading'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        iconColor: '#f4ca59',
    },
    leftText: {
        textAlign: 'left',
    },
    rightText: {
        textAlign: 'right',
    },
    buttonLeft: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
    buttonRight: {
        backgroundColor: '#f4ca59',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#f4ca59',
        },
    },
    step: {
        '&$completed': {
            color: '#f4ca59',
        },
        '&$active': {
            color: '#f4ca59',
        },
    },
    alternativeLabel: {},
    active: {}, //needed so that the &$active tag works
    completed: {},
    labelContainer: {
        '&$alternativeLabel': {
            marginTop: 0,
        },
    },
}))

function getSteps() {
    return [
        'Basic information',
        'Contact Information',
        'Professional Information',
        'Profile Information',
    ]
}

const BasicForm = () => {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="first_name"
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name*"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="last_name"
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name*"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field }) => (
                    <TextField
                        id="pass-word"
                        label="Password*"
                        variant="outlined"
                        placeholder="Enter Your Password"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="rePassWord"
                render={({ field }) => (
                    <TextField
                        id="re-password"
                        label="Re-Password*"
                        variant="outlined"
                        placeholder="Re-enter Your Password"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    )
}

const ContactForm = () => {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="email"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail*"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                    <TextField
                        id="phone"
                        label="Phone Number*"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="street"
                render={({ field }) => (
                    <TextField
                        id="street"
                        label="Street*"
                        variant="outlined"
                        placeholder="Enter Your Street"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="city"
                render={({ field }) => (
                    <TextField
                        id="city"
                        label="City*"
                        variant="outlined"
                        placeholder="Enter Your City"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="country"
                render={({ field }) => (
                    <TextField
                        id="country"
                        label="Country*"
                        variant="outlined"
                        placeholder="Enter Your Country"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    )
}

const ProfessionalForm = () => {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="license"
                render={({ field }) => (
                    <TextField
                        id="license"
                        label="License*"
                        variant="outlined"
                        placeholder="Enter Your License"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="experience"
                render={({ field }) => (
                    <TextField
                        id="experience"
                        label="Year Of Experience*"
                        variant="outlined"
                        placeholder="Enter Your Year Of Experience"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="company"
                render={({ field }) => (
                    <TextField
                        id="company"
                        label="Company*"
                        variant="outlined"
                        placeholder="Enter Your Company Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            {/* <Controller
                control={control}
                name="language"
                render={({ field }) => <MultipleSelectChip />}
            /> */}
            {/* <MultipleSelectChip control={control} /> */}

            <Controller
                control={control}
                name="language"
                render={({ field }) => (
                    <TextField
                        id="language"
                        label="Language"
                        variant="outlined"
                        placeholder="Enter Your Languages, and split using comma"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            {/* <Controller
                control={control}
                name="carIsProvided"
                render={({ field }) => <CarProvided control={control} />}
            /> */}
            <CarProvided control={control} />
        </>
    )
}

const ProfileForm = () => {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="description"
                render={({ field }) => (
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        placeholder="Enter Your Description"
                        multiline
                        minrows={4}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="time"
                render={({ field }) => (
                    <TextField
                        id="time"
                        label="Hours Available Per Day*"
                        variant="outlined"
                        placeholder="Enter Your Available Hours Each Workday"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    )
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicForm />
        case 1:
            return <ContactForm />
        case 2:
            return <ProfessionalForm />
        case 3:
            return <ProfileForm />
        default:
            return 'unknown step'
    }
}

const LinearStepper = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getInstructorsAsync())
    }, [dispatch])

    const classes = useStyles()
    const methods = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            password: '',
            rePassWord: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            country: '',
            license: '',
            experience: '',
            company: '',
            language: '',
            carIsProvided: '',
            description: '',
            time: '',
        },
    })
    const [activeStep, setActiveStep] = useState(0)
    const [skippedSteps, setSkippedSteps] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const steps = getSteps()

    const isStepOptional = (step) => {
        return step === 1 || step === 2
    }

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step)
    }

    const handleNext = (data) => {
        console.log(data)
        if (activeStep === steps.length - 1) {
            if (!data.time) {
                toast.error('Please fill the required space.')
                return
            }
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((data) => data.json())
                .then((res) => {
                    console.log(res)
                    setActiveStep(activeStep + 1)
                })
            // create an account
            dispatch(addInstructorAsync(data))
            setIsLoading(true)
            // redirect after 3 seconds
            setTimeout(function () {
                // navigate('/explore')
                navigate('/')
            }, 3000) //run this after 3 seconds
        } else {
            if (activeStep === 0) {
                if (
                    !data.first_name ||
                    !data.last_name ||
                    !data.password ||
                    !data.rePassWord
                ) {
                    toast.error('Please fill the required space.')
                    return
                }
                if (data.password.length < 8) {
                    toast.error('Passwords must be at least 8 characters long.')
                    return
                }
                if (data.password !== data.rePassWord) {
                    toast.error('Re-entered password does not match.')
                    return
                }
            }
            if (activeStep === 1) {
                if (
                    !data.email ||
                    !data.phone ||
                    !data.street ||
                    !data.city ||
                    !data.country
                ) {
                    toast.error('Please fill the required space.')
                    return
                }
            }
            if (activeStep === 2) {
                if (!data.license || !data.experience || !data.company) {
                    toast.error('Please fill the required space.')
                    return
                }
            }
            setActiveStep(activeStep + 1)
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep),
            )
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep])
        }
        setActiveStep(activeStep + 1)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return isLoading ? (
        <Loading />
    ) : (
        <>
        <div className="SignUpTitle">Register As An Instructor</div>
        <CssBaseline />
        <Container component={Box} p={4}>
            <Paper component={Box} p={3}>
            <div className={classes.root}>
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((step, index) => {
                        const labelProps = {}
                        const stepProps = {}
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{ display: 'block' }}
                                >
                                    optional
                                </Typography>
                            )
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false
                        }
                        return (
                            <Step {...stepProps} key={index}>
                                <StepLabel
                                    {...labelProps}
                                    classes={{
                                        alternativeLabel:
                                            classes.alternativeLabel,
                                        labelContainer: classes.labelContainer,
                                    }}
                                    StepIconProps={{
                                        classes: {
                                            root: classes.step,
                                            completed: classes.completed,
                                            active: classes.active,
                                        },
                                    }}
                                >
                                    {step}
                                </StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>

                {activeStep === steps.length ? (
                    <Typography variant="h6" align="center">
                        You have successfully sign up an account, redirecting...
                    </Typography>
                ) : (
                    <>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(handleNext)}>
                                {getStepContent(activeStep)}
                                <Grid container justifyContent="space-between">
                                    <Typography
                                        inline="true"
                                        variant="body1"
                                        className={classes.leftText}
                                    >
                                        <Button
                                            className={classes.buttonLeft}
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            back
                                        </Button>
                                    </Typography>
                                    <Typography
                                        inline="true"
                                        variant="body1"
                                        className={classes.rightText}
                                    >
                                        {isStepOptional(activeStep) && (
                                            <Button
                                                className={classes.buttonRight}
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSkip}
                                            >
                                                skip
                                            </Button>
                                        )}
                                        <Button
                                            className={classes.buttonRight}
                                            variant="contained"
                                            color="primary"
                                            // onClick={handleNext}
                                            type="submit"
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Finish'
                                                : 'Next'}
                                        </Button>
                                    </Typography>
                                </Grid>
                            </form>
                        </FormProvider>
                    </>
                )}
            </div>
                </Paper>
            </Container>
            <div className="SignUpRedirect">
                <div className="SignInRedirectLink">
                    <NavLink to="/sign-in">Sign in instead</NavLink>
                </div>
                <div className="SignUpRedirectLink">
                    <NavLink to="/sign-up-student">
                        Sign up as an student
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default LinearStepper
