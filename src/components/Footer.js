import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-4 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>About</li>
                                <li>Education</li>
                                <li>Skills</li>
                                <li>Projects</li>
                                <li>Co-Curricular</li>
                                <li>Hobbies</li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>My Address</h5>
                            <address>
                                8, "MeherShree",<br />
                                Shankar Nagar, Amravati-444606<br />
                                Maharashtra, INDIA.<br />
                                <i className="fa fa-phone fa-lg"></i>: +91 8087957479<br />
                                <i className="fa fa-fax fa-lg"></i>: +91 8087957479<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="satao19.madhura@gmail.com">
                                confusion@food.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;