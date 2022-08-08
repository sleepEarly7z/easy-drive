import * as React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import {
    ViewState,
    EditingState,
    IntegratedEditing,
} from '@devexpress/dx-react-scheduler'
import {
    Scheduler,
    DayView,
    WeekView,
    MonthView,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui'

import { getAppointmentsByInstructorIDAsync } from '../../redux/appointments/thunks'

const PREFIX = 'Demo'

// #FOLD_BLOCK
export const classes = {
    container: `${PREFIX}-container`,
    text: `${PREFIX}-text`,
    formControlLabel: `${PREFIX}-formControlLabel`,
}
// #FOLD_BLOCK
const StyledDiv = styled('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    [`& .${classes.text}`]: theme.typography.h6,
    [`& .${classes.formControlLabel}`]: {
        ...theme.typography.caption,
        fontSize: '1rem',
    },
}))

const AppointmentContent = (props) => {
    const { data, style } = props

    return (
        <Appointments.AppointmentContent
            style={{
                ...style,
                color: data.color,
            }}
            {...props}
        />
    )
}

const Appointment = ({ children, style, data, ...restProps }) => (
    <Appointments.Appointment
        {...restProps}
        data={data}
        style={{
            ...style,
            backgroundColor: data.backgroundColor,
            color: data.color,
        }}
    >
        {children}
    </Appointments.Appointment>
)

// const currentDate = '2018-06-27'
const editingOptionsList = [
    { id: 'allowAdding', text: 'Adding' },
    { id: 'allowDeleting', text: 'Deleting' },
    { id: 'allowUpdating', text: 'Updating' },
    { id: 'allowResizing', text: 'Resizing' },
    { id: 'allowDragging', text: 'Dragging' },
]

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const EditingOptionsSelector = ({ options, onOptionsChange }) => (
    <StyledDiv className={classes.container}>
        <Typography className={classes.text}>Enabled Options</Typography>
        <FormGroup row>
            {editingOptionsList.map(({ id, text }) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={options[id]}
                            onChange={onOptionsChange}
                            value={id}
                            color="primary"
                        />
                    }
                    classes={{ label: classes.formControlLabel }}
                    label={text}
                    key={id}
                    disabled={
                        (id === 'allowDragging' || id === 'allowResizing') &&
                        !options.allowUpdating
                    }
                />
            ))}
        </FormGroup>
    </StyledDiv>
)

