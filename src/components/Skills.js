import React, { Component } from 'react';

class Skills extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className="row row-content">
                    <div className="col-6 col-sm-9 align-self-center">
                        <h2><i className="fa fa-terminal"></i> Technical Skills</h2>
                    </div>
                        <div className='row align-items-start'>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  C</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  C++</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  Python</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  Java</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  JavaScript</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  ReactJS</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  Redux Thunk</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  Django</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  SQL</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  Mongodb</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  NodeJS</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  Express js</p>
                            </div>
                            <div className='col-6'>
                                <p><i className="fa fa-code"></i>  HTML5, CSS, Bootstrap</p>
                            </div>
                        </div>
                </div>
            </div>

        );
    }

}

export default Skills;