import React, { Component } from 'react';
import '../createProgram/createProgram.css';
import Filters from '../createProgram/filters/Filters';

class CreateProgram extends Component {
    render() {
        return(
            <div className='main-create-program-div'>
                <div className='classes-div'>
                    <Filters />
                </div>
                <div className='form-div'>
                    <p>div 2</p>
                </div>

            </div>
        );
    }
}

export default CreateProgram;