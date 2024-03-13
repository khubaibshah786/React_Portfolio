import { Button } from "primereact/button";
import "./style.css";
import img from '../../../public/final.png'
function Hero() {
  const downloadResume = () => {
    // Replace 'path_to_your_resume_file.pdf' with the actual path to your resume file
    const resumeUrl = 'src/assets/CV/Khubaib_Ul_Haque_CV.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'KhubaibUlHaquCV.pdf'; // Change 'Your_Name_Resume.pdf' to the desired name of the downloaded file
    anchor.click();
  }
  return (
    <div>
      <div className="p-6">
        <div className="grid">
          <div className="col-12 md:col-4 sm:col-12">
            <div className="p-3 border-round-sm font-bold">
              <span className="block text-6xl font-bold mb-1 drop-in">
                Khubaib <span style={{color: 'var(--primary-color)'}}>Ul</span>-Haque
              </span>

              <p className="mt-0 mb-4 text-700 line-height-3">
                Front-End Developer with proven experience at{" "}
                <span className="text-1xl font-bold text-primary">
                  Scorpion automotive ltd
                </span>{" "}
                and{" "}
                <span className="text-1xl font-bold  text-primary">
                  Marsh Finance Limited
                </span>{" "}
                in helping companies create and maintain a better code base for
                reusability. I am passionate about learning and development with
                a desire to apply skills to a larger development team. I am
                eager to tackle more complex problems and continue to find ways
                to maximise user efficiency.
              </p>
              <a href="https://github.com/khubaibshah786" target="_blank" rel="noopener noreferrer">
                <i className="pi pi-github mr-3" style={{ fontSize: '2rem' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-khubaib-ul-haque-7698bb81/" target="_blank" rel="noopener noreferrer">
                <i className="pi pi-linkedin mr-3" style={{ fontSize: '2rem' }}></i>
              </a>
              <a href="mailto:khubaib_12@hotmail.com">
                <i className="pi pi-envelope mr-3" style={{ fontSize: '2rem' }}></i>
              </a>
              <a href="tel:+1234567890">
                <i className="pi pi-phone" style={{ fontSize: '2rem' }}></i>
              </a>
            </div>
          </div>
          <div className=" text-center col-12 md:col-4 sm:col-12">
          <div className="text-6xl text-primary font-bold mb-3 drop-in hide-on-smaller-screens">&lt; frontEndDeveloper /&gt;</div>
            <img
              src={img}
              alt="hero-1"
              width={500}
              className="hide-on-smaller-screens"
              style={{borderRadius: '50%'}}
            />
            </div>
          <div className="col-12 md:col-4 sm:col-12 text-center">
          <span className="block text-6xl font-bold mb-4 drop-in">
                Download <span style={{color: 'var(--primary-color)'}}>My </span>Resume
              </span>
              <Button label="Resume" onClick={downloadResume} />
            {/* <img
              src="src\assets\img\image.jpeg"
              alt="hero-1"
              className="md:ml-auto block md:h-full hide-on-smaller-screens"
              style={{
                clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
                width: "95vh",
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
