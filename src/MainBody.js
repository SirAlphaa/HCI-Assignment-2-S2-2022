import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';

function MainBody() {

    const theme = createMuiTheme({
        palette: {
            mode: "dark",
            primary: yellow
        },
        
        typography: {
            fontFamily: ['Bierstadt'],
            allVariants: {
                color: "#FFD700"
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
                                <Tab label="Introduction" value="1" />
                                <Tab label="Research Methodology" value="2" />
                                <Tab label="Findings" value="3" />
                                <Tab label="Discussion" value="4" />
                                <Tab label="Conclusion" value="5" />
                                <Tab label="References" value="6" />
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <Typography variant='body1' colour="">
                                Introduction <br/> <hr/> <br/>

                                There are several things to consider while developing a new website. 
                                To attract users, your website must have a visually appealing design. 
                                Additionally, it ought to have all the information you want to give your 
                                visitors so they may accomplish the reason they came to your website. 
                                One of the crucial phases of creating a website is usability testing. 
                                Online users are accustomed to being able to utilize a website right away. 
                                Most of them won't take the time necessary to understand a complicated website. 
                                The purpose of this report is to test the usability of the AUT Beta website 
                                and determine any possible issues and discover areas that can be improved, 
                                in regards to ease of user interaction and satisfaction. This report has a study 
                                which comprises a research section and a usability study. The research section 
                                will explore the qualitative method used to conduct this study. Then, the usability 
                                study section will analyze the findings from the research conducted to find insights. 
                                Finally, the report will provide suggestions on improvement based on the findings. 

                                <br/> <br/>
                                1.1 Why is Website Usability Important?
                                <br/> <br/>
                                Usability is important because there are so many websites that are identical and users 
                                will move on to the next one if the first one is difficult to use. Even with the most beautiful 
                                website in the world, if users can't quickly navigate it, they will leave. This may involve providing 
                                succinct and pertinent information regarding the website's topic. Additionally taken into account is the 
                                thoughtful positioning of things within the website's suitable places. The website's suitability for users 
                                of all ages and genders might also need to be taken into account.

                                <br/> <br/>
                                A user-friendly website makes a desirable first impression on visitors who might become customers. Making the 
                                website simple to use is a crucial tactic to help users easily locate what they are looking for. Visitors will 
                                just switch to another relevant website that offers what they want if this functionality is absent. Consequently, 
                                a potential customer is lost. Therefore, the demands of the visitors should come first when developing your website, 
                                even though it should contain your own ideas and inspiration for the artistic component of the website. The success of 
                                your online business may depend on the usability of your website with a focus on visitors, who could represent potential 
                                customers for the company.

                            </Typography>
                        </TabPanel>
                        
                        <TabPanel value="2">
                            <Typography variant='body1' colour="">
                                Research Methodology <br/> <hr/> <br/>

                                For the purpose of this study, the observation method will be used, which is a qualitative 
                                research method. Qualitative analysis deals with intangible, imprecise issues that fall under 
                                the social and experience umbrella which cannot be measured by numbers and statistics. Since 
                                factors like positive associations with a brand, management credibility, customer contentment, 
                                competitive advantage, and cultural transformations are challenging, if not impossible, to capture 
                                with numerical inputs, this strategy relies on the kind of intelligence that machines lack.
                                <br/> <br/>
                                A first-hand investigation into the experience of using an artifact while the item is being used is 
                                the goal of usability testing. The user's perspective is limited to their own thoughts and experiences 
                                t the moment they are using the object. As shoppers with decades of purchasing experience, we may also 
                                view this enquiry as routine. Perhaps this amazing simplicity has concealed the effectiveness of the 
                                directness mechanism, the core of usability testing.
                                <br/> <br/>
                                A person's own testing of a newly purchased product and a usability test are two different things. A usability 
                                test involves expressing the experience of using an artifact, describing that experience, and then communicating
                                that information to the item's creators. However, these activities can also be based on commonplace skills, making 
                                it possible for non-specialists to engage in productive practice. The key usability strategy has been talking or thinking
                                aloud so that a user may express their experience, particularly their thoughts, to the other people participating in the testing.
                                <br/> <br/>
                                According to Phil, during the observation, if you notice something on the user’s face like a frown; an intervention such as “Something’s 
                                up, eh?” results in a desirable outcome. Such an intervention doesn't result from concentrating on what to say or according to a large list 
                                of rules; rather, it results from a special interaction between the user and the moderator, where the moderator sits alongside the user. 
                                The mindset a moderator might adopt to encourage successful interventions like this one can be summed up as being besides. The moderator 
                                will be able to better grasp the user's experience by being there with them. Instead of asking a long list of questions, they could make a 
                                few simple observations and offer a comment that has a lot of value and it doesn’t demand anything in response. For instance, the user 
                                might be grinning and obviously having fun, and the moderator might be grinning and also be having fun and say, "This is fun, eh? It's 
                                a simple way for the user to stay in touch with their experience and expand on it at their own pace. This relationship creates a solid foundation 
                                for a truly ethical approach that can maintain a constant focus on everyone's well-being.
                                <br/> <br/>
                                2.2 Sample
                                <br/> <br/>
                                There are eight participants in our usability test. Of the 7 participants, 5 were men and 2 were women, and all had prior understanding of how websites 
                                were meant to operate as well as a lot of experience using websites in both their personal and professional life.
                                <br/> <br/>
                                2.3 materials
                                <br/> <br/>
                                For this usability test, our group members were required to interview some people in a range of 5 - 7 in order to discover their first experiences by 
                                using the website of “https://beta.aut.ac.nz”. To complete those interviews, we were using several devices to help us gather the data of the website such 
                                as allowing participants to use our computer, laptop or tablet and while in progress, we used voice recorder application in our phone or laptop to record their
                                voices of feedbacks toward the website and as an evidence that the interviews were conducted and based on their voices.
                                <br/> <br/>
                                2.3 Procedure
                                <br/> <br/>
                                Members of the group contacted prospective participants and extended invitations to the usability study. The information sheet about the test, which described the 
                                goal of the study and the kind of data that was going to be collected, was handed to potential participants once they consented to take part. The participant signed a 
                                consent form after they were informed that we would be recording their statements while they were taking the exam and seeing them in action.
                            </Typography>
                        </TabPanel>

                        <TabPanel value="3">
                            <Typography variant='body1' colour="">
                                Item One <br/> <hr/> <br/>
                                
                                Testing, My SDNFCKJLSEHUVJLSNDVCUESis meant to be <br/>
                                paragrah lol
                            </Typography>
                        </TabPanel>

                        <TabPanel value="4">
                            <Typography variant='body1' colour="">
                                Item Four <br/> <hr/> <br/>
                                Testing, My SDNFCKJLSEHUVJLSNDVCUESis meant to be <br/>
                                paragrah lol
                            </Typography>
                        </TabPanel>

                        <TabPanel value="5">
                            <Typography variant='body1' colour="">
                                Item Five <br/> <hr/> <br/>
                                Testing, My SDNFCKJLSEHUVJLSNDVCUESis meant to be <br/>
                                paragrah lol
                            </Typography>
                        </TabPanel>

                        <TabPanel value="6">
                            <Typography variant='body1' colour="">
                                Item Five <br/> <hr/> <br/>
                                Testing, My SDNFCKJLSEHUVJLSNDVCUESis meant to be <br/>
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