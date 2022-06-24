import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
const InformationInstructor = () => {
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
                                        value=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Surname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value=""
                                        placeholder="surname"
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
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        Address Line 1
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 1"
                                        value=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        Address Line 2
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        value=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Postcode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        value=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Province</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        value=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Area</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter address line 2"
                                        value=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        value=""
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
