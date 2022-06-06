import './index.scss'
// https://codepen.io/FlorinPop17/pen/EJKgKB
import 'bootstrap/dist/css/bootstrap.min.css'
const InstructorViewedReviews = () => {
  return (
      <>
<div class="container mt-5">
        <div class="d-flex justify-content-center row border border-dark">
            <div class="col-md-6">
                <div class="p-3 bg-white rounded">
                    <h6>Reviews[1]</h6>
                    <div class="review mt-4">
                        <div class="d-flex flex-row comment-user"><img class="rounded" src="https://i.imgur.com/xxJl1D7.jpg" width="40"/>
                            <div class="ml-2">
                                <div class="d-flex flex-row align-items-center"><span class="name font-weight-bold">Hui jhong</span><span class="dot"></span><span class="date">12 Aug 2020</span></div>
                                <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p class="comment-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                                to using 'Content here, content here', making it look like readable English.</p>
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