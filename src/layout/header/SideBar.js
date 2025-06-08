import { Fragment, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SideBar = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_weboria",
        "template_weboria",
        formRef.current,
        "fqFetRNUL8JSkziMq"
      )
      .then(
        (result) => {
          console.log("Message envoyé :", result.text);
          toast.success("✅ Message envoyé avec succès !");
          e.target.reset();
        },
        (error) => {
          console.error("Erreur d’envoi :", error.text);
          toast.error("❌ Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Contactez Nous</h4>
          </div>

          {/* Appointment Form */}
          <div className="appointment-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Nom" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Adresse Mail" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" rows={5} required />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {/* Social Icons */}
          <div className="social-style-one">
            <a href="https://www.linkedin.com/company/weboriacanada">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://github.com/webforgecanada">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SideBar;
