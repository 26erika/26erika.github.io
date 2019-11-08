import React, {Component} from 'react';
import TV from '../images/80sTV.png';


class Projects extends Component{   
    render(){
        return(
          <div className="container">
              <section className='title-projects'>
                <h1 className="projects-title">Projects</h1>
              </section>
              <section>
				        <h2 className="line function">
                  Hello, I'm Erika and these are my projects. 
                </h2>
              </section>
              <div className="demo-projects">
                <img className="img-project" src={TV} alt="tv"></img>
                <img className="img-project" src={TV} alt="tv"></img>
                <img className="img-project" src={TV} alt="tv"></img>
              </div>
              <div demo-title>
                <p className="title-project">Churrolatte</p>
                <p className="title-project">My Notes</p>
                <p className="title-project">Md Links</p>
              </div>
          </div>
        )
    }
}

export default Projects;