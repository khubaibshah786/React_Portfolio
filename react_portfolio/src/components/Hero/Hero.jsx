import { Button } from "primereact/button";
import "./style.css";

function Hero() {
  return (
    <div>
      <div className="p-6">
        <div className="grid">
          <div className="col-12 md:col-4 sm:col-12">
            <div className="p-3 border-round-sm font-bold">
              <span className="block text-6xl font-bold mb-1 drop-in">
                Khubaib <span className="text-primary">Ul</span>-Haque
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
              <i className="pi pi-github mr-3" style={{ fontSize: '2rem' }}></i>
              <i className="pi pi-linkedin mr-3" style={{ fontSize: '2rem' }}></i>
              <i className="pi pi-envelope mr-3" style={{ fontSize: '2rem' }}></i>
              <i className="pi pi-phone" style={{ fontSize: '2rem' }}></i>
            </div>
          </div>
          <div className="col-6 md:col-4 sm:col-6">
            </div>
          <div className="col-6 md:col-4 sm:col-6 text-center">
          <span className="block text-6xl font-bold mb-4 drop-in">
                Download <span className="text-primary">My </span>Resume
              </span>
              <Button label="Resume" />
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
