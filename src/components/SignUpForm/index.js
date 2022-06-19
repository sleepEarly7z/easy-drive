import React, { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    cntLabel: {
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
        '&$disabled': {
            color: 'red',
        },
    },
    alternativeLabel: {},
    active: {}, //needed so that the &$active tag works
    completed: {},
    disabled: {},
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
                name="firstName"
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name"
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
                name="lastName"
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name"
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
                name="passWord"
                render={({ field }) => (
                    <TextField
                        id="pass-word"
                        label="Password"
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
                        label="Re-Password"
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
                name="emailAddress"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail"
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
                name="phoneNumber"
                render={({ field }) => (
                    <TextField
                        id="phone-number"
                        label="Phone Number"
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
                        label="Street"
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
                        label="City"
                        variant="outlined"
                        placeholder="Enter Your City"
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
                        label="License"
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
                name="yearOfExperience"
                render={({ field }) => (
                    <TextField
                        id="yearOfExperience"
                        label="Year Of Experience"
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
                        label="Company"
                        variant="outlined"
                        placeholder="Enter Your Company Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="language"
                render={({ field }) => (
                    <TextField
                        id="language"
                        label="Language"
                        variant="outlined"
                        placeholder="Enter Your Language"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="carIsProvided"
                render={({ field }) => (
                    <TextField
                        id="carIsProvided"
                        label="Car Is Provided"
                        variant="outlined"
                        placeholder="True/False"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
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
                        id="description"
                        label="Description"
                        variant="outlined"
                        placeholder="Enter Your Description"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="timeSlot"
                render={({ field }) => (
                    <TextField
                        id="timeSlot"
                        label="Time Slot"
                        variant="outlined"
                        placeholder="Enter Your Time Slot"
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
    const classes = useStyles()
    const methods = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            passWord: '',
            rePassWord: '',
            emailAddress: '',
            phoneNumber: '',
            street: '',
            city: '',
            province: '',
            license: '',
            yearOfExperience: '',
            company: '',
            language: '',
            carIsProvided: '',
            description: '',
            timeSlot: '',
        },
    })
    const [activeStep, setActiveStep] = useState(0)
    const [skippedSteps, setSkippedSteps] = useState([])
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
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((data) => data.json())
                .then((res) => {
                    console.log(res)
                    setActiveStep(activeStep + 1)
                })
        } else {
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

    return (
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
                        <Step
                            {...stepProps}
                            key={index}
                            className={classes.cntLabel}
                        >
                            <StepLabel
                                {...labelProps}
                                classes={{
                                    alternativeLabel: classes.alternativeLabel,
                                    labelContainer: classes.labelContainer,
                                }}
                                StepIconProps={{
                                    classes: {
                                        root: classes.step,
                                        completed: classes.completed,
                                        active: classes.active,
                                        disabled: classes.disabled,
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
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}
                            <Grid container justify="space-between">
                                <Typography
                                    inline
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
                                    inline
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
    )
}

export default LinearStepper
