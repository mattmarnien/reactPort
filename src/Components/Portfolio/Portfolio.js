import React from "react";
import './Portfolio.css'
import Card from '../portCards/Card'



function Portfolio() {
    const projects = [{
        name: "unBoxed",
        url: "https://unboxedgaming.herokuapp.com",
        image: "unBoxedMain.PNG",
        git: "https://github.com/mattmarnien/unBoxed"
    },
    {
        name: "sharkFin",
        url: "https://mattmarnien.github.io/sharkFin/",
        image: "sharkfin-Desktop.PNG",
        git: "https://github.com/mattmarnien/sharkFin"
    },
    {
        name: "Watch The Show",
        url: "https://watchtheshow.herokuapp.com",
        image: "watchTheShowMainDesktop.PNG",
        git: "https://github.com/mattmarnien/watchTheShow"
    },
    {
        name: "Password Generator",
        url: "https://mattmarnien.github.io/PasswordGenerator/",
        image: "PassGen.PNG",
        git: "https://github.com/mattmarnien/PasswordGenerator"
    }, {
        name: "Employee Tracker",
        url: "https://github.com/mattmarnien/employeeTracker",
        image: "tracker.PNG",
        git: "https://github.com/mattmarnien/employeeTracker"
    }, {
        name: "Day Planner",
        url: "https://mattmarnien.github.io/dayplanner/",
        image: "dayPlanner.PNG",
        git: "https://github.com/mattmarnien/dayPlanner"
    }]

    return (
        <div className='container'>
            <div className='row'>
                {projects.map(project => {
                    return (
                        <>
                            <Card
                                name={project.name}
                                image={require(`../images/${project.image}`)}
                                url={project.url}
                                git={project.git}
                            />

                        </>
                    );
                })}
            </div>
        </div>
    );
}
export default Portfolio;
