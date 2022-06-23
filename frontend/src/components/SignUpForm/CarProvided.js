import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Controller } from 'react-hook-form'
import { createTheme, ThemeProvider } from '@material-ui/core'

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
                                aria-label="carIsProvided"
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
                        name="carIsProvided"
                        control={control}
                    />
                </section>
            </div>
        </ThemeProvider>
    )
}

export default CarProvided
