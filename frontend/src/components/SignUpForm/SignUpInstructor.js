import React, { useState, useEffect } from 'react'
import './index.scss'
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    createTheme,
    ThemeProvider,
} from '@material-ui/core'
import { CssBaseline, Container, Paper, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

import { getInstructorsAsync } from '../../redux/instructors/thunks'

import { reset } from '../../redux/authentication/reducer'
import { registerAsync } from '../../redux/authentication/thunks'

import Loading from '../Animation/Loading'
import Availability from '../Calendar/Availability'

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

const theme = createTheme({
    palette: {
        type: 'dark',
    },
})

const CarProvided = ({ control }) => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <section style={{ display: 'flex' }}>
                    <div
                        style={{
                            fontSize: '17px',
                            paddingTop: '9px',
                            marginRight: '12px',
                            paddingLeft: '5px',
                        }}
                    >
                        Car Is Provided:{' '}
                    </div>
                    <Controller
                        render={({ field }) => (
                            <RadioGroup
                                aria-label="isCarProvided"
                                {...field}
                                row
                                defaultValue="true"
                            >
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="True"
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="False"
                                />
                            </RadioGroup>
                        )}
                        name="isCarProvided"
                        control={control}
                    />
                </section>
            </div>
        </ThemeProvider>
    )
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            // maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
            // width: 250,
        },
    },
}

const languages = [
    'English',
    'Mandarin',
    'Cantonese',
    'Korean',
    'French',
    'Spanish',
    'Japanese',
]

