/**
 * Created by Hugh on 10/12/2018.
 */

import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <h2>About</h2>
                <div>
                    <h4>Intro</h4>
                    Highplume is designed to give immediate and continuous feedback to your fellow teammates.  Making the task effortless allows more feedback and facilitates giving
                    feedback on the spot, as it happens.  The feedback is anonymous.  You give feedback by giving a virtual "Thumbs Up" (TU) to teammates as you see them perform a
                    noteworthy task or exhibit a company value.  TUs have different types and are based on the values your company has chosen.  Each TU type may have a different
                    weight determined by your company.  Your percentage placement against all teammates is available to you at all times.  Each teammate can only see her/his own
                    placement.  The placement is only there to help you gauge how well you represent each company value.
                    <br/><br/>
                    Each company chooses values that best reflect the company's culture and mission.  Each teammate should try to "live" those values.
                </div>

            </div>
        );
    }
}

export default About;
