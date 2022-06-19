import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const languages = [
    'English',
    'French',
    'Chinese - Mandarin',
    'Chinese - Cantonese',
    'Spanish',
    'Korean',
    'Japanese',
]

const MultipleSelectChip = () => {
    const theme = useTheme()
    const [selectedLanguage, setSelectedLanguage] = React.useState([])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setSelectedLanguage(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    return (
        <div>
            <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel id="demo-multiple-chip-label">
                    Language(s)
                </InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedLanguage}
                    onChange={handleChange}
                    input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                        >
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {languages.map((language) => (
                        <MenuItem
                            key={language}
                            value={language}
                            style={getStyles(language, selectedLanguage, theme)}
                        >
                            {language}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

// stepper forms
function getStyles(language, selectedLanguage, theme) {
    return {
        fontWeight:
            selectedLanguage.indexOf(language) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

export default MultipleSelectChip
