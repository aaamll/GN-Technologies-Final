
const Grid2 = () => {
    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                <div className="col-span-1 p-10   bg-black border border-gray-700 text-white flex flex-col justify-center items-center text-center">
                    <div>
                    <h1 className="text-xl">Your Dedicated Staff​</h1>
                    <h1 className=" text-xl font-semibold">Inbound Call Centre</h1>
                    </div>
                </div>
                <div className="col-span-1 p-10   bg-black border border-gray-700 text-white flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl">Dedicated workstations with premier call centre amenities.</h1>
                    <h1 className=" text-xl font-semibold">Dedicated Spaces  </h1>
                </div>
                <div className="col-span-1 p-10   bg-black border border-gray-700 text-white flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl">Trained and experienced operators with excellent English fluency​</h1>
                    <h1 className=" text-xl font-semibold"> Fluent English Speaking</h1>
                </div>
                <div className="col-span-1 p-10   bg-black border border-gray-700 text-white flex flex-col justify-center items-center text-center">
                    <h1 className="text-xl">Serving your clients with devotion, responsive attention 24 hours a day​</h1>
                    <h1 className=" text-xl font-semibold">24/7 Shift Covering</h1>
                </div>
            </div>

        </div>
    );
};

export default Grid2;