import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="banner_section layout_padding">
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="banner_taital_main">
                              <h1 className="banner_taital">Welcome to Betty Beauty Salon!</h1>
                              <p className="banner_text">Everthing is possible with our salon</p>
                              <div className="appointment_bt"><a href="#!">Call for an appointment</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="banner_taital_main">
                              <h1 className="banner_taital">Everthing is possible with our salon!</h1>
                              <p className="banner_text">We make the best makeup in 515 West Ave Norwalk</p>
                              <div className="appointment_bt"><a href="#!">Call for an appointment</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="banner_taital_main">
                              <h1 className="banner_taital">Everthing is possible with our salon!</h1>
                              <p className="banner_text">We make the best hairdressing in 515 West Ave Norwalk</p>
                              <div className="appointment_bt"><a href="#!">Call for an appointment</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left" style={{ fontSize: 24 }}></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right" style={{ fontSize: 24 }}></i>
            </a>
         </div>
      </div>
      <div className="gallery_section layout_padding">
         <div className="container">
            <h1 className="gallery_taital">Style Cutting</h1>
            <div className="gallery_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-2.png" className="image_8" style={{ width: "100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-3.png" className="image_8" style={{ width: "100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-4.png" className="image_8" style={{ width: "100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-5.png" className="image_8" style={{ width: "100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-6.png" className="image_8" style={{ width: "100%" }} />
                        <div className="text_main">
                           <div className="seemore_text">Hair Stylis</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="image_main">
                        <img src="images/img-7.png" className="image_8" style={{ width: "100%" }} />
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
      <div className="blog_section layout_padding">
         <div className="container">
            <h1 className="blog_taital">Our Blog</h1>
            <div className="blog_box">
               <div className="blog_box_left">
                  <div className="hover01 column">
                     <figure><img src="images/blog-img.png" /></figure>
                  </div>
               </div>
               <div className="blog_box_right">
                  <h2 className="good_text">Good Hair Style</h2>
                  <p className="post_text">Post by: Hair <span className="date_text">31 March</span></p>
                  <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                  <div className="read_bt_1"><a href="#!">Read More</a></div>
               </div>
            </div>
         </div>
      </div>
      <div className="about_section layout_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6 padding_left_0">
                  <div><img src="images/about-img.png" className="about_img" /></div>
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
 
      <div className="contact_section layout_padding">
         <div className="container">
            <h1 className="contact_taital">Contact Us</h1>
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <input type="text" className="email_text" placeholder="Name" name="Name" />
                  </div>
                  <div className="col-md-6">
                     <input type="text" className="email_text" placeholder="Phone Number" name="Phone Number" />
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <input id="datepicker" placeholder="Select Date" width="270" />
                  </div>
                  <div className="col-md-6">
                     <input id="timepicker" placeholder="Time" width="270" />
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <form>
                        <div className="form-group">
                           <select className="form-control" id="">
                              <option>Price List</option>
                              <option>200</option>
                              <option>300</option>
                              <option>400</option>
                              <option>500</option>
                           </select>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6">
                     <form>
                        <div className="form-group">
                           <select className="form-control" id="">
                              <option>Hair Styles</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                           </select>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="book_btn"><a href="#!">Book Now</a></div>
         </div>
      </div>

      <div className="client_section layout_padding">
         <div className="container">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="client_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="section-head">
                                 <h3 className="client_taital">What our clients say about</h3>
                                 <p className="client_text">Quisque consectetur massa id ipsum soltudin ultrices. Pellentesque the sceisque justo.</p>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="client_box">
                                 <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="client_main">
                                    <div className="client_img"><img src="images/client-img1.png" /></div>
                                    <div className="client_taital_main">
                                       <h6 className="client_name">Jonson</h6>
                                       <h6 className="repeat_text">Internet tend to repeat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="client_box">
                                 <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="client_main">
                                    <div className="client_img"><img src="images/client-img1.png" /></div>
                                    <div className="client_taital_main">
                                       <h6 className="client_name">Jonson</h6>
                                       <h6 className="repeat_text">Internet tend to repeat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="client_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="section-head">
                                 <h3 className="client_taital">What our clients say about</h3>
                                 <p className="client_text">Quisque consectetur massa id ipsum soltudin ultrices. Pellentesque the sceisque justo.</p>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="client_box">
                                 <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="client_main">
                                    <div className="client_img"><img src="images/client-img1.png" /></div>
                                    <div className="client_taital_main">
                                       <h6 className="client_name">Jonson</h6>
                                       <h6 className="repeat_text">Internet tend to repeat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="client_box">
                                 <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="client_main">
                                    <div className="client_img"><img src="images/client-img1.png" /></div>
                                    <div className="client_taital_main">
                                       <h6 className="client_name">Jonson</h6>
                                       <h6 className="repeat_text">Internet tend to repeat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="client_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="section-head">
                                 <h3 className="client_taital">What our clients say about</h3>
                                 <p className="client_text">Quisque consectetur massa id ipsum soltudin ultrices. Pellentesque the sceisque justo.</p>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="client_box">
                                 <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="client_main">
                                    <div className="client_img"><img src="images/client-img1.png" /></div>
                                    <div className="client_taital_main">
                                       <h6 className="client_name">Jonson</h6>
                                       <h6 className="repeat_text">Internet tend to repeat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="client_box">
                                 <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 <div className="client_main">
                                    <div className="client_img"><img src="images/client-img1.png" /></div>
                                    <div className="client_taital_main">
                                       <h6 className="client_name">Jonson</h6>
                                       <h6 className="repeat_text">Internet tend to repeat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-angle-left"></i>
               </a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
      </div>

      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">About</h3>
                  <p className="footer_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h3 className="useful_text">Menu</h3>
                  <div className="footer_menu">
                     <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Useful Link</h1>
                  <p className="dummy_text">Adipiscing Elit, sed do Eiusmod Tempor incididunt </p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h1 className="useful_text">Contact Us</h1>
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#!">
                           <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_10">Address : Loram Ipusm</span>
                           </a>
                        </li>
                        <li>
                           <a href="#!">
                           <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">Call : +01 1234567890</span>
                           </a>
                        </li>
                        <li>
                           <a href="#!">
                           <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">Email : demo@gmail.com</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </Layout>
  );
}
