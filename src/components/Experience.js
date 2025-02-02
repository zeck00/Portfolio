import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Briefcase } from "lucide-react"
import { experiences } from "../data/content.js"

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 text-white"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Professional Journey
        </h2>
        <VerticalTimeline animate={true} className="custom-vertical-timeline">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "linear-gradient(to bottom, #1f2937, #2c2c2c)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
              }}
              contentArrowStyle={{ borderRight: "7px solid #2c2c2c" }}
              date={experience.period}
              iconStyle={{
                background: "#0EA5E9",
                color: "#f2f2f2",
                border: "2px solid white"
              }}
              icon={<Briefcase />}
            >
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <h4 className="text-lg text-[#0EA5E9] font-medium">
                {experience.company}
              </h4>
              <p className="text-gray-300 mt-3">{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
