import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Student 1",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7G_WlWFRa7uxMxCZZ0qQngHaE7&pid=Api&P=0&h=220",
    feedback: "This school changed my life! The teachers are fantastic.",
  },
  {
    id: 2,
    name: "Student 2",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/qmraJpx/videoblocks-portrait-of-smiling-male-college-student-in-busy-communal-campus-building_s-zrzm3vi_thumbnail-1080_01.png",
    feedback:
      "A wonderful experience, with supportive classmates and mentors.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h3 className="text-4xl font-extrabold text-blue-600">
          What Our Students Say
        </h3>
        {/* Testimonials Container */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              {/* Feedback */}
              <div className="text-left">
                <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                <p className="mt-2 font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
