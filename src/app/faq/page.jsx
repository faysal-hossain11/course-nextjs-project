import Accordient from "@/components/Accordient";
import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import React from "react";

const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Faq" />
      {/* end the  breadcurmb component*/}

      {/* start the faq section */}
      <div className="faq-section ptb-100">
            <div className="container">
                <div className="main-max-width">
                    <div className="section-title mb-50 text-center">
                        <h4 className="sub-title mb-25"># Benefits</h4>
                        <h2 className="mb-0 fs-35">A Few Frequently Asked questions</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-content">
                                <Accordient />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-content">
                                <Accordient />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* end the faq section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe componet */}
                    
      {/* start the  footer component*/}
      <Footer1 />
      {/* end the footer componet */}

    </>
  );
};

export default page;
