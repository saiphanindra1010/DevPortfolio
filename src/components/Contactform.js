import React from "react";
// import ContactCss from"./styles/Contactform.css";
import ContactCss from "./styles/Contactform.module.css";
import { ToastContainer } from "react-toastify";


export const Contactform = () => {
  return (

  <div className={ContactCss.btn}>
    <div className={ContactCss.map}>ddd</div>
   {/* Contact form  */}
    <div className={ContactCss.form}><div className="container">

	<div className="row">
			<h4 >We'd love to hear from you!</h4>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" >
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className={ContactCss.submit_btn}>Send Message</div>
			</div>
	</div>
</div>
</div>
  </div>
  )
}
