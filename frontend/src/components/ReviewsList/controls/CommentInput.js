import React from 'react'
import { TextField, FormControl, FormLabel } from '@material-ui/core'

export default function CommentInput(props) {
    const { name, label, value, error = null, onChange, ...other } = props
    return (
        <FormControl>
            <FormLabel>Comment</FormLabel>
            <TextField
                // style={{ height: 208 }}
                inputProps={{
                    style: {
                        height: '200px',
                    },
                }}
                variant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
                {...(error && { error: true, helperText: error })}
            />
        </FormControl>
    )
}
