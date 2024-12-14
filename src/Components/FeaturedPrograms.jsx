// // src/components/FeaturedPrograms.jsx
// import React from 'react';

// const FeaturedPrograms = () => {
//   return (
//     <section id="programs" className="py-16 px-6 bg-gray-100">
//       <div className="max-w-7xl mx-auto text-center">
//         <h3 className="text-3xl font-extrabold text-blue-600">Featured Programs</h3>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
//             <img src="https://assets-global.website-files.com/56b2d0222988c4230fc7de41/622be8b56e8d793e980a5dcd_conner-baker-7FC-84Ap_IU-unsplash.jpg" alt="Program 1" className="w-full h-48 object-cover rounded-md" />
//             <h4 className="text-xl font-semibold mt-4">Program 1</h4>
//             <p className="mt-2">This program helps students develop essential skills for success.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
//             <img src="http://easypd.in/wp-content/uploads/2020/08/5-1.jpg" alt="Program 2" className="w-full h-48 object-cover rounded-md" />
//             <h4 className="text-xl font-semibold mt-4">Program 2</h4>
//             <p className="mt-2">An exciting program focused on innovation and technology.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
//             <img src="https://tse3.mm.bing.net/th?id=OIP.8HZ0VNSYzcchqdEIiqJWYAAAAA&pid=Api&P=0&h=220" alt="Program 3" className="w-full h-48 object-cover rounded-md" />
//             <h4 className="text-xl font-semibold mt-4">Program 3</h4>
//             <p className="mt-2">A comprehensive program designed to enhance leadership skills.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedPrograms;
import React from "react";

const programs = [
  {
    id: 1,
    title: "Program 1",
    description: "This program helps students develop essential skills for success.",
    image:
      "https://assets-global.website-files.com/56b2d0222988c4230fc7de41/622be8b56e8d793e980a5dcd_conner-baker-7FC-84Ap_IU-unsplash.jpg",
  },
  {
    id: 2,
    title: "Program 2",
    description: "An exciting program focused on innovation and technology.",
    image: "http://easypd.in/wp-content/uploads/2020/08/5-1.jpg",
  },
  {
    id: 3,
    title: "Program 3",
    description: "A comprehensive program designed to enhance leadership skills.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.8HZ0VNSYzcchqdEIiqJWYAAAAA&pid=Api&P=0&h=220",
  },
];

const FeaturedPrograms = () => {
  return (
    <section id="programs" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h3 className="text-4xl font-extrabold text-blue-600 mb-6">
          Featured Programs
        </h3>

        {/* Programs Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              {/* Program Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />

              {/* Program Details */}
              <div className="p-6 text-left">
                <h4 className="text-2xl font-bold text-gray-800">{program.title}</h4>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
