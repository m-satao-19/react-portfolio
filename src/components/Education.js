import React, { Component } from 'react';

class Education extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
            <div class="row row-content">
                <div class="col-6 col-sm-9 align-self-center">
                    <h2><i className="fa fa-university"></i>Education Details</h2><br/>
                </div>
                <div class="col-6 col-sm-3">
                </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-primary">
                        <tr>
                            <th>&nbsp;</th>
                            <th>School / College</th>
                            <th>Board / Course</th>
                            <th>Percentage / Score</th>
                            <th>Passing Year</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <th>Holy Cross English High School, Amravati</th>
                            <td>SSC</td>
                            <td>96.02</td>
                            <td>2014</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>Bhartiya Mahavidyalay, Amravati</th>
                            <td>HSC</td>
                            <td>91.23</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>Pune Institute of Computer technology, Pune</th>
                            <td>BE</td>
                            <td>9.1</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
    }

}

export default Education;