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

      <h1>Contact </h1>
      <br></br>
      <ul className="list-unstyled list-group">
        <li className="list-group-item list-group-item-secondary py-3">
          <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="ryan-horowitz" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/ryan-horowitz?trk=profile-badge">

            </a>
          </div>
        </li>
        <li className="list-group-item list-group-item-secondary py-3">Email: ryan.w.horowitz@gmail.com</li>
        <li className="list-group-item list-group-item-secondary py-3">Phone: 917 584-0900</li>
      </ul>

    </>
  )
}

export default Contact 