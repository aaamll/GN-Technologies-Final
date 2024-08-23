import React from 'react';



const Grid = () => {
  return (
    <div>
     <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  <div className="shadow-lg col-span-1 p-14 border border-gray-300 flex flex-col justify-center items-center text-center">
  <svg className="text-orange-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
  </svg>
  <h1 className="text-2xl mt-4">Great Team</h1>
  <p className="mt-2  text-xl text-gray-600">Our skilled team is committed to delivering exceptional customer service, ensuring your customers receive quality support.</p>
</div>
<div className=" col-span-1 p-14 border shadow-lg border-gray-300 flex flex-col justify-center items-center text-center">
<svg
  className="text-orange-500 w-12 h-12"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 8v4h4M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z"
  />
</svg>

  <h1 className="text-2xl mt-4">24/7 Operations</h1>
  <p className="mt-2  text-xl text-gray-600">Gain a competitive edge with round-the-clock availability to capture new business opportunities.</p>
</div>
<div className="col-span-1 p-14 border shadow-lg border-gray-300 flex flex-col justify-center items-center text-center">
<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-graph-up-arrow h-12 text-orange-500 w-12" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
</svg>

  <h1 className="text-2xl mt-4">Pay As You Grow</h1>
  <p className="mt-2  text-xl text-gray-600">Easily scale your team without the hassle of recruitment and training, ensuring flexibility as your business evolves.</p>
</div>
<div className="col-span-1 p-14 border shadow-lg border-gray-300 flex flex-col justify-center items-center text-center">
<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-rocket-takeoff-fill text-orange-500 w-12 h-12" viewBox="0 0 16 16">
  <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
  <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
</svg>
  <h1 className="text-2xl mt-4">Premier Customer Service</h1>
  <p className="mt-2  text-xl text-gray-600">Enchance Customer satisfaction with prompt responses and continuous response from our skilled professionals.</p>
</div>
  </div>
     </div>

    </div>
  );
};

export default Grid;