import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateInstructorAsync } from '../../redux/instructors/thunks';
// https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
const InformationInstructor = () => {
    const dispatch = useDispatch();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [language, setLanguage] = useState('')
    const [experience, setExperience] = useState('')

    const handleFname = (e) => {
        setFname(e.target.value)
    }
    const handleLname = (e) => {
        setLname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleStreet = (e) => {
        setStreet(e.target.value)
    }
    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const handleProvince = (e) => {
        setProvince(e.target.value)
    }
    const handleLanguage = (e) => {
        setLanguage(e.target.value)
    }
    const handleExperience = (e) => {
        setExperience(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let instData = {
            id : "62a56dccfc13ae05bf00046a",
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            street: street,
            city: city,
            province: province,
            language: language,
            experience: experience
        }
        dispatch(updateInstructorAsync(instData))
        console.log(fname, lname, email, phone, street, city, province, language, experience)
    }
    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    {/* <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div> */}
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        onChange={handleFname}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="last name"
                                        onChange={handleLname}
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
                                        onChange={handlePhone}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        Street
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="street"
                                        onChange={handleStreet}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="city"
                                        onChange={handleCity}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Postcode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Postcode"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Province</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Province"
                                        onChange={handleProvince}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Language</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Language"
                                        onChange={handleLanguage}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        onChange={handleEmail}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">
                                        Car Provided
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="country"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">
                                        Pick-up/Drop-off
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="state"
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Experience</span>
                                <span className="border px-3 p-1 add-experience">
                                    <i className="fa fa-plus"></i>
                                    &nbsp;Experience
                                </span>
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">
                                    Experience in teaching
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="experience"
                                    onChange={handleExperience}
                                />
                            </div>{' '}
                            <br />
                            <div className="col-md-12">
                                <label className="labels">className5/7</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="additional details"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationInstructor