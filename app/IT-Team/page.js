import Footer from "../Footer";
import Navbar from "../Navbar";

const IT = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl font-extrabold my-3">Our Operation and Our Dedicated Promise to you</h1>
            <h2 className="text-center text-xl lg:mx-56 px-10 my-3">From Planning, Recruiting, Training to Delivery, we provide unbeatable 
                outsourcing services which are not only cost effective but surpass the average UK skillset.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-16 my-10">
                <div className="flex flex-col justify-center items-center text-center">
                    <img 
                    src="quality.webp" 
                    className="bg-orange-400 p-3 my-2"/>
                    <p>24/7 Support Guaranteed</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <img 
                    src="training.webp" 
                    className="bg-orange-400 p-3 my-2"/>
                    <p>IT Support and advice Via Teams Meetings, whenever you need us</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <img 
                    src="meeting.webp" 
                    className="bg-orange-400 p-3 my-2"/>
                    <p>Internet Power backups implemented so you are never offline</p>
                </div>
                <div className="sm:col-span-2 lg:col-span-2 flex flex-col justify-center items-center text-center">
                    <img 
                    src="space.webp" 
                    className="bg-orange-400 p-3 my-2"/>
                    <p>Full onboarding support optimization</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <img 
                    src="bonus.webp" 
                    className="bg-orange-400 p-3 my-2"/>
                    <p>Web design, creation and optimization available</p>
                </div>
            </div>
            <hr/>
            <Footer/>
        </div>
    );
};

export default IT;
