import React, { Component } from 'react';

class SideNav extends Component {

  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <ul>
            <li><a href="https://weber.edu/">My Students</a></li>
            <li><a href="https://www.khanacademy.org/">Take Quiz</a></li>
            <li><a href="https://www.youtube.com/">Tutorials</a></li>
            <li><a href="https://quizlet.com/">Build Your Own Quiz</a></li>
            <li><a href="https://www.coursera.org/">Resources</a></li>
            <li><a href="https://www.twilio.com/quest">Find a Tutor</a></li>
        </ul>
      </div>
    );
  }
}

export default SideNav;