function getStyles(name, languageType, theme) {
    return {
        fontWeight:
            languageType.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

const SelectLicense = ({ control }) => {
    const [license, setLicense] = React.useState('Class 5')

    const handleChange = (event) => {
        setLicense(event.target.value)
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <section style={{ display: 'flex' }}>
                    <Controller
                        render={({ field }) => (
                            <FormControl sx={{ height: 75, width: 1200 }}>
                                <InputLabel id="demo-simple-select-label">
                                    License type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={license}
                                    defaultValue={license}
                                    fullWidth
                                    onChange={handleChange}
                                    {...field}
                                >
                                    <MenuItem value={'Class 5'}>
                                        Class 5
                                    </MenuItem>
                                    <MenuItem value={'Class 4'}>
                                        Class 4
                                    </MenuItem>
                                    <MenuItem value={'Class 7'}>
                                        Class 7
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        )}
                        name="license"
                        control={control}
                    />
                </section>
            </div>
        </ThemeProvider>
    )
}

const MultipleSelectLanguage = ({ control }) => {
    const theme = useTheme()
    const [languageType, setLanguageType] = React.useState(['English'])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setLanguageType(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        )
    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <section style={{ display: 'flex' }}>
                    <Controller
                        render={({ field }) => (
                            <FormControl sx={{ height: 65, width: 1200 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Languages
                                </InputLabel>
                                <Select
                                    label="Languages"
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={languageType}
                                    fullWidth
                                    onChange={handleChange}
                                    input={
                                        <OutlinedInput
                                            id="select-multiple-chip"
                                            label="Chip"
                                        />
                                    }
                                    renderValue={(selected) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.5,
                                            }}
                                        >
                                            {selected.map((value) => (
                                                <Chip
                                                    key={value}
                                                    label={value}
                                                />
                                            ))}
                                        </Box>
                                    )}
                                    {...field}
                                >
                                    {languages.map((itm) => (
                                        <MenuItem
                                            key={itm}
                                            value={itm}
                                            style={getStyles(
                                                itm,
                                                languageType,
                                                theme,
                                            )}
                                        >
                                            {itm}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                        name="language"
                        control={control}
                    />
                </section>
            </div>
        </ThemeProvider>
    )
}

function getSteps() {
    return [
        'Basic information',
        'Contact Information',
        'Professional Information',
        // 'Profile Information',
        'Availability',
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
        </>
    )
}

const ProfessionalForm = () => {
    const { control } = useFormContext()
    return (
        <>
            <SelectLicense control={control} />

            <MultipleSelectLanguage control={control} />

            <Controller
                control={control}
                name="experience"
                render={({ field }) => (
                    <TextField
                        id="experience"
                        label="Year Of Experience*"
                        variant="outlined"
                        placeholder="Enter Number"
                        fullWidth
                        margin="normal"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
        </>
    )
}

function getStepContent(step, formats, setFormats, handleFormat) {
    switch (step) {
        case 0:
            return <BasicForm />
        case 1:
            return <ContactForm />
        case 2:
            return <ProfessionalForm />
        case 3:
            //     return <ProfileForm />
            // case 4:
            return (
                <Availability
                    formats={formats}
                    setFormats={setFormats}
                    handleFormat={handleFormat}
                />
            )
        default:
            return 'unknown step'
    }
}

const SignUpInstructor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getInstructorsAsync())
    }, [dispatch])

    const [formats, setFormats] = React.useState(() => [])

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats)
        console.log(newFormats)
    }

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth,
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        // Redirect when logged in
        if (isSuccess || user) {
            setIsLoading(true)
            setTimeout(function () {
                navigate('/explore')
            }, 3000) //run this after 3 seconds
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const classes = useStyles()
    const methods = useForm({
        defaultValues: {
            role: 'instructor',
            first_name: '',
            last_name: '',
            password: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            province: 'British Columbia',
            country: 'Canada',
            license: '',
            experience: '',
            company: '',
            language: [],
            isCarProvided: '',
            description: '',
        },
    })
    const [activeStep, setActiveStep] = useState(0)
    const [skippedSteps, setSkippedSteps] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const steps = getSteps()

    const isStepOptional = (step) => {
        return step === 3
    }

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step)
    }

    const handleNext = (data) => {
        console.log('data: ' + data)
        if (activeStep === steps.length - 1) {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((data) => data.json())
                .then((res) => {
                    console.log(res)
                    setActiveStep(activeStep + 1)
                })

            // create an account
            console.log(data)
            data.language = data.language.toString()
            console.log('data: ' + data)
            dispatch(registerAsync(data))
            if (formats.length !== 0) {
                console.log('Need to book available time')
            }
            // console.log('formats: ' + formats)
            setIsLoading(true)
            // redirect after 3 seconds
            setTimeout(function () {
                navigate('/explore')
            }, 3000) //run this after 3 seconds
        } else {
            if (activeStep === 0) {
                if (
                    !data.first_name ||
                    !data.last_name ||
                    !data.password ||
                    !data.description
                ) {
                    toast.error('Please fill the required space.')
                    return
                }
                if (data.password.length < 6) {
                    toast.error('Passwords must be at least 6 characters long.')
                    return
                }
            }
            if (activeStep === 1) {
                if (!data.email || !data.phone || !data.street || !data.city) {
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
                                                labelContainer:
                                                    classes.labelContainer,
                                            }}
                                            StepIconProps={{
                                                classes: {
                                                    root: classes.step,
                                                    completed:
                                                        classes.completed,
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
                                You have successfully sign up an account,
                                redirecting...
                            </Typography>
                        ) : (
                            <>
                                <FormProvider {...methods}>
                                    <form
                                        onSubmit={methods.handleSubmit(
                                            handleNext,
                                        )}
                                    >
                                        {getStepContent(
                                            activeStep,
                                            formats,
                                            setFormats,
                                            handleFormat,
                                        )}
                                        <Grid
                                            container
                                            justifyContent="space-between"
                                        >
                                            <Typography
                                                inline="true"
                                                variant="body1"
                                                className={classes.leftText}
                                            >
                                                <Button
                                                    className={
                                                        classes.buttonLeft
                                                    }
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
                                                <Button
                                                    className={
                                                        classes.buttonRight
                                                    }
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    {activeStep ===
                                                    steps.length - 1
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
                        Sign up as a student
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default SignUpInstructor
