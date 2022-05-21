import React from 'react'
import './AboutMe.css'

const _MS_PER_DAY = 1000 * 60 * 60 * 24 * 365;
const firstMonth = Date.UTC(2020, 11, 1);
var yearsOfExperience = Math.round((Date.now() - firstMonth)/_MS_PER_DAY * 10)/10;
function AboutMe() {
  return (
    <div className='about-me'>
        <div className="about-me-left">
          <div className="about-me-card image-frame"></div>
          <div className="about-me-card background"></div>
        </div>
        <div className="about-me-right">
          <div className="about-me-header">About Me</div>
          <div className="about-me-desc">
          <div className='main-description-box'>
            <i className="fa fa-briefcase fa-2x md icon" aria-hidden="true"></i>
            <div className='main-description'>Back-End Software Engineer at ExxonMobil</div>
            </div>
          <div className='main-description-box'>
            <i className="fa fa-graduation-cap fa-2x md icon" aria-hidden="true"></i>
            <div className='main-description'>BSc in Statistics, major of IT, Chulalongkorn Univerversity
            </div>
            </div>
          <div className="skill-set">
            <div className="skill-set-wrapper skill-years"><div className="skill-years-int">{ yearsOfExperience }+ Y</div><div className='skill-descrription'>Back-End Software Engineering</div></div>
            <div className="skill-set-wrapper skill-backend"><i className="fa-solid fa-mug-hot fa-2x icon"></i> / <i className="fa-solid fa-truck-ramp-box fa-2x icon"></i><div className="skill-descrription springboot-set">Main Skills: Springboot Specialization: Order Fullfilment</div></div>
            <div className="skill-set-wrapper skill-devops"><i className="fa-solid fa-cloud fa-3x icon"></i><div className="skill-descrription aks"> Exp. in AKS Cloud Migration</div></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
