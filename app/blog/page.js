import Footer from "../Footer";
import Navbar from "../Navbar";

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      
         <div className="my-5 mx-5 lg:flex md:block sm:block">
         <div className="my-5 mx-5">
            <h1 className="text-2xl sm:text-3xl font-semibold my-2">Vision Statement</h1>
            <p className="text-base sm:text-lg md:text-xl">
            

              "To be the global leader in outsourcing solutions, driving innovation and excellence to elevate
              service quality and deliver exceptional value to businesses and their customers."
            </p>
          </div>
          <img
            src="blogPic2.jpeg"
            width={600}
            height={600}
            className=" shadow-lg"
          />
         
        </div>
     
        <div className="my-5 mx-5 lg:flex md:block sm:block">
          <img
            src="blogPic.jpeg"
            width={600}
            height={600}
            className=" shadow-lg"
          />
          <div className="my-5 mx-5">
            <h1 className="text-2xl sm:text-3xl font-semibold my-2">Mission Statement</h1>
            <p className="text-base sm:text-lg md:text-xl">
            "Our mission is to empower businesses worldwide through comprehensive, tailored outsourcing
              services that optimize operations, enhance customer service, and drive sustainable growth.
              By integrating advanced technology with deep industry expertise, we are committed to delivering
              exceptional service and fostering long-term partnerships."
            </p>
          </div>
        </div>
      

      <Footer />
    </div>
  );
};

export default Blog;