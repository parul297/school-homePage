import React from "react";

const events = [
  {
    id: 1,
    title: "Art & Craft Workshop",
    description: "Join us for a fun-filled day of activities and learning.",
    date: "Feb 15, 2025",
    image:
      "http://2.bp.blogspot.com/-KZ1AbKNqUyU/VbrVuU-p_dI/AAAAAAAAH04/zGJwoUTAxqA/s1600/ArtClass.jpg",
  },
  {
    id: 2,
    title: "Annual Charity Event",
    description: "Don’t miss our annual charity event supporting local causes.",
    date: "Jan 20, 2025",
    image:
      "https://www.projectgivinguk.org/wp-content/uploads/2020/12/IMG-20200725-WA0017-1024x768.jpg",
  },
  {
    id: 3,
    title: "Annual Day Celebration",
    description: "Celebrate achievements and enjoy spectacular performances.",
    date: "March 5, 2025",
    image:
      "https://cardinalgraciashighschool.org/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-28-at-3.13.27-PM-1-1080x675.jpeg",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h3 className="text-4xl font-extrabold text-blue-600 mb-6">Upcoming Events</h3>

        {/* Events Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {/* Date Tag */}
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium">
                  {event.date}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
