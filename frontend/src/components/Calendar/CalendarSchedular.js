import * as React from 'react'
import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
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

import { appointments } from '../../utils/appointments'
import { useState } from 'react'

// source: https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/views/

const PREFIX = 'Demo'
export const classes = {
    container: `${PREFIX}-container`,
    text: `${PREFIX}-text`,
    formControlLabel: `${PREFIX}-formControlLabel`,
}
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

// const current = new Date()
// const currentDate = `${current.getFullYear()}-${
//     current.getMonth() + 1
// }-${current.getDate()}`
// const currentDate = '2022-05-25';
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

const CalendarSchedular = ({ page }) => {
    const [data, setData] = React.useState(appointments)
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
        if (page !== 'reviewpage') {
            setAddedAppointment(appointment)
            setIsAppointmentBeingCreated(true)
        }
    })
    const handleEditingOptionsChange = React.useCallback(({ target }) => {
        const { value } = target
        const { [value]: checked } = editingOptions
        if (page !== 'reviewpage') {
            setEditingOptions({
                ...editingOptions,
                [value]: !checked,
            })
        }
    })

    const TimeTableCell = React.useCallback(
        React.memo(({ onDoubleClick, ...restProps }) => (
            <MonthView.TimeTableCell
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
    // (`${currentDate.getFullYear()}`-`${currentDate.getMonth() + 1}`-`${currentDate.getDate()}`, []);

    const [viewmode, setViewmode] = React.useState('month')

    const handleViewChange = (event) => {
        setViewmode(event.target.value)
    }

    return (
        <React.Fragment>
            {page !== 'reviewpage' && (
                <EditingOptionsSelector
                    options={editingOptions}
                    onOptionsChange={handleEditingOptionsChange}
                />
            )}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        fontSize: '30px',
                        fontWeight: '550',
                        paddingBottom: '10px',
                        marginRight: 'auto',
                    }}
                >
                    {months[currentDate.getMonth() + 1]},{' '}
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
                <Scheduler data={data} height={600}>
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={() => setCurrentDate(currentDate)}
                    />
                    <EditingState
                        onCommitChanges={onCommitChanges}
                        addedAppointment={addedAppointment}
                        onAddedAppointmentChange={onAddedAppointmentChange}
                    />

                    <IntegratedEditing />

                    {viewmode === 'month' && <MonthView />}
                    {viewmode === 'week' && (
                        <WeekView startDayHour={10} endDayHour={19} />
                    )}
                    {viewmode === 'day' && <DayView />}

                    <Appointments />

                    {page !== 'reviewpage' && (
                        <>
                            <AppointmentTooltip
                                showOpenButton
                                showDeleteButton={allowDeleting}
                            />
                            <AppointmentForm
                                commandButtonComponent={CommandButton}
                                readOnly={
                                    isAppointmentBeingCreated
                                        ? false
                                        : !allowUpdating
                                }
                            />
                            <DragDropProvider
                                allowDrag={allowDrag}
                                allowResize={allowResize}
                            />
                        </>
                    )}
                </Scheduler>
            </Paper>
        </React.Fragment>
    )
}

export default CalendarSchedular
