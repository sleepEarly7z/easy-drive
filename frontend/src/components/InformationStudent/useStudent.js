import React from 'react';
import studentService from '../../redux/students/service';
import instructorService from '../../redux/instructors/service';

/**
 * Retrive student info and instructors followed by the stdudent
 * @param {*} studentId 
 */
const useStudent = (studentId) => {
    const [loading, setLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    const [info, setInfo] = React.useState({});
    const [followedInstructors, setFollowedInstructors] = React.useState([]);

    const getInstructorInfos = async (ids) => {
        if (!ids) {
            setLoading(false);
            return;
        }

        const instructors = [];

        for (const id of ids) {
            if (!id) {
                setHasError(true);
                setLoading(false);
                break;
            }

            const { data, error } = await instructorService.getInstructorById(id);

            if (error) {
                setHasError(true);
                setLoading(false);
                break;
            }

            const name = `${data.first_name} ${data.last_name}`;
            const instructor = {
                name,
                instuctorId: id
            }

            instructors.push(instructor);
        }
        setFollowedInstructors(instructors);
        setLoading(false);
    };

    /**
     * Load the info first and then get instructor infos
     */
    React.useEffect(() => {
        studentService.getStudentById(studentId)
            .then((result) => {
                setInfo(result.info);
                getInstructorInfos(result.info.followedInstructors);
            })
            .catch(() => {
                setHasError(true);
                setLoading(false);
            })
    })

    return {
        info,
        followedInstructors,
        loading,
        hasError
    }
}
export default useStudent;