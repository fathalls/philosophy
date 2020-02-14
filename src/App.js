import React from 'react';
import './App.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function App() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{background: '#DDBDD5', color: '#fff'}}
                // contentArrowStyle={{borderRight: '7px solid  #DDBDD5'}}
                date="BCE - 529 CE"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title">Ancient philosophy</h3>
                <h4 className="vertical-timeline-element-subtitle">Eastern & Western Greece</h4>
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="469 BCE"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Golden Age Of Athenian Philosophy</h3>
                <h4 className="vertical-timeline-element-subtitle">Central Greece</h4>
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="155 BCE - 525 CE"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Roman Philosophy</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="100 - 525 CE"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Early Christian Thought</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="5th century - 16th century CE"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">The Middle Ages</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date=" 14th century - 17th century"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">The Renaissance</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="17th - 20th century"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Modern Philosophy</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="17th - 20th century"
                iconStyle={{background: '#DDBDD5', color: '#fff'}}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Contemporary Philosophy</h3>
                {/*<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
                <p>
                    Summary
                </p>
                <p>
                    Philosophers
                </p>
                <p>
                    Links
                </p>
            </VerticalTimelineElement>
            {/*<VerticalTimelineElement*/}
            {/*    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}*/}
            {/*    // icon={<StarIcon />}*/}
            {/*/>*/}
        </VerticalTimeline>
    );
}

export default App;
