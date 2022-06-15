import './index.scss'
// https://codepen.io/FlorinPop17/pen/EJKgKB
import 'bootstrap/dist/css/bootstrap.min.css'
const InstructorViewedReviews = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center row border border-dark">
                    <div className="col-md-6">
                        <div className="p-3 bg-white rounded">
                            <h6>Reviews[1]</h6>
                            <div className="review mt-4">
                                <div className="d-flex flex-row comment-user">
                                    <img
                                        className="rounded"
                                        alt="rounded"
                                        src="https://i.imgur.com/xxJl1D7.jpg"
                                        width="40"
                                    />
                                    <div className="ml-2">
                                        <div className="d-flex flex-row align-items-center">
                                            <span className="name font-weight-bold">
                                                Hui jhong
                                            </span>
                                            <span className="dot"></span>
                                            <span className="date">
                                                12 Aug 2020
                                            </span>
                                        </div>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="comment-text">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters, as
                                        opposed to using 'Content here, content
                                        here', making it look like readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstructorViewedReviews
