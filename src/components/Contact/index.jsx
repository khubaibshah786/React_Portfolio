import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import resume from '../../assets/CV/Khubaib_Ul_Haque_CV.pdf'
export default function Contact() {
  const downloadResume = () => {
    // Replace 'path_to_your_resume_file.pdf' with the actual path to your resume file
    const resumeUrl = resume;
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'KhubaibUlHaquCV.pdf'; // Change 'Your_Name_Resume.pdf' to the desired name of the downloaded file
    anchor.click();
  }
  const toast = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    if (
      !formData.get("firstname") ||
      !formData.get("lastname") ||
      !formData.get("message")
    ) {
      toast.current.show({
        severity: "warn",
        summary: "Incomplete Form",
        detail: "Please fill out all fields.",
        life: 1000,
      });
      return;
    }

    // Clear form fields
    form.reset();
    // Show success message
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail:
        "Thank you for contacting me! I will get back to you as soon as possible.",
      life: 2000,
    });
  };

  return (
    <div className="px-4 py-5 md:px-6 lg:px-8">
      <Toast ref={toast} />
      <div className="border-bottom-1 surface-border">
        <span className="block text-6xl font-bold mb-1 drop-in">
          Contact <span style={{ color: "var(--primary-color)" }}>Form</span>
        </span>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="col-12 md:col-6">
            <p>
              If you want to get in contact with me, please fill out the form
              below and I will get back to you as soon as possible!
            </p>
            <div className="field">
              <label htmlFor="firstname1">Firstname:</label>
              <InputText
                id="firstname1"
                name="firstname"
                type="text"
                style={{ width: "100%" }}
              />
            </div>
            <div className="field">
              <label htmlFor="lastname1">Lastname:</label>
              <InputText
                id="lastname1"
                name="lastname"
                type="text"
                style={{ width: "100%" }}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message:</label>
              <InputTextarea
                id="message"
                name="message"
                rows="4"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-6">
            <Button type="submit" className="p-button-primary mb-3">
              Submit
            </Button>
          </div>
          <div className="col-12">
            <a
              href="https://github.com/khubaibshah786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="pi pi-github mr-3" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-khubaib-ul-haque-7698bb81/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="pi pi-linkedin mr-3"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
            <a href="mailto:khubaib_12@hotmail.com">
              <i
                className="pi pi-envelope mr-3"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
            <a href="tel:+1234567890">
              <i className="pi pi-phone mr-2" style={{ fontSize: "2rem" }}></i>
            </a>
            <a onClick={downloadResume}>
              <i className="pi pi-file-pdf" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
