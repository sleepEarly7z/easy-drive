import * as React from 'react'
import { styled } from '@mui/material/styles'
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
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

const theme = createTheme({
    palette: {
        primary: {
            // This is yellow #f4ca59.
            main: '#f4ca59',
        },
        secondary: {
            // This is yellow #f4ca59.
            main: '#f4ca59',
        },
    },
})

const Availability = ({formats, setFormats, handleFormat}) => {

    return (
        <>
            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Sunday" aria-label="Sunday" disabled>
                    <div>Sunday</div>
                </ToggleButton>
                <ToggleButton
                    value="Sunday-8am"
                    aria-label="Sunday-8am"
                >
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton
                    value="Sunday-9am"
                    aria-label="Sunday-9am"
                >
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton value="Sunday-10am" aria-label="Sunday-10am">
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton value="Sunday-11am" aria-label="Sunday-11am">
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton value="Sunday-12noon" aria-label="Sunday-12pm">
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Sunday-1pm" aria-label="Sunday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Sunday-2pm" aria-label="Sunday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Sunday-3pm" aria-label="Sunday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Sunday-4pm" aria-label="Sunday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Sunday-5pm" aria-label="Sunday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Monday" aria-label="Monday" disabled>
                    <div>Monday</div>
                </ToggleButton>
                <ToggleButton value="Monday-8am" aria-label="Monday-8am">
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton value="Monday-9am" aria-label="Monday-9am">
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton value="Monday-10am" aria-label="Monday-10am">
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton value="Monday-11am" aria-label="Monday-11am">
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton value="Monday-12noon" aria-label="Monday-12pm">
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Monday-1pm" aria-label="Monday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Monday-2pm" aria-label="Monday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Monday-3pm" aria-label="Monday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Monday-4pm" aria-label="Monday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Monday-5pm" aria-label="Monday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Tuesday" aria-label="Tuesday" disabled>
                    <div>Tuesday</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-8am" aria-label="Tuesday-8am">
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-9am" aria-label="Tuesday-9am">
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-10am" aria-label="Tuesday-10am">
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-11am" aria-label="Tuesday-11am">
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-12noon" aria-label="Tuesday-12pm">
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-1pm" aria-label="Tuesday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-2pm" aria-label="Tuesday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-3pm" aria-label="Tuesday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-4pm" aria-label="Tuesday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Tuesday-5pm" aria-label="Tuesday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Wednesday" aria-label="Wednesday" disabled>
                    <div>Wednesday</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-8am" aria-label="Wednesday-8am">
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-9am" aria-label="Wednesday-9am">
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton
                    value="Wednesday-10am"
                    aria-label="Wednesday-10am"
                >
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton
                    value="Wednesday-11am"
                    aria-label="Wednesday-11am"
                >
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton
                    value="Wednesday-12noon"
                    aria-label="Wednesday-12pm"
                >
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-1pm" aria-label="Wednesday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-2pm" aria-label="Wednesday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-3pm" aria-label="Wednesday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-4pm" aria-label="Wednesday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Wednesday-5pm" aria-label="Wednesday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Thursday" aria-label="Thursday" disabled>
                    <div>Thursday</div>
                </ToggleButton>
                <ToggleButton value="Thursday-8am" aria-label="Thursday-8am">
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton value="Thursday-9am" aria-label="Thursday-9am">
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton value="Thursday-10am" aria-label="Thursday-10am">
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton value="Thursday-11am" aria-label="Thursday-11am">
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton
                    value="Thursday-12noon"
                    aria-label="Thursday-12pm"
                >
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Thursday-1pm" aria-label="Thursday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Thursday-2pm" aria-label="Thursday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Thursday-3pm" aria-label="Thursday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Thursday-4pm" aria-label="Thursday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Thursday-5pm" aria-label="Thursday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Friday" aria-label="Friday" disabled>
                    <div>Friday</div>
                </ToggleButton>
                <ToggleButton value="Friday-8am" aria-label="Friday-8am">
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton value="Friday-9am" aria-label="Friday-9am">
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton value="Friday-10am" aria-label="Friday-10am">
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton value="Friday-11am" aria-label="Friday-11am">
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton value="Friday-12noon" aria-label="Friday-12pm">
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Friday-1pm" aria-label="Friday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Friday-2pm" aria-label="Friday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Friday-3pm" aria-label="Friday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Friday-4pm" aria-label="Friday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Friday-5pm" aria-label="Friday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
                value={formats}
                orientation="vertical"
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="Saturday" aria-label="Saturday" disabled>
                    <div>Saturday</div>
                </ToggleButton>
                <ToggleButton value="Saturday-8am" aria-label="Saturday-8am">
                    <div>08:00am - 09:00am</div>
                </ToggleButton>
                <ToggleButton value="Saturday-9am" aria-label="Saturday-9am">
                    <div>09:00am - 10:00am</div>
                </ToggleButton>
                <ToggleButton value="Saturday-10am" aria-label="Saturday-10am">
                    <div>10:00am - 11:00am</div>
                </ToggleButton>
                <ToggleButton value="Saturday-11am" aria-label="Saturday-11am">
                    <div>11:00am - 12:00pm</div>
                </ToggleButton>
                <ToggleButton
                    value="Saturday-12noon"
                    aria-label="Saturday-12pm"
                >
                    <div>12 noon</div>
                </ToggleButton>
                <ToggleButton value="Saturday-1pm" aria-label="Saturday-1pm">
                    <div>1:00pm - 2:00pm</div>
                </ToggleButton>
                <ToggleButton value="Saturday-2pm" aria-label="Saturday-2pm">
                    <div>2:00pm - 3:00pm</div>
                </ToggleButton>
                <ToggleButton value="Saturday-3pm" aria-label="Saturday-3pm">
                    <div>3:00pm - 4:00pm</div>
                </ToggleButton>
                <ToggleButton value="Saturday-4pm" aria-label="Saturday-4pm">
                    <div>4:00pm - 5:00pm</div>
                </ToggleButton>
                <ToggleButton value="Saturday-5pm" aria-label="Saturday-5pm">
                    <div>5:00pm - 6:00pm</div>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default Availability
