import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
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
    </Layout>
  );
}
