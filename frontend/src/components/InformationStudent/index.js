import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
const InformationStudent = () => {
    const dispatch = useDispatch()

    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [province, setprovince] = useState('')
    const [country, setcountry] = useState('')

    const handlefirst_name = (e) => {
        setfirst_name(e.target.value)
    }
    const handlelast_name = (e) => {
        setlast_name(e.target.value)
    }
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handlephone = (e) => {
        setphone(e.target.value)
    }
    const handlestreet = (e) => {
        setstreet(e.target.value)
    }
    const handlecity = (e) => {
        setcity(e.target.value)
    }
    const handleprovince = (e) => {
        setprovince(e.target.value)
    }
    const handlecountry = (e) => {
        setcountry(e.target.value)
    }
    const handleOnchange = (e) => {
        console.log(e.target.value)
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
                                    <label className="labels">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                        value= ""
                                        onChange={handlefirst_name}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value=""
                                        placeholder="surname"
                                        onChange={handlelast_name}
                                    
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
                                        value=""
                                        onChange={handlephone}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        Street
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter street"
                                        value=""
                                        onChange={handlestreet}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter city"
                                        value=""
                                        onChange={handlecity}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Province</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Province"
                                        value=""
                                        onChange={handleprovince}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter country"
                                        value=""
                                        onChange={handlecountry}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Area</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        value=""
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        value=""
                                        onChange={handleemail}
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
                                        value=""
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">
                                        Pick-up/Drop-off
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value=""
                                        placeholder="state"
                                        onChange={handleOnchange}
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
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
                                    value=""
                                    onChange={handleOnchange}
                                />
                            </div>{' '}
                            <br />
                            <div className="col-md-12">
                                <label className="labels">className5/7</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="additional details"
                                    value=""
                                    onChange={handleOnchange}
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
