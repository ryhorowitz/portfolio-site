import { useEffect } from "react"
function Contact() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js"
    script.type = "text/javascript"
    // script.async = "defer"
    // script.defer 

    document.body.appendChild(script);

    // Clean up by removing the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <>

      <h1 className="px-2 text-center">Contact </h1>
      <br></br>
      {/* <div className="col-lg"> */}
      <ul className="list-unstyled list-group px-5 mx-5">
        <li className="list-group-item list-group-item-secondary py-3">Email:
          <span className="fw-semibold"> ryan.w.horowitz@gmail.com</span>
        </li>
        <li className="list-group-item list-group-item-secondary py-3">Phone:
          <span className="fw-semibold"> (917) 584-0900</span>
        </li>
        <li className="list-group-item list-group-item-secondary py-3">Blogs:
          <span className="fw-semibold">
            <a href="https://medium.com/@ryan.w.horowitz">medium.com/@ryan.w.horowitz</a>
          </span>
        </li>
        <li className="list-group-item list-group-item-secondary py-3">
          <h5>For Resume please see my LinkedIn profile below</h5>
          <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="ryan-horowitz" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/ryan-horowitz?trk=profile-badge"> </a>
          </div>
        </li>
      </ul>
      {/* </div> */}
    </>
  )
}

export default Contact 