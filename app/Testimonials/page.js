import Footer from "../Footer";
import Navbar from "../Navbar";

const Testimonials = () => {
  return (
    <div id="Testimonials">
      <Navbar />
      <h1 className="text-center my-5 underline font-serif font-extrabold text-4xl">Client Testimonials and Reviews</h1>
      <div className=" p-10 lg:mx-10">
        <h1 className="text-2xl mx-10">
          
          "I've had the pleasure of working with the team at GN Technologies for several years now, and
          I must say, their professionalism is truly exceptional." 
        </h1>
        <div className="text-center justify-center items-center flex my-5">
           <img src="testimonial1.png"
           width={100} height={100}
           className="rounded-full"/>
           <span className="text-xl  mx-10 px-2 rounded-md bg-gray-400 text-white">Sarah William</span>
        </div>
        <h1 className="text-2xl  mx-10">"The team at GN Technologies is a true example of professionalism. Knowledgeable, courteous, and
          always willing to help, they've exceeded our expectations in every way"</h1>
          <div className="text-center justify-center items-center flex my-5">
           <img src="te.png"
           width={100} height={100}
           className="rounded-full"/>
           <span className="text-xl  mx-10 px-2 rounded-md bg-gray-400 text-white">Jayden Anthony</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;