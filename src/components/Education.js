import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
    render() {
        if (this.props.resumeEducation && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var work = this.props.resumeEducation.map(function (work, i) {
                const technologies = work.technologies;
                var tech = technologies.map((technology, i) => {
                    return (
                        <Badge pill className="education-badge mr-2 mb-2" key={i}>
                            {technology}
                        </Badge>
                    );
                });
                return (
                    <VerticalTimelineElement
                        // className="vertical-timeline-custom-line  vertical-timeline"
                        className="vertical-timeline-element--education"
                        // contentStyle = {{ background: "rgba(0,0,0,0.07)" }}
                        // contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.07)' }}
                        date={work.years}
                        iconStyle={{
                            background: "#000",
                            color: "#fff",
                            textAlign: "center",
                            border: "green"
                        }}
                        icon={<i className="fas fa-graduation-cap experience-icon"></i>}
                        key={i}
                    >
                        {/*<div style={{ textAlign: "left", marginBottom: "4px"}}>*/}
                        {/*    {mainTech}*/}
                        {/*</div>*/}

                        <h3
                            className="vertical-timeline-element-title"
                            style={{ textAlign: "left" }}
                        >
                            {work.degree}
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            style={{ textAlign: "left" }}
                        >
                            {work.school}
                        </h4>
                        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
                    </VerticalTimelineElement>
                );
            });
        }

        return (
            <section id="education" className="pb-5">
                <div className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                        {work}
                        <VerticalTimelineElement
                            // className="vertical-timeline-custom-line--education  vertical-timeline"
                            iconStyle={{
                                background: "#000",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={
                                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                            }
                        />
                    </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default Education;
