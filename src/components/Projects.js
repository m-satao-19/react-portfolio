import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className="col-6 col-sm-9 align-self-center">
                        <h2><i className="fa fa-laptop"></i> Projects</h2><br/>
                    </div>
                    <div className='row row-content'>
                        <h4><i className="fa fa-qrcode"></i>Mentor-Student Portal</h4>
                        <p>
                            Technology Stack:  <b>Java, MySQL, Javascript, HTML5, Bootstrap.</b><br/><br/>
                            It is a web portal for communication between mentor and student of an institution where
                            students can submit forms and documents and apply for leave , mentor can arrange
                            meetings, track students’ attendance and admin manages the allotment of batches of
                            students to a mentor.<br/>
                            <i className="fa fa-github-square"></i>Github Link:  <a><b>https://github.com/m-satao-19</b></a>
                        </p>
                    </div>
                    <div className='row row-content'>
                        <h4><i className="fa fa-qrcode"></i>Evaluation Software</h4>
                        <p>
                            Technology Stack:  <b>Java, MySQL, Javascript, HTML5, Bootstrap.</b><br/><br/>
                            The Software uses Database Management System to automate the process of result
                            evaluation of a project exhibition INC'19, hosted by the college. It is a web application
                            which calculates the result based on the percentile obtained according to the marking
                            scheme. It allows to calculate result for 10 different domains separately.It also displays the
                            Judge count and marks obtained per group. It also has feature of SMS for notifications.<br/>
                            <i className="fa fa-github-square"></i>Github Link:  <a><b>https://github.com/m-satao-19</b></a>
                        </p>
                    </div>
                    <div className='row row-content'>
                        <h4><i className="fa fa-qrcode"></i>To-do List</h4>
                        <p>
                            Technology Stack:  <b>Python, Django, PostGreSQL, Javascript, HTML5, Bootstrap.</b><br/><br/>
                            A web application that helps you track your tasks to be completed. Its functionalities include
                            adding a new task to the list, mark a task as completed, delete a task from list and searching
                            through the list.<br/>
                            <i className="fa fa-github-square"></i>Github Link:  <a><b>https://github.com/m-satao-19</b></a>
                        </p>
                    </div>
                    <div className='row row-content'>
                        <h4><i className="fa fa-qrcode"></i>Speech Emotion Recognition</h4>
                        <p>
                            Technology Stack:  <b>Python(Librosa), Django, PostGreSQL, Machine Learning.</b><br/><br/>
                            A web application that helps you track your tasks to be completed. Its functionalities include
                            adding a new task to the list, mark a task as completed, delete a task from list and searching
                            through the list.<br/>
                            <i className="fa fa-github-square"></i>Github Link:  <a><b>https://github.com/m-satao-19</b></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Projects;