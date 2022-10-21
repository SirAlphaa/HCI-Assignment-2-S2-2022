import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';

function MainBody() {

    const theme = createMuiTheme({
        palette: {
            mode: "dark",
            primary: cyan
        },

        typography: {
            fontFamily: ['Bierstadt'],
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
                                <Tab label="Introduction" value="1" />
                                <Tab label="Research Methodology" value="2" />
                                <Tab label="Findings" value="3" />
                                <Tab label="Discussion" value="4" />
                                <Tab label="Conclusion and Recommendations" value="5" />
                                <Tab label="References" value="6" />
                            </TabList>
                        </Box>

                        {/* ========================= Introduction Tab ==================================================================================*/}
                        <div className='textalignment'>
                            <TabPanel value="1">

                                <Typography variant='h4'>
                                    Introduction <br /><br />
                                </Typography>
                                <Typography variant='body1' colour="">
                                    &emsp;&emsp; There are several things to consider while developing a new website. Your website must have a visually appealing design to attract users. Additionally, it ought to have all the information you want to give your visitors so they may accomplish the reason they came to your website. One of the crucial phases of creating a website is usability testing. Online users are accustomed to being able to use a website right away. Most of them won't take the time necessary to understand a complicated website. The purpose of this report is to test the usability of the AUT Beta website and determine any possible issues and areas that can be improved with regard to ease of user interaction and satisfaction. This report has a study which comprises a research section and a usability study. The research section will explore the qualitative method used to conduct this study. Then, the usability study section will analyse the findings from the research conducted to find insights. Finally, the report will provide suggestions for improvement based on the findings.
                                </Typography>
                                <br /> <br />
                                <Typography variant='h5'>
                                    &emsp;&emsp;Why is Website Usability Important?
                                </Typography>
                                <br /> <br />
                                <Typography variant='body1' colour="">
                                    &emsp;&emsp;Usability is important because there are so many websites that are identical, and users will move on to the next one if the first one is difficult to use. Even with the most beautiful website in the world, if users can't quickly navigate it, they will leave. This may involve providing succinct and pertinent information regarding the website's topic. Additionally taken into account is the thoughtful positioning of things within the website's suitable places. The website's suitability for users of all ages and genders might also need to be taken into account (Lawrence & Tavakol, 2006).
                                    <br />
                                    <br />
                                    &emsp;&emsp;A user-friendly website makes a desirable first impression on visitors who might become customers. Making the website simple to use is a crucial tactic to help users easily locate what they are looking for. If this functionality is absent, visitors will just switch to another relevant website that offers what they want. Consequently, a potential customer is lost. Therefore, the demands of the visitors should come first when developing your website, even though it should contain your own ideas and inspiration for the artistic component of the website. The success of your online business may depend on the usability of your website, with a focus on visitors who could represent potential customers for the company.
                                </Typography>

                            </TabPanel>

                            {/* ========================= Research Methodology Tab ==========================================================================*/}

                            <TabPanel value="2">

                                <Typography variant='h4'>
                                    Research Methodology
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant='body1' colour="">
                                    &emsp;&emsp;For the purpose of this study, the observation method will be used, which is a qualitative research method. The qualitative analysis deals with intangible, imprecise issues that fall under the social and experiential umbrella, which cannot be measured by numbers and statistics. Since factors like positive associations with a brand, management credibility, customer contentment, competitive advantage, and cultural transformations are challenging, if not impossible, to capture with numerical inputs, this strategy relies on the kind of intelligence that machines lack.
                                    <br />
                                    <br />
                                    &emsp;&emsp;A first-hand investigation into the experience of using an artefact while the item is being used is the goal of usability testing. The user's perspective is limited to their own thoughts and experiences at the moment they are using the object (Carter, 2007). As shoppers with decades of purchasing experience, we may also view this enquiry as routine. Perhaps this amazing simplicity has concealed the effectiveness of the directness mechanism, at the core of usability testing.
                                    <br />
                                    <br />
                                    &emsp;&emsp;According to Carter (2007), during the observation, if you notice something on the user’s face, like a frown, an intervention such as "Something’s up, eh?" results in a desirable outcome. Such an intervention does not result from concentrating on what to say or according to a large list of rules; rather, it results from a special interaction between the user and the moderator, where the moderator sits alongside the user. The mindset a moderator might adopt to encourage successful interventions like this one can be summed up as being besides. The moderator will be able to better grasp the user's experience by being there with them. Instead of asking a long list of questions, they could make a few simple observations and offer a comment that has a lot of value and doesn’t demand anything in response. For instance, the user might be grinning and obviously having fun, and the moderator might be grinning and also having fun and say, "This is fun, eh? It's a simple way for the user to stay in touch with their experience and expand on it at their own pace. This relationship creates a solid foundation for a truly ethical approach that can maintain a constant focus on everyone's well-being.
                                    <br />
                                    <br />
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Sample
                                    </Typography>
                                    <br />
                                    <Typography variant='body1' colour="">
                                        &emsp;&emsp;There are seven participants in our usability test. Of the 7 participants, 5 were men and 2 were women, and all had a prior understanding of how websites were meant to operate as well as a lot of experience using websites in both their personal and professional life.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Materials
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;For this usability test, our group members were required to find 5 to 7 people in order to observe their first experiences of using the website of https://beta.aut.ac.nz”.
                                    <br />
                                    <br />
                                    &emsp;&emsp;To complete the usability test, we used several approaches to help us gather the data of the website, such as allowing participants to use our computer, laptop or tablet and while in progress, we used voice recorder application on our phones or laptop to record their verbal feedback on the website and as evidence that the usability test was conducted and based on their voices.
                                    <br />
                                    <br />
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Procedure
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;Members of the group contacted prospective participants and extended invitations to the usability study. The information sheet about the test, which described the goal of the study and the kind of data that was going to be collected, was handed to potential participants before they consented to take part. The participant signed a consent form after they were informed that we would be recording their statements while they were exploring the web site and seeing them in action.
                                </Typography>
                            </TabPanel>

                            {/* ========================= Findings Tab ======================================================================================*/}

                            <TabPanel value="3">
                                <Typography variant='body1' colour="">
                                    <Typography variant='h4'>
                                        Findings <br /> <br />
                                    </Typography>
                                    &emsp;&emsp;The feedback that participants gave regarding the website they examined is by far the most important piece of information gleaned from this study. Once the data collection process was finished, the focus of the analysis shifted to these comments and the information that accompanied them.
                                    <br />
                                    <br />
                                    &emsp;&emsp;We have performed a qualitative data analysis consisting of the following steps
                                    <br />
                                    <br />
                                    &emsp;&emsp;1 - Reading the transcription.
                                    <br />
                                    &emsp;&emsp;2 - Labelling relevant words, phrases, sentences or sections.
                                    <br />
                                    &emsp;&emsp;3 - Codification (Hierarchical Coding Frame) Positive and Negative.
                                    <br />
                                    <br />
                                    <table>
                                        <tr>
                                            <th>Participants</th>
                                            <th>Positive</th>
                                            <th>Negative</th>
                                        </tr>
                                        <tr>
                                            <td>Participant 1</td>
                                            <td>
                                                1) I have every information so far<br />
                                                2) design makes sense, it is simple<br />
                                                3) It is not confusing, and it is easy to get a point at the same time<br />
                                                4) I like this website, it has good animation <br />
                                                5) I can get information easily, It is a good website   <br />
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Participant 2</td>
                                            <td></td>
                                            <td>
                                                1) The design is quite confusing, diminishing the information. <br />
                                                2) Letters are too small  <br />
                                                3) The location button is quite confusing <br />
                                                4) I accidentally press the location button, and it does not make sense there <br />
                                                5) There is an arrow that is pointing down, and it is confusing, it is just there  <br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Participant 3</td>
                                            <td>
                                                1) The arrow back is more Accessible than the hamburger scrolls<br />
                                                2) I fell this is a safe website<br />
                                                3) It gives a lot of information but..<br />
                                                4) the sites have a very broad purpose so, maybe it is fair.<br />
                                            </td>
                                            <td>
                                                1) Elements have arrows that point to different directions, which was not what I expecting <br />
                                                2) it does not take me to a resource page, it might be a bug on the page  <br />
                                                3) I don't like the location icon, it is usually used with Geo location <br />
                                                4) I am not sure if the home page is terribly effective <br />
                                                5) it is not always clear what the purpose of the site is<br />
                                                6) I would rather see the front homepage represent the process of engagement with AUT. <br />
                                                7) it does not give me a kind of customer journey or step to engage with AUT.<br />
                                                8) I can see also a moving dot and i don't really like<br />
                                                9) I don't really like having an animation like that on the page <br />
                                                10)I will click on the moving arrow, and nothing seems to happen now.<br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Participant 4</td>
                                            <td>
                                                1) The spirals are good in getting you to scroll down<br />
                                                2) Transitions when clicking links are smooth, which is nice<br />
                                            </td>
                                            <td>
                                                1) The home page is very minimal, there aren't many options, and there aren’t any tabs to click. <br />
                                                2) It's not clear exactly what this site is used for. AUT Beta doesn’t mean anything to me.<br />
                                                3) Unnecessarily need to keep scrolling down on the homepage to find the tabs to click. They are too far spaced out<br />
                                                4) Too many different colours that aren’t very pleasant on the eyes.<br />
                                                5) Arrow placement in the events page is placed over the text, which needs to be fixed<br />
                                                6) Lots of wasted space up top in the events page, had to scroll again<br />
                                                7) The moving balls are a bit distracting when trying to read as they take the attention away<br />
                                                8) The subscribe to our newsletter has no link to click on<br />
                                                9) Not a fan of the fully white background. We prefer a more neutral colour that doesn’t strain the eyes<br />
                                                10)Would be better if only one click was needed to go into new links. The description could be provided just underneath<br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Participant 5</td>
                                            <td>
                                                1) Liked the dark theme<br />
                                                2) Design made it obvious that you had to scroll down<br />
                                            </td>
                                            <td>
                                                1) Did not like the design animations<br />
                                                2) Text was too far apart, making it too hard to read.<br />
                                                3) Unable to understand<br />
                                                4) Website functionality is buggy<br />
                                                5) Layout was bad, the menu was hard to find<br />
                                                6) No back button<br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Participant 6</td>
                                            <td>
                                                1) Was able to understand what the website was about.<br />
                                            </td>
                                            <td>
                                                1) The design was overlapping with pictures on the website.<br />
                                                2) Did not understand how navigation worked<br />
                                                3) Design was not reactive, and was not able to tell if a button was active or not.<br />
                                                4) No back button<br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Participant 7</td>
                                            <td>
                                                1) The website is attractive.<br />
                                                2) The spirally background is helpful as a guidance to move through each section.<br />
                                                3) The moving ball helps my eyes to find each section<br />
                                                4) The website is vertical and the circle of information is not on the same line.<br />
                                                5) The website keeps changing colour as it scrolls up and down.<br />
                                                6) The hamburger menu is on the right position as it aligns with AUT logo.<br />
                                                7) The buttons inside the hamburger menu are good and engaging.<br />
                                                8) The titles and sentences are in perfect fonts.<br />
                                                9) The website is easy to access and enjoyable to explore.<br />
                                            </td>
                                            <td>
                                                <br />
                                            </td>
                                        </tr>


                                    </table>
                                    <br />
                                    <br />
                                    <img
                                        src='https://drive.google.com/uc?export=view&id=1V3gTKywFI-fdEjp_7oczBieBhAq-c4GJ'
                                        alt='Summary of Participant Feedback Pie Graph'
                                        width="800"
                                        className='imgCenter'></img>
                                    <br />
                                    <br />
                                    &emsp;&emsp;Overall, the pie chart shows the result in which participants expressed their experience while browsing the AUT Beta website. Two out of seven participants, representing 29%, genuinely liked the operation and layout of the AUT Beta website, showing a positive attitude about the experience. The website's layout appealed to them, made sense, and was simple to use; they had no trouble exploring it or finding the information they needed. In contrast, 71% of the participants provided a combination of favourable and unfavourable remarks about the layout, components, and functionality of the website. The participants found the website's performance to be unsatisfactory because the design was quite unclear and detracted from the page's information. A few components of the website, such as the location button, were difficult to understand, and content fonts were too small to view and read, indicating website navigation issues. Participants were also unclear on what the purpose of the website was. Overall, most of the participants encountered problems when navigating the AUT Beta website and expected the navigation to be simple and adequate with relevant information in view. However, there were evident problems with the design, navigation, layout, bugs and purpose of the website.
                                </Typography>
                            </TabPanel>

                            {/* ========================= Discussion Tab ====================================================================================*/}

                            <TabPanel value="4">
                                <Typography variant='body1' colour="">
                                    <Typography variant='h4'>
                                        Discussion <br /> <br />
                                    </Typography>
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Navigation
                                    </Typography>
                                    <br />
                                    <Typography variant='body1' colour="" fontWeight='bold'>
                                        &emsp;&emsp;Participants found that the navigation of the web had issues.
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;When someone visits your website, they should not have to spend much time determining what to click. There should be as little resistance as possible when moving from point A to point B. Garrett & Young (2016) say that to optimise a website’s navigation, you should keep the major navigation's structure straightforward (and near the top of your page); include navigation in the footer of the page; have a search bar right at the top so users can easily search using keywords, and ensure that the user does not have to dig deep to find something. Based on some participants’ point of view, the AUT beta website has poor navigation. Participants found that the menu was hard to discover, and there were not any visible tabs to click or a search bar to find something using keywords. To make it simpler for users to find what they are looking for on your website, it is imperative to develop user-friendly navigation.
                                    <br />
                                    <br />
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Design
                                    </Typography>
                                    <br />
                                    <Typography variant='body1' colour="" fontWeight='bold'>
                                        &emsp;&emsp;Participants found that the website design was chaotic and released stress.
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;Even though some participants rated the website design as simple and interactive, most users found the website design to be chaotic as it stressed them the moment they tried to scroll the website up and down. Furthermore, its design does not support any indication to users, for example, the clicked button does not show an indication if the button is clicked or not, which could cause confusion for users if the button is working or not. Participants also stated that there were too many colours with high contrast; and that the moving balls are very distracting especially when trying to read something. Huang & Cappel (2012) mentioned that while your website's aesthetics are unquestionably significant, most visitors are not checking it out to see how sleek the design is. They seek to accomplish a task or discover a certain piece of knowledge. Unnecessary design components, or those that have no functional purpose, will therefore simply confuse and make it more difficult for visitors to achieve their goals.
                                    <br />
                                    <br />
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Layout
                                    </Typography>
                                    <br />
                                    <Typography variant='body1' colour="" fontWeight='bold'>
                                        &emsp;&emsp;Participants found issues with the elements on the structure of the website.
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;The website's layout was criticised by five out of seven participants as being overly broad. They felt like they frequently needed to scroll up or down merely to see another thing on the screen because the elements were too far apart. Even though two of the seven participants did like how everything was displayed on the screen, they both said they preferred the minimalist design since it prevented them from being overloaded with information.
                                    <br />
                                    <br />
                                    &emsp;&emsp;Participants also found that some elements which form part of the structure of the website were not correctly positioned. According to W. Haas and Grams ( 2000), the information on the website or webpage should be clear and simple to understand in order for the reader to interpret and understand the website' structure and content in a manner that is appropriate. In the same manner, Van de Rakt (2021) explains that a website can be structured using a variety of tools, including taxonomies like categories and tags, as well as internal links and navigation buttons. Most posts and pages on a website typically contain content that is organised around a wide range of topics that are connected in some way so that Google can index easily to the URL for the benefit of the webpage and the user. <br />
                                    <br />
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Purpose
                                    </Typography>
                                    <br />
                                    <Typography variant='body1' colour="" fontWeight='bold'>
                                        &emsp;&emsp;Participants found that the purpose of the web page was not clear.
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;Some of the participants found the purpose of the website confusing and did not know what the website was about, whether it was to help entrepreneurs, an events page, or a page that provided customer services. In that sense, according to D'Ambra (2018), a user or audience will obtain new knowledge or a deeper understanding of a topic through the use of a website whose objective is to provide detailed and useful information to that user or audience. In that sense, websites should focus on providing information that can be put into practice and can include "how to", guidance, processes, support information, directions, instructions and other similar content that is clear and detailed for the understanding of the user.
                                    <br />
                                    <br />
                                    <Typography variant='h5'>
                                        &emsp;&emsp;Bugs
                                    </Typography>
                                    <br />
                                    <Typography variant='body1' colour="" fontWeight='bold'>
                                        &emsp;&emsp;Participants found some missing links and inconsistencies.
                                    </Typography>
                                    <br />
                                    &emsp;&emsp;The participants also found a couple of errors; one where the arrow that is a link was overlapping over some text. Another found that although there was a “Subscribe to newsletter” section, there was no link for it, so there was nothing to click. As Huang & Cappel (2012) stated that these kinds of issues could be solved if the website was kept simple enough and only contained elements that are necessary instead of adding extra items that are never even used or cause inconsistencies just for the sake of aesthetics. The most crucial factor is that they must actively seek to complete a task or learn a certain piece of information.
                                </Typography>
                            </TabPanel>

                            {/* ========================= Conclusions and Recommenadations Tab ====================================================================================*/}

                            <TabPanel value="5">
                                <Typography variant='body1' colour="">
                                    <Typography variant='h4'>
                                        Conclusion and Recommenadations
                                    </Typography>
                                    <br />
                                    <br />
                                    &emsp;&emsp;In conclusion, based on findings that we collected from participants, the AUT beta website has numerous issues as more negative comments were produced. The reason being is that the website overall layout and design contains some flaws. For instance: the font size used is small, which makes readers difficult to read and follow the website content, excessive background design and animation, which lead to eye strain and break the excitement of engaging with the website to participants, buggy components, which make users unable to open a new tab or page, inconsistent indentation from one component to another made users feel uninterested to see the website as well as appeared to be a pointless website.
                                    <br />
                                    <br />
                                    &emsp;&emsp;After analysing positive and negative judgements from our participants, our group would like to recommend that the AUT beta website should be using a dropdown menu instead of a hamburger menu as we believe that dropdown menu produces efficiency in navigating users from one page to another in a faster way. It would also be wise to keep AUT’s brand image consistent across all their websites and platforms. Therefore,  using similar structures, colours and design elements will make it easy for users to navigate the website as it will be familiar to them.
                                </Typography>
                            </TabPanel>

                            {/* ========================= References Tab ====================================================================================*/}

                            <TabPanel value="6">
                                <Typography variant='body1' colour="">
                                    <Typography variant='h4'>
                                        References
                                    </Typography>
                                    <br />
                                    <br />
                                    &emsp;&emsp;Carter, Phil. (2007). Liberating usability testing. Interactions. 14. 18-22.
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;10.1145/1229863.1229864.
                                    <br />
                                    <br />
                                    &emsp;&emsp;Garett, R., Chiu, J., Zhang, L., & Young, S. D. (2016). A literature review: website design and user engagement.
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;Online journal of communication and media technologies, 6(3), 1.
                                    <br />
                                    <br />
                                    &emsp;&emsp;Haas, S. W., & Grams, E. S. (2000). Readers, authors, and page structure: A discussion of four questions arising from a content analysis
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;of Web pages. Journal of the Association for Information Science and Technology, 51(2), 181.
                                    <br />
                                    <br />
                                    &emsp;&emsp;Lawrence, D., & Tavakol, S. (2006). Balanced website design: optimising aesthetics,
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;usability and purpose. Springer Science & Business Media.
                                    <br />
                                    <br />
                                    &emsp;&emsp;Marieke van de Rakt. (2021, October 1). What is site structure, and why is it important?
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;Yoast. https://yoast.com/site-structure/
                                    <br />
                                    <br />
                                    &emsp;&emsp;Scott D'Ambra. (2018, February 22). What is the purpose of a website? ClearTech
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;Interactive. https://www.cleart.com/what-is-the-purpose-of-a-website.html
                                    <br />
                                    <br />
                                    &emsp;&emsp;Zhenyu Huang, James J. Cappel. (2012) A Comparative Study of Web Site Usability Practices of Fortune 500 Versus INC. 500 Companies.
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;Information Systems Management 29:2, pages 112-122.
                                    <br />
                                    <br />
                                    &emsp;&emsp;
                                    <br />
                                    &emsp;&emsp;&emsp;&emsp;
                                </Typography>
                            </TabPanel>
                        </div>
                    </TabContext>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default MainBody;