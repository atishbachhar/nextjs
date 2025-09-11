import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="about_section layout_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6 padding_left_0">
                  <div><img src="images/about-img.png" className="about_img"/></div>
               </div>
               <div className="col-md-6">
                  <div className="about_taital_main">
                     <h1 className="about_taital">About Us</h1>
                     <p className="about_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                     <div className="readmore_bt"><a href="#!">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </Layout>
  );
}
