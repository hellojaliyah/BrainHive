import React from 'react';
import {useParams} from 'react-router-dom'

const ViewCourse = (props) => {
    const { course } = props;
    const { courseId } = useParams();
    return (
        <h3> 
            {course.title}
        </h3>
    );
};

export default ViewCourse;