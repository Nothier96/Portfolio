import "./contact.css";
const Contact = () => {
  return (
    <section class="contact">
      <div class="content">
        <h2>Contact</h2>
        <p>
          Here you can contact us about anything and we will get back to you as
          quickly as possible
        </p>
      </div>
      <div class="container-1">
        <div class="contactInfo">
          <div class="box">
            <div class="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h2>Address</h2>
              <address>1712 termini drive, Charlotte NC ,28262</address>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h2>Phone</h2>
              <p>+1 980 474 9610</p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h2>Email</h2>
              <p>thiernoamadou_sissoko@yahoo.fr</p>
            </div>
          </div>
        </div>
        <div class="contactForm">
          <form action="form">
            <h2>Send Message</h2>
            <div class="inputBox">
              <label for="form">
                <input type="text" required="required" id="form" />
                <span>Full Name</span>
              </label>
            </div>
            <div class="inputBox">
              <label for="form1">
                <input type="text" required="required" id="form1" />
                <span>Email</span>
              </label>
            </div>
            <div class="inputBox">
              <label for="form2">
                <textarea
                  required="required"
                  id="form2"
                  cols="30"
                  rows="10"
                ></textarea>
                <span>Type your message...</span>
              </label>
            </div>
            <div class="inputBox">
              <input type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
