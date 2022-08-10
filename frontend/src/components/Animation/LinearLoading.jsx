import React from 'react';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: orange[500]
        }
    },
});

const LinearLoading = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <ThemeProvider theme={theme}>
                <LinearProgress />
            </ThemeProvider>
        </Box>
    );
}

export default LinearLoading;