import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaLaravel } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'



function Experience() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - 2024"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaMoneyCheckAlt />}
                    >
                        <h3 className="vertical-timeline-element-title"> Internship Staff Accounting</h3>
                        <h4 className="vertical-timeline-element-subtitle">LLC Quadra Karya Santosa</h4>
                        <p>
                          Transaction Recording, Financial Reporting, Administration
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - 2024"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaLaravel />}
                    >
                        <h3 className="vertical-timeline-element-title">Laravel Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Final course project</h4>
                        <p>
                           Create a website for monitoring battery system management
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Experience