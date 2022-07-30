import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import useStudent from './useStudent'
import studentService from '../../redux/students/service'

// https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
const InformationStudent = () => {
    const { studentId } = useParams();
    const [updatedInfo, setUpdatedInfo] = React.useState({});

    const {
        info,
        hasError
    } = useStudent(studentId);

    if (hasError) toast.error('Error: failed to load');

    const handleInputChange = (event) => {
        const propertyName = event.target.name;
        const value = event.target.value;

        const currInfo = JSON.parse(JSON.stringify(updatedInfo));
        currInfo[propertyName] = value;
        setUpdatedInfo(currInfo);
    }

    const handleSave = () => {
        console.log(updatedInfo);
        studentService.updateStudent(studentId, updatedInfo)
            .then(() => {
                toast.success('Updated successfully!');
            })
            .catch(() => {
                toast.error('Unable to update')
            })
    }

    React.useEffect(() => {
        setUpdatedInfo(info);
    }, [info])

    return (<>
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label className="labels">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="first name"
                                    value={updatedInfo.first_name || ''}
                                    name='first_name'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={updatedInfo.last_name || ''}
                                    placeholder="surname"
                                    name='last_name'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter phone number"
                                    value={updatedInfo.phone || ''}
                                    name='phone'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Email ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter email id"
                                    value={updatedInfo.email || ''}
                                    name='email'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <button
                                onClick={handleSave}
                                className="btn btn-primary profile-button"
                                type="button"
                            >
                                Save Profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="p-3 py-5">
                        <div className="col-md-12">
                            <label className="labels">Street</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter street"
                                value={updatedInfo.street || ''}
                                name='street'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="labels">City</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter city"
                                value={updatedInfo.city || ''}
                                name='city'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="labels">Province</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter Province"
                                value={updatedInfo.province || ''}
                                name='province'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="labels">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter country"
                                value={updatedInfo.country || ''}
                                name='country'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default InformationStudent
