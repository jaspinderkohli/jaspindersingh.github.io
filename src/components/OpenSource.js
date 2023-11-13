import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from "react-bootstrap/Badge";

class OpenSource extends Component {
    render() {
        if (this.props.resumeOpenSource && this.props.resumeBasicInfo) {
            // var sectionName = this.props.resumeBasicInfo.section_name.opensource;
            var sectionName = this.props.resumeBasicInfo.section_name.opensource;
            var contributions = this.props.resumeOpenSource.map(function (contribution, i) {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date={contribution.date}
                        iconStyle={{
                            background: "#000", // Choose a color that fits your site's theme
                            color: "#fff",
                            textAlign: "center",
                            border: "green"
                        }}
                        icon={<i className="fas fa-code-branch experience-icon"></i>} // Or any other relevant icon
                        key={i}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
                            {contribution.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
                            {contribution.repository}
                        </h4>
                        <p style={{ textAlign: "left" }}>
                            {contribution.description}
                        </p>
                        <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                            View Contribution
                        </a>
                    </VerticalTimelineElement>
                );
            });
        }

        return (
            <section id="opensource" className="pb-5">
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
                        {contributions}
                        <VerticalTimelineElement
                            iconStyle={{
                                background: "#000",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={<i className="fas fa-hourglass-end mx-auto experience-icon"></i>}
                        />
                        {/*<h3 className="vertical-timeline-element-title mx-auto" style={{ textAlign: "center" }}>*/}
                        {/*    That's all for now!*/}
                        {/*</h3>*/}
                    </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default OpenSource;
