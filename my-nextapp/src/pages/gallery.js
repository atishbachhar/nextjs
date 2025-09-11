
import Layout from "@/components/Layout";

export default function Gallery() {
  return (
    <Layout>
<div className="gallery_section layout_padding">
         <div className="container">
            <h1 className="gallery_taital">Style Cutting</h1>
            <div className="gallery_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-2.png" className="image_8" style={{width:"100%" }} /> 
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-3.png" className="image_8" style={{width:"100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-4.png" className="image_8" style={{width:"100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-5.png" className="image_8" style={{width:"100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-6.png" className="image_8" style={{width:"100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-7.png" className="image_8" style={{width:"100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="seemore_bt"><a href="#!">See More</a></div>
         </div>
      </div>

          </Layout>
        );
      }
      