import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const CarProvided = () => {
    return (
        <FormControl sx={{ m: 1, mt: 2 }}>
            <>
                <FormLabel id="demo-row-radio-buttons-group-label">
                    Car Is Provided
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
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
                    {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
                </RadioGroup>
            </>
        </FormControl>
    )
}

export default CarProvided
