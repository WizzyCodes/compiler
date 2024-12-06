import add from "./assets/download (1).png";
import pic from "./assets/download.png";
import "../src/style.css";
// import down from "./assets/down-arrow-removebg-preview.png";
import caret from "./alllogo/dropdown.svg";
import play from "./alllogo/PLAY.svg";
import dot from "./alllogo/threedot.svg";
const App = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "60px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "21px",
          backgroundColor: "rgb(245, 245, 245)",
        }}
      >
        <div
          style={{
            width: "99%",
            height: "100%",
            display: "flex",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "80px",
            }}
          >
            <p style={{ color: "rgb(80, 99, 240)" }}>index.html</p>
            <p>style.css</p>
            <p>script.js</p>
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              src={pic}
              alt=""
            />
            <img style={{ width: "20px", height: "20px" }} src={add} alt="" />
          </div>
          <div
            style={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "16px",
                padding: "3px 0px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "rgb(80, 99, 240)",
              }}
            >
              HTML Hello World
            </h1>
          </div>
          <div
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgb(245, 245, 245)",
            }}
          >
            <div className="new">
              <p>New</p>
            </div>
            <button
              style={{
                // margin: "0px 10px 0px 0px",
                padding: "4px 10px",
                fontWeight: "500",
                textTransform: "uppercase",
                backgroundColor: "blue",
                border: "none",
                borderRadius: "5px",
                color: "white",
                lineHeight: "23px",
                display: "flex",
                alignItems: "center",
              }}
            >
              HTML{" "}
              <img
                style={{ width: "30px", height: "30px" }}
                src={caret}
                alt=""
              />
            </button>

            <button
              style={{
                // margin: "0px 10px 0px 0px",
                padding: "4px 5px",
                fontWeight: "500",
                textTransform: "uppercase",
                backgroundColor: "rgb(233,30,99)",
                border: "none",
                borderRadius: "5px",
                color: "white",
                lineHeight: "23px",
                display: "flex",
                alignItems: "center",
              }}
            >
              RUN{" "}
              <img
                style={{ width: "30px", height: "30px" }}
                src={play}
                alt=""
              />
            </button>
            <div className="new1">
              <img src={dot} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
