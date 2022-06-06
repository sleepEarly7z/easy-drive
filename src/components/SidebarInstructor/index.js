import './SidebarInstructor.scss'
// https://codepen.io/FlorinPop17/pen/EJKgKB
const SidebarInstructor = () => {
  return (
      <>
<div class="card-container">
	<span class="pro">3.14/5</span>
	<img class="round" src="https://randomuser.me/api/portraits/men/2.jpg" alt="user" />
	<h3>Yizhou Li</h3>
	<h6>Vancouver</h6>
	<p>xxx@gmail.com</p>
  <p>604-123-4567</p>
	<div class="sidebarstudent-buttons">
    <div>
      <button class="primary">
        My profile
      </button>
    </div>
    <br></br>
    <div>
      <button class="primary">
        View my reviews
      </button>
    </div>
    <br></br>
    <div>
      <button class="primary ghost">
        Logout
      </button>
    </div>
	</div>
	{/* <div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div> */}
</div>
      </>
  )
}

export default SidebarInstructor