const CalendarSchedular = ({ appointments }) => {
    // const CalendarSchedular = () => {
    const dispatch = useDispatch()
    const params = useParams()

    // console.log('CalendarSchedular: ' + JSON.stringify(appointments))

    const [data, setData] = React.useState(appointments)

    console.log('CalendarSchedular: ' + data)

    const [editingOptions, setEditingOptions] = React.useState({
        allowAdding: true,
        allowDeleting: true,
        allowUpdating: true,
        allowDragging: true,
        allowResizing: true,
    })
    const [addedAppointment, setAddedAppointment] = React.useState({})
    const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] =
        React.useState(false)

    const {
        allowAdding,
        allowDeleting,
        allowUpdating,
        allowResizing,
        allowDragging,
    } = editingOptions

    const onCommitChanges = React.useCallback(
        ({ added, changed, deleted }) => {
            if (added) {
                const startingAddedId =
                    data.length > 0 ? data[data.length - 1].id + 1 : 0
                setData([...data, { id: startingAddedId, ...added }])
            }
            if (changed) {
                setData(
                    data.map((appointment) =>
                        changed[appointment.id]
                            ? { ...appointment, ...changed[appointment.id] }
                            : appointment,
                    ),
                )
            }
            if (deleted !== undefined) {
                setData(
                    data.filter((appointment) => appointment.id !== deleted),
                )
            }
            setIsAppointmentBeingCreated(false)
        },
        [setData, setIsAppointmentBeingCreated, data],
    )
    const onAddedAppointmentChange = React.useCallback((appointment) => {
        setAddedAppointment(appointment)
        setIsAppointmentBeingCreated(true)
    })
    const handleEditingOptionsChange = React.useCallback(({ target }) => {
        const { value } = target
        const { [value]: checked } = editingOptions
        setEditingOptions({
            ...editingOptions,
            [value]: !checked,
        })
    })

    const TimeTableCell = React.useCallback(
        React.memo(({ onDoubleClick, ...restProps }) => (
            <WeekView.TimeTableCell
                {...restProps}
                onDoubleClick={allowAdding ? onDoubleClick : undefined}
            />
        )),
        [allowAdding],
    )

    const CommandButton = React.useCallback(
        ({ id, ...restProps }) => {
            if (id === 'deleteButton') {
                return (
                    <AppointmentForm.CommandButton
                        id={id}
                        {...restProps}
                        disabled={!allowDeleting}
                    />
                )
            }
            return <AppointmentForm.CommandButton id={id} {...restProps} />
        },
        [allowDeleting],
    )

    const allowDrag = React.useCallback(
        () => allowDragging && allowUpdating,
        [allowDragging, allowUpdating],
    )
    const allowResize = React.useCallback(
        () => allowResizing && allowUpdating,
        [allowResizing, allowUpdating],
    )

    const [currentDate, setCurrentDate] = useState(new Date())

    const [viewmode, setViewmode] = React.useState('month')

    const handleViewChange = (event) => {
        setViewmode(event.target.value)
    }

    React.useEffect(() => {
        dispatch(getAppointmentsByInstructorIDAsync(params.instructorId))
    }, [])

    return (
        <React.Fragment>
            <EditingOptionsSelector
                options={editingOptions}
                onOptionsChange={handleEditingOptionsChange}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '5px',
                    marginBottom: '10px',
                }}
            >
                <div
                    style={{
                        fontSize: '20px',
                        fontWeight: '850',
                        paddingBottom: '10px',
                        marginRight: 'auto',
                        color: '#adb2af',
                    }}
                >
                    {months[currentDate.getMonth()]},{' '}
                    {currentDate.getFullYear()}
                </div>
                <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">
                        View
                    </FormLabel> */}
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="month"
                        name="radio-buttons-group"
                        value={viewmode}
                        onChange={handleViewChange}
                    >
                        <FormControlLabel
                            value="month"
                            control={<Radio />}
                            label="Month"
                        />
                        <FormControlLabel
                            value="week"
                            control={<Radio />}
                            label="Week"
                        />
                        <FormControlLabel
                            value="day"
                            control={<Radio />}
                            label="Day"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <Paper>
                <Scheduler data={data} height={650}>
                    <ViewState currentDate={currentDate} />
                    <EditingState
                        onCommitChanges={onCommitChanges}
                        addedAppointment={addedAppointment}
                        onAddedAppointmentChange={onAddedAppointmentChange}
                    />

                    <IntegratedEditing />
                    {/* <WeekView
                        startDayHour={9}
                        endDayHour={19}
                        timeTableCellComponent={TimeTableCell}
                    /> */}

                    {viewmode === 'month' && <MonthView />}
                    {viewmode === 'week' && (
                        <WeekView
                            startDayHour={9}
                            endDayHour={19}
                            timeTableCellComponent={TimeTableCell}
                        />
                    )}
                    {viewmode === 'day' && <DayView />}
                    {/* <MonthView />
                    <WeekView
                            startDayHour={9}
                            endDayHour={19}
                            timeTableCellComponent={TimeTableCell}
                        />
                    <DayView /> */}

                    <Appointments
                        appointmentComponent={Appointment}
                        appointmentContentComponent={AppointmentContent}
                    />

                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton={allowDeleting}
                    />

                    {/* <Toolbar />
                    <DateNavigator />
                    <ViewSwitcher /> */}

                    <AppointmentForm
                        commandButtonComponent={CommandButton}
                        readOnly={
                            isAppointmentBeingCreated ? false : !allowUpdating
                        }
                    />
                    <DragDropProvider
                        allowDrag={allowDrag}
                        allowResize={allowResize}
                    />
                </Scheduler>
            </Paper>
        </React.Fragment>
    )
}

export default CalendarSchedular
