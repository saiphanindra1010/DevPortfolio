import React from "react";
import "./styles/Contactform.css";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ReactQuill from 'react-quill';
  import 'react-quill/dist/quill.snow.css';
// import ContactCss from "./styles/Contactform.module.css";
// import map from "../images/png-clipart-india-globe-map-projection-united-states-orthographic-projection-hotels-chin-world-sphere-removebg-preview.png"
// import "./styles/Skills.css"
import emailjs from '@emailjs/browser';
import { useRef,useState } from 'react';
const notify = () => {
  // toast("Default Notification !");

  toast.success("Success Notification !", {
    // position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });
}


export const Contactform = () => {
  const form = useRef();
  const [editorValue, setEditorValue] = useState('');
  // console.log("this is cvaluue ",editorValue)
  // console.log(form)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9zany2b', 'template_41p4loj', form.current, {publicKey: 'dummylGO3J3-2uZlT_0q06',
        
      })
      .then(
        (result) => {
          console.log(form.current)
            // console.log('SUCCESS!'+JSON.stringify(result));
            // toast.success("Success Notification !", {
            //   // position: "top-center",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "dark"
            // });

            toast('😊Thanks for sending a Message!!!', {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: "Bounce"
              });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast('❌ FAILED Please leave your message to saiphanindra1010@gmail.com', {
            position: "top-right",
            autoClose:10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        
            });
        },
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
      <section  class="form">
        <h2 class="section-title form-title" >Contact Me 📥</h2>
        <div  class="form-sec">


      <div class="input-field">
			<label>Name</label>
      <input class="input" name="user_name" type="text"></input>
      </div>
      <div class="input-field">
	  <label>Subject</label>
      <input class="input2" name="user_subject" type="text"></input>
      </div>
      <div class="input-field">
	  <label>Email</label>
      <input class="input2" name="user_email" type="email"></input>
      </div>



      <div class="input-field">
	  <label>Message</label>
    <ReactQuill    value={editorValue}
      onChange={(value) => setEditorValue(value)}  />
      </div>
      <input
        type="hidden"
        className="form-control"
        name="message"
        defaultValue={editorValue}
      />
      <div class="center-btn">
      <button className="btn cnter"  >Send</button>
      </div>
	  
	    </div>
		

      </section><ToastContainer
position="top-right"
autoClose={1}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
   
      </form>
      
    </>

  )
}
