function Home() {
  return (
    <>
      <div className="container-fluid">

        <h1 className="px-2 text-center name">Ryan Horowitz</h1>
        <h4 className="text-center">Philadelphia based Software engineer</h4>
        <div className="row pt-2">
          <div className="col-6">
            <img className="img-fluid profile-img" src="https://portfolio-public-resources.s3.amazonaws.com/headshot.jpeg" alt="Profile Pic"></img>

          </div>
          <div className="col-6">
            <div className="text-center my-4">
              <p className="py-4">
                Full stack engineer with experience in Software application development.
                <p>
                  Front End | JavaScript, Ruby, React, HTML5, CSS3, Redux, Recoil, React Native. Expo
                </p>
                <p>
                  Back End | Node.js, Express, PostgreSQL, MongoDB, MySQL, RESTful API Development
                </p>
                <p>
                  Testing/Deployment | Jest, Mocha, Chai, AWS: EC2, NGINX
                </p>
                <p>
                  Developer Tools | Vim, Git, npm, Webpack, Babel, Agile Methodology, Scrum, TDD
                </p>
              </p>
              <p>
                From my previous career as a catering chef I have experience leading teams and breaking down large projects into tasks for team members to accomplish.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home