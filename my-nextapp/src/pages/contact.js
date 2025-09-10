import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </Layout>
  );
}
