import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';

function MainBody() {

    const theme = createMuiTheme({
        palette: {
            mode: "dark",
            primary: orange
        },
        typography: {
            fontFamily: ['Krona One'],
            allVariants: {
                color: "white"
            }
        }
    })

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <ThemeProvider theme={theme}>

                <Box sx={{ width: '100%', Typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="Tabs"
                                centered
                            >
                                <Tab label="Item One" value="1" />
                                <Tab label="Item Two" value="2" />
                                <Tab label="Item Three" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography variant='body1' colour="">
                                Item One<br></br>
                                Testing, My name is salman and this is meant to be <br></br>
                                paragrah lol
                            </Typography>
                        </TabPanel>
                        <TabPanel value="2">
                            <Typography variant='body1' colour="">
                                Item One<br></br>
                                Testing, My JHADFKLIJSHEIFLUSAKDBNCVIUSLHEVLJSDs is meant to be <br></br>
                                paragrah lol
                            </Typography>
                        </TabPanel>
                        <TabPanel value="3">
                            <Typography variant='body1' colour="">
                                Item One<br></br>
                                Testing, My SDNFCKJLSEHUVJLSNDVCUESis meant to be <br></br>
                                paragrah lol
                            </Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </ThemeProvider>

        </>
    )
}

export default MainBody;