import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    updateInstructorAsync,
    deleteInstructorAsync,
} from '../../redux/instructors/thunks'
import toast from 'react-hot-toast'
import axios from 'axios'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useParams } from 'react-router-dom'

// https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631

const InformationInstructor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setgender] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setcountry] = useState('')
    const [company, setCompany] = useState('')
    const [language, setLanguage] = useState('')
    const [experience, setExperience] = useState('')
    const [license, setLicense] = useState('')
    const [description, setDescription] = useState('')
    const [isCarProvided, setIsCarProvided] = useState(false)

    const handlefirst_name = (e) => {
        setfirst_name(e.target.value)
        return first_name
    }
    const handlelast_name = (e) => {
        setlast_name(e.target.value)
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
    const handleLicense = (e) => {
        setLicense(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleIsCarProvided = (e) => {
        setIsCarProvided(e.target.checked)
    }
    const handleCompany = (e) => {
        setCompany(e.target.value)
    }
    const handleCountry = (e) => {
        setcountry(e.target.value)
    }
    const handleGender = (e) => {
        setgender(e.target.value)
    }

    useEffect(() => {
        const sendGet = async () => {
            const res = await axios
                .get(`http://localhost:3001/instructors/${params.instructorId}`)
                .then((res) => {
                    console.log(res.data)
                    console.log(res.data.data)
                    setfirst_name(res.data.data.first_name)
                    setlast_name(res.data.data.last_name)
                    setEmail(res.data.data.email)
                    setPhone(res.data.data.phone)
                    setStreet(res.data.data.street)
                    setCity(res.data.data.city)
                    setProvince(res.data.data.province)
                    setcountry(res.data.data.country)
                    setCompany(res.data.data.company)
                    setLanguage(res.data.data.language)
                    setExperience(res.data.data.experience)
                    setLicense(res.data.data.license)
                    setDescription(res.data.data.description)
                    setIsCarProvided(res.data.data.isCarProvided)
                    setgender(res.data.data.gender)
                })
                .catch((err) => {
                    alert(err)
                })
            // console.log(this.state.allRecipes);
        }
        sendGet()
    }, [])

    const handleSave = (e) => {
        // e.preventDefault()

        let instData = {
            _id: params.instructorId,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
            phone: phone,
            street: street,
            city: city,
            country: country,
            company: company,
            province: province,
            language: language,
            experience: experience,
            license: license,
            description: description,
            isCarProvided: isCarProvided,
        }

        dispatch(updateInstructorAsync(instData))

        console.log(
            first_name,
            last_name,
            email,
            gender,
            phone,
            street,
            city,
            province,
            language,
            experience,
            license,
            description,
            isCarProvided,
        )

        toast.success('Save the changes successfully.')
    }

    const handleDelete = (e) => {
        e.preventDefault()

        let instData = {
            _id: '62d76018f36c6973468ba796',
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            gender: gender,
            street: street,
            city: city,
            province: province,
            language: language,
            experience: experience,
            license: license,
            description: description,
            isCarProvided: isCarProvided,
            country: country,
            company: company,
        }
        dispatch(deleteInstructorAsync(instData._id))

        console.log('delete successfully')

        setTimeout(function () {
            navigate('/explore')
            toast.success('Delete the account successfully.')
        }, 1000)
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
                                        placeholder={'first name'}
                                        onChange={handlefirst_name}
                                        value={first_name || setfirst_name}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="last name"
                                        onChange={handlelast_name}
                                        value={last_name || handlelast_name}
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
                                        value={phone || setPhone}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Gender</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter gender"
                                        onChange={handleGender}
                                        value={gender || setgender}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        onChange={handleEmail}
                                        value={email || setEmail}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Street</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="street"
                                        onChange={handleStreet}
                                        value={street || setStreet}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="city"
                                        onChange={handleCity}
                                        value={city || setCity}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Province</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Province"
                                        onChange={handleProvince}
                                        value={province || setProvince}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Country"
                                        onChange={handleCountry}
                                        value={country || setcountry}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Language</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Language"
                                        onChange={handleLanguage}
                                        value={language || setLanguage}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Company</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company"
                                        onChange={handleCompany}
                                        value={company || setCompany}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Experience</span>
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
                                    value={experience || setExperience}
                                />
                            </div>{' '}
                            <br />
                            <div className="col-md-12">
                                <label className="labels">License</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="License"
                                    onChange={handleLicense}
                                    value={license || setLicense}
                                />
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    onChange={handleDescription}
                                    value={description || setDescription}
                                />
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Car Provided</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Car Provided"
                                />
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <button
                                className="btn btn-primary profile-button me-5"
                                type="button"
                                onClick={handleSave}
                            >
                                Save Profile
                            </button>
                            {/* <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Delete Profile
                                </button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue="Hello World"
        />
      </div>
    </Box> */}
        </>
    )
}

export default InformationInstructor
