import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello my name is</h2>
          <h1 className="i-name">Thierno Sissoko</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Debelopper</div>
              <div className="i-title-item">Front End and Back End</div>
              <div className="i-title-item">Data Manipulation</div>
            </div>
          </div>
          <p className="i-description">
            A motivated coding apprentice seeking an opportunity to gain
            hands-on experience and apply training. Connects well with others,
            builds relationships, and handles tasks with minimal oversight.
            Great multitasker and time manager excited to learn from
            professionals. I am currently working with technologies such as
            HTML, CSS, JAVASCRIPT, NODEJS, MYSQL, and GITHUB. I love reading,
            sports and going to the gym. I also religiously follow the NFL, the
            NBA, and the Uefa Champions League(UCL).
          </p>
        </div>
      </div>
      <div className="i-right">
        {" "}
        <div className="i-img">
          <img src="images/thierno.jpg" alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
