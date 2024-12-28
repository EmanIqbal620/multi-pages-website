
export default function Contact (){
  return(
    <div>
     <section className="contact-form">
      <h2 className="fade-in">Contact US</h2>
      <form>
        <input type="text" placeholder="Full Name" required/>
        <input type="email" placeholder="Email Address" required/>
        <input type="text"  placeholder="Phone Number" />
        <textarea placeholder="your Message" rows={3}></textarea>
        <button type="submit">Send Message</button>
      </form>
     </section>

    </div>
  );
}