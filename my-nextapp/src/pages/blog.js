import Layout from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
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
      </Layout>
  );
}