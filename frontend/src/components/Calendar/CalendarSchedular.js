import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
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

const CalendarSchedular = ({ appointments }) => {
    const dispatch = useDispatch()
    const params = useParams()

    const [data, setData] = React.useState(appointments)

    const [editingOptions, setEditingOptions] = React.useState({
        allowAdding: false,
        allowDeleting: false,
        allowUpdating: false,
        allowDragging: false,
        allowResizing: false,
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

    const TimeTableCell = React.useCallback(
        React.memo(({ onDoubleClick, ...restProps }) => (
            <WeekView.TimeTableCell
                {...restProps}
                onDoubleClick={allowAdding ? onDoubleClick : undefined}
            />
        )),
        [allowAdding],
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

                    {viewmode === 'month' && <MonthView />}
                    {viewmode === 'week' && (
                        <WeekView
                            startDayHour={9}
                            endDayHour={19}
                            timeTableCellComponent={TimeTableCell}
                        />
                    )}

                    {viewmode === 'day' && <DayView />}

                    <Appointments
                        appointmentComponent={Appointment}
                        appointmentContentComponent={AppointmentContent}
                    />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton={allowDeleting}
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
