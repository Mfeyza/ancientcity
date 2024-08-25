import React from 'react'


const Footer = () => {
  return (
    <div>
        <div className="container my-5">

<section className="">

<footer className="text-center text-black fs-4" >

  <div className="container  p-5 pb-0">

    <section className="p-2">
      <p className="d-flex justify-content-center align-items-center">
        <span className="me-3">Register for free</span>
        <button type="button" class="btn btn-outline-light btn-rounded">
          Sign up!

                </button>
      </p>
    </section>
   
  </div>
 


  <div className="text-center p-3 fs-3 " >
    © {new Date().getFullYear} MFY
    <a className="text-black" href="https://www.linkedin.com/in/feyza-yıldırım-38b043285/">  Linkedin</a>
  </div>
 
</footer>

</section>

</div>
    </div>
  )
}

export default Footer
