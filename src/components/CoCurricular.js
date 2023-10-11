import React, { Component } from 'react';

class CoCurricular extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className='col-6 col-sm-9 align-self-center'>
                        <h2><i className="fa fa-star-half-full"></i>Co-Curricular Activities and Achievements</h2>
                    </div>
                    <div className='row align-items-start mt-5'>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Elite Certificate in “Programming and Data Structures in Python”, NPTEL Course.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Certificate in "Front-End Web Development with React", Coursera, The Hong Kong University of Science and
                                Technology.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Certificate in "Server-side Development with NodeJS, Express
                                and MongoDB", Coursera, The Hong Kong University of Science and
                                Technology.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Certificate in "Front-End Web UI Frameworks and Tools: Bootstrap 4", Coursera, The Hong Kong University of Science and
                                Technology.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Certificate in "Crash Course on Python", Coursera, Google.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Certificate in "AWS Fundamentals: Going Cloud-Native", Coursera, AWS.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Member of the INC 2019 Judging Committee.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Member of PICT CSI Student Branch.</p>
                        </div>
                        <div className='col-6'>
                            <p><i className="fa fa-certificate"></i>  Member of Pictosocial.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoCurricular;