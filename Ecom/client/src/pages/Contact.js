import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2748597318622!2d79.86147451628458!3d6.927079180679913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259aa16f123fb%3A0xd99a373bc1f636df!2sSigiriya%20Rock%20Fortress!5e0!3m2!1sen!2sus!4v1557505203982!5m2!1sen!2sus';


  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.honda.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 011-234-5670
          </p>
         
        </div>
      </div>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <div>
      <iframe
        title="Google Map"
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
        </div>
        <div className="col-md-4">
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
