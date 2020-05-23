import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <ul>
            <li><strong>Video {activeModule.title}</strong></li>
            <li><strong>Aula {activeLesson.title}</strong></li>
        </ul>
    </div>
)

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video)