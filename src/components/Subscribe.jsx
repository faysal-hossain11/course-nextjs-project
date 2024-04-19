import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe-area position-relative z-1">
      <div className="container">
        <div className="main-max-width">
          <div className="subscribe-info">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="content">
                  <h3 className="fs-20 mb-20">
                    Sign up to get The Latest Updates
                  </h3>
                  <p>
                    Our approach to it is unique around how to work and how to
                    get hands-on with you like
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="subscribe-from d-flex align-items-center">
                  <input
                    className="from-control"
                    type="email"
                    placeholder="type your email address"
                    required=""
                  />
                  <button className="btn style-one" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
