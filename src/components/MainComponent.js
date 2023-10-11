import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Education from './Education';
import Skills from './Skills';
import Projects from "./Projects";
import CoCurricular from "./CoCurricular";

class Main extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Education />
                <Skills />
                <Projects />
                <CoCurricular/>
                <Footer />
            </div>

        );
    }
}

export default Main;
