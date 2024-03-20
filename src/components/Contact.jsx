import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <h4>
          Contact <span>Here</span>
        </h4>

        <form>
          <div>
            <input type="text" name="name" placeholder="Enter your Full Name" />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Share your excitement with us"
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Enter your comments...."
              rows="6 "
            ></textarea>
          </div>
          <div>
            <button class="contact-button">Send a Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
