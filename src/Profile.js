import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div  className="max-w-[1240px] mx-auto" >
    <section id="Contact" className="bg-gray-100 py-8">
      <div className="contact-container max-w-3xl mx-auto">
        <div className="stat-title text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-8">Contact me</h2>
        </div>
        <div className="contact-content-con flex flex-col lg:flex-row">
          <div className="left-contact lg:mr-8 flex flex-col">
            <h4 className="text-xl font-semibold mt-4">Contact me Here</h4>
            <div className="contact-info space-y-2">
              <div className="contact-item flex items-center space-x-2">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i> Location
                </div>
                <p>: Gondia, Maharashtra</p>
              </div>
              <div className="contact-item flex items-center space-x-2">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>: jkatekhaye26@gmail.com</span>
                </p>
              </div>
              <div className="contact-item flex items-center space-x-2">
                <div className="icon">
                  <i className="fas fa-globe-asia"></i>
                  <p>Languages</p>
                </div>
                <p>: English, Hindi, Marathi</p>
              </div>
            </div>
            <div className="contact-icons mt-4 flex space-x-2">
  <a href="#" target="_blank" className="contact-icon p-3 rounded-full bg-gray-500 w-12 h-12 flex items-center justify-center">
    <i className="fa fa-facebook text-white text-2xl"></i>
  </a>
  <a href="#" target="_blank" className="contact-icon p-3 rounded-full bg-gray-500 w-12 h-12 flex items-center justify-center">
    <i className="fa fa-twitter text-white text-2xl"></i>
  </a>
  <a href="https://github.com/2020BCS021" target="_blank" className="contact-icon p-3 rounded-full bg-gray-500 w-12 h-12 flex items-center justify-center">
    <i className="fa fa-github text-white text-2xl"></i>
  </a>
  <a href="https://www.linkedin.com/in/vijaya-katekhaye-32b377214" target="_blank" className="contact-icon p-3 rounded-full bg-gray-500 w-12 h-12 flex items-center justify-center">
    <i className="fa fa-linkedin text-white text-2xl"></i>
  </a>
</div>





          </div>
          <div className="right-contact mt-2">
            <form action="" className="contact-form">
              <div className="input-control12 space-y-2 lg:space-y-0 lg:space-x-2 flex flex-col lg:flex-row">
                <input type="text" required placeholder="YOUR NAME" className="w-full lg:w-1/2 rounded-full py-2 px-4" />
                <input type="email" required placeholder="YOUR EMAIL" className="w-full lg:w-1/2 rounded-full py-2 px-4" />
              </div>
              <div className="input-control mt-2">
                <input type="text" required placeholder="ENTER SUBJECT" className="w-full rounded-full py-2 px-4" />
              </div>
              <div className="input-control mt-2">
                <textarea cols="15" rows="8" placeholder="Message Here..." className="w-full"></textarea>
              </div>
              <button className="btn1 mt-2 bg-gray-500 p-3 rounded-full py-3 px-5" type="submit">
           send <FontAwesomeIcon icon={faPaperPlane} />
      </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
