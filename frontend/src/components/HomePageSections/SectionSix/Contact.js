import React, { useState, useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

function Contact() {
    const form = useRef()

    const [state, setState] = useState({
        name: '',
        email: '',
        title: '',
        message: '',
    })

    const { name, email, title, message } = state

    const sendEmail = (e) => {
        e.preventDefault()
        if (!name || !email || !title || !message) {
            toast.error('Please provide value in each input field')
        } else {
            emailjs
                .sendForm(
                    'service_sfbul2h',
                    'template_w46unwe',
                    form.current,
                    '4p6bkvBs2PDpNapX9',
                )
                .then(
                    (result) => {
                        console.log(result.text)
                        setState({
                            name: '',
                            email: '',
                            title: '',
                            message: '',
                        })
                        toast.success('Message has been sent successfully!')
                    },
                    (error) => {
                        console.log(error.text)
                        toast.success('Message error')
                    },
                )
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    return (
        <section className="contact-section_contactcomponent">
            <div className="section_title">
                Contact Us
                <div className='section_title_divider'><div className="solid" /></div>
            </div>
            <div className="container_contactcomponent">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper_contactcomponent">
                            <div className="row no-gutters">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="info-wrap_contactcomponent w-100 p-lg-5 p-4 img">
                                        <h3 className="title_contactcomponent">
                                            Contact
                                        </h3>
                                        <p className="openforsuggestions mb-4">
                                            We're open for any suggestion or
                                            just to have a chat
                                        </p>
                                        <div className="dbox_contactcomponent w-100 d-flex align-items-start">
                                            <div className="icon_contactcomponent d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text_contactcomponent pl-3">
                                                <p className="mt-3">
                                                    <span>Address:</span>
                                                    <a href="https://www.google.com/maps">
                                                        123 Street South
                                                        Vancouver
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox_contactcomponent w-100 d-flex align-items-center">
                                            <div className="icon_contactcomponent d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text_contactcomponent pl-3">
                                                <p>
                                                    <span>Phone:</span>
                                                    <a href="tel://123456789">
                                                        +1235 2355 98
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox_contactcomponent w-100 d-flex align-items-center">
                                            <div className="icon_contactcomponent d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text_contactcomponent pl-3">
                                                <p>
                                                    <span>Email:</span>
                                                    <a href="mailto:info@yoursite.com">
                                                        info@yoursite.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox_contactcomponent w-100 d-flex align-items-center">
                                            <div className="icon_contactcomponent d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                            <div className="text_contactcomponent pl-3">
                                                <p>
                                                    <span>Website:</span>
                                                    <a href="# ">
                                                        yoursite.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-wrap_contactcomponent w-100 p-lg-5 p-5">
                                        <div className="title_contactcomponent mb-4">
                                            Get in touch
                                        </div>
                                        <form
                                            ref={form}
                                            id="contactForm_contactcomponent"
                                            className="contactForm_contactcomponent"
                                            onSubmit={sendEmail}
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group_contactcomponent">
                                                        <input
                                                            type="text"
                                                            className="form-control_contactcomponent"
                                                            name="name"
                                                            placeholder="Name"
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            value={name}
                                                            style={{
                                                                width: '400px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group_contactcomponent">
                                                        <input
                                                            type="email"
                                                            className="form-control_contactcomponent"
                                                            name="email"
                                                            placeholder="Email"
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            value={email}
                                                            style={{
                                                                width: '400px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group_contactcomponent">
                                                        <input
                                                            type="text"
                                                            className="form-control_contactcomponent"
                                                            name="title"
                                                            placeholder="Title"
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            value={title}
                                                            style={{
                                                                width: '400px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group_contactcomponent">
                                                        <textarea
                                                            type="text"
                                                            className="form-control_contactcomponent"
                                                            name="message"
                                                            placeholder="Message"
                                                            cols="30"
                                                            rows="6"
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            value={message}
                                                            style={{
                                                                width: '500px',
                                                                marginTop:
                                                                    '20px',
                                                            }}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group-btn_contactcomponent">
                                                        <button
                                                            type="submit"
                                                            className="btn_contactcomponent btn-primary_contactcomponent"
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
