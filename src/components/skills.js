import React from "react";
import './skills.css';
import UIDesign from '../assets/ui-design.png';
import WebDesign from '../assets/website-design.png';
import AppDesign from '../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate Data Science Enthusiast with experience in Web Designing. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="ui" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Html Css Js React TailwindCss Bootstrap</p>
                    </div>
                </div>
            <div className="skillBar">
                <img src={AppDesign} alt="app" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Analysis</h2>
                    <p>Demo text</p>
                </div>
            </div>
            </div>
        </section>
    )
};

export default Skills;