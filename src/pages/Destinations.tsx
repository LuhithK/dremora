import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CameraIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const categories = [
    { id: 'all', name: 'All Attractions' },
    { id: 'cultural', name: 'Cultural Sites' },
    { id: 'natural', name: 'Natural Attractions' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'beaches', name: 'Beaches' },
    { id: 'adventure', name: 'Adventure' }
  ];

  const destinations = [
    // Cultural Triangle
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      category: 'cultural',
      location: "Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 metres high. According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was selected by King Kashyapa for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīhāgiri, the Lion Rock.",
      highlights: ["Ancient Rock Fortress", "Royal Palace Ruins", "Famous Frescoes", "Lion's Gate", "Water Gardens"],
      bestTime: "December to March",
      duration: "Half Day"
    },
    {
      id: 2,
      name: "Polonnaruwa Ancient City",
      category: 'cultural',
      location: "North Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Polonnaruwa is the main town of Polonnaruwa District in North Central Province, Sri Lanka. The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first declared the capital city by King Vijayabahu I, who defeated Chola invaders in 1070 to reunite the country once more under a local leader. The Ancient City of Polonnaruwa has been declared a World Heritage Site. Today the ancient city of Polonnaruwa remains one of the best planned archaeological relic sites in the country, standing testimony to the discipline and greatness of the Kingdom's first rulers.",
      highlights: ["Gal Vihara", "Royal Palace", "Lotus Bath", "Lankatilaka Temple", "Archaeological Museum"],
      bestTime: "Year Round",
      duration: "Full Day"
    },
    {
      id: 3,
      name: "Anuradhapura Sacred City",
      category: 'cultural',
      location: "North Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Anuradhapura is a major city in Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District. Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of ancient Sri Lankan civilization. It was the third capital of the Kingdom of Rajarata, following the kingdoms of Tambapanni and Upatissa Nuwara. The city, now a UNESCO World Heritage Site, was the center of Theravada Buddhism for many centuries.",
      highlights: ["Sri Maha Bodhi Tree", "Ruwanwelisaya", "Jetavanaramaya", "Abhayagiri Monastery", "Isurumuniya Temple"],
      bestTime: "Year Round",
      duration: "Full Day"
    },
    {
      id: 4,
      name: "Dambulla Cave Temple",
      category: 'cultural',
      location: "Central Province",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dambulla cave temple also known as the Golden Temple of Dambulla is a World Heritage Site in Sri Lanka, situated in the central part of the country. This site is situated 148 kilometres east of Colombo and 72 kilometres north of Kandy. It is the largest and best-preserved cave temple complex in Sri Lanka. The rock towers 160 m over the surrounding plains. There are more than 80 documented caves in the surrounding area. Major attractions are spread over 5 caves, which contain statues and paintings. These paintings and statues are related to Gautama Buddha and his life.",
      highlights: ["Five Cave Temples", "Ancient Buddhist Paintings", "Buddha Statues", "Golden Temple", "Museum"],
      bestTime: "Year Round",
      duration: "Half Day"
    },

    // Hill Country
    {
      id: 5,
      name: "Temple of the Sacred Tooth Relic",
      category: 'cultural',
      location: "Kandy",
      image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa, is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country. The relic was historically held by Sinhalese kings. The temple of the tooth is a World Heritage Site mainly due to the temple and the relic.",
      highlights: ["Sacred Tooth Relic", "Royal Palace Complex", "Buddhist Architecture", "Evening Prayers", "Cultural Museum"],
      bestTime: "Year Round",
      duration: "2-3 Hours"
    },
    {
      id: 6,
      name: "Nuwara Eliya",
      category: 'natural',
      location: "Central Province",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Nuwara Eliya is a city in the hill country of the Central Province of Sri Lanka. Its name means 'city on the plain' or 'city of light'. The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m and is considered to be the most important location for tea production in Sri Lanka. The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka.",
      highlights: ["Tea Plantations", "Cool Climate", "Victoria Park", "Lake Gregory", "Strawberry Fields"],
      bestTime: "December to March",
      duration: "1-2 Days"
    },
    {
      id: 7,
      name: "Ella",
      category: 'natural',
      location: "Uva Province",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation.",
      highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock", "Tea Plantations", "Ravana Falls"],
      bestTime: "December to March",
      duration: "1-2 Days"
    },
    {
      id: 8,
      name: "Adam's Peak",
      category: 'adventure',
      location: "Central Province",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Adam's Peak is a 2,243 m tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, a 1.8 m rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha, in Hindu tradition that of Shiva and in Islamic and Christian tradition that of Adam, or that of St. Thomas. The mountain is located in the southern reaches of the Central Highlands, in the Ratnapura and Nuwara Eliya districts of the Sabaragamuwa and Central provinces respectively.",
      highlights: ["Sacred Footprint", "Sunrise Views", "Pilgrimage Site", "Mountain Hiking", "Religious Significance"],
      bestTime: "December to May",
      duration: "Overnight"
    },

    // Wildlife
    {
      id: 9,
      name: "Yala National Park",
      category: 'wildlife',
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. It is situated in the southeast region of the country, and lies in Southern Province and Uva Province. The park covers 979 square kilometres and is located about 300 kilometres from Colombo. Yala was designated as a wildlife sanctuary in 1900, and, along with Wilpattu was one of the first two national parks in Sri Lanka, having been designated in 1938.",
      highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Sloth Bears", "Crocodiles"],
      bestTime: "February to July",
      duration: "Full Day"
    },
    {
      id: 10,
      name: "Udawalawe National Park",
      category: 'wildlife',
      location: "Sabaragamuwa Province",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Udawalawe National Park is a national park on the boundary of Sabaragamuwa and Uva Provinces in Sri Lanka. The park was created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir on the Walawe River, as well as to protect the catchment of the reservoir. The reserve covers 30,821 hectares of land area and was established on 30 June 1972. Before the designation of the national park, the area was used for shifting cultivation.",
      highlights: ["Elephant Orphanage", "Large Elephant Herds", "Bird Watching", "Water Buffalo", "Sambar Deer"],
      bestTime: "Year Round",
      duration: "Full Day"
    },
    {
      id: 11,
      name: "Sinharaja Forest Reserve",
      category: 'natural',
      location: "Sabaragamuwa Province",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sinharaja Forest Reserve is a forest reserve and a biodiversity hotspot in Sri Lanka. It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO. The hilly virgin rainforest, part of the Sri Lanka lowland rain forests ecoregion, was saved from the worst of commercial logging by its inaccessibility, and was designated a World Heritage Site in 1988.",
      highlights: ["Rainforest Biodiversity", "Endemic Species", "Bird Watching", "Nature Trails", "Research Center"],
      bestTime: "December to March",
      duration: "Full Day"
    },

    // Coastal Areas
    {
      id: 12,
      name: "Galle Dutch Fort",
      category: 'cultural',
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Galle is a major city in Sri Lanka, situated on the southwestern tip, 119 km from Colombo. Galle is the provincial capital and largest city of Southern Province, Sri Lanka and is the capital of Galle District. Galle was known as Gimhathiththa before the arrival of the Portuguese in the 16th century, when it was the main port on the island. Galle reached the height of its development in the 18th century, during the Dutch colonial period. Galle is the best example of a fortified city built by the Portuguese in South and Southeast Asia, showing the interaction between Portuguese architectural styles and native traditions.",
      highlights: ["Dutch Architecture", "Lighthouse", "Rampart Walk", "Museums", "Colonial Buildings"],
      bestTime: "November to April",
      duration: "Half Day"
    },
    {
      id: 13,
      name: "Mirissa Beach",
      category: 'beaches',
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometres south of Colombo and is situated at an elevation of 4 metres above sea level. Mirissa's beach and nightlife make it a popular tourist destination. It is also a fishing port and one of the island's main whale and dolphin watching locations.",
      highlights: ["Whale Watching", "Beach Relaxation", "Coconut Hill", "Surfing", "Nightlife"],
      bestTime: "November to April",
      duration: "1-2 Days"
    },
    {
      id: 14,
      name: "Unawatuna Beach",
      category: 'beaches',
      location: "Southern Province",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Unawatuna is a coastal town in Galle district of Southern Province, Sri Lanka. Unawatuna is a major tourist attraction in Sri Lanka and famous for its beautiful beach and corals. It is a suburb of Galle, about 5 kilometres southeast to the city center and approximately 108 kilometres south of Colombo. Unawatuna is situated at an elevation of 5 metres above the sea level.",
      highlights: ["Coral Reefs", "Snorkeling", "Beach Activities", "Restaurants", "Turtle Watching"],
      bestTime: "November to April",
      duration: "1-2 Days"
    },
    {
      id: 15,
      name: "Bentota Beach",
      category: 'beaches',
      location: "Western Province",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bentota is a coastal city in Sri Lanka, located in the Galle District of the Southern Province, governed by an Urban Council. It is approximately 65 kilometres south of Colombo and 56 kilometres north of Galle. Bentota is situated on the southern bank of the Bentota River mouth, at an elevation of 3 metres above the sea level. The name of the town is derived from a mythical story which claims a demon named 'Bem' ruled the tota or river bank.",
      highlights: ["Water Sports", "River Safari", "Turtle Hatchery", "Luxury Resorts", "Ayurveda Spas"],
      bestTime: "November to April",
      duration: "1-2 Days"
    },

    // Additional Attractions
    {
      id: 16,
      name: "Horton Plains National Park",
      category: 'natural',
      location: "Central Province",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Horton Plains National Park is a protected area in the central highlands of Sri Lanka and is covered by montane grassland and cloud forest. This plateau at an altitude of 2,100–2,300 metres is rich in biodiversity and many species found here are endemic to the region. This region was designated a national park in 1988. It is also a popular tourist destination and is situated 32 kilometres from Nuwara Eliya.",
      highlights: ["World's End", "Baker's Falls", "Cloud Forest", "Endemic Species", "Hiking Trails"],
      bestTime: "January to March",
      duration: "Full Day"
    },
    {
      id: 17,
      name: "Pinnawala Elephant Orphanage",
      category: 'wildlife',
      location: "Sabaragamuwa Province",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pinnawala Elephant Orphanage is an orphanage, nursery and captive breeding ground for wild Asian elephants located at Pinnawala village in Sabaragamuwa Province of Sri Lanka. Pinnawala has the largest herd of captive elephants in the world. In 2011, there were 88 elephants, including 37 males and 51 females from 3 generations, living in Pinnawala.",
      highlights: ["Elephant Feeding", "River Bathing", "Baby Elephants", "Educational Programs", "Conservation"],
      bestTime: "Year Round",
      duration: "Half Day"
    },
    {
      id: 18,
      name: "Pigeon Island National Park",
      category: 'natural',
      location: "Eastern Province",
      image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pigeon Island National Park is one of the two marine national parks of Sri Lanka. The national park is situated 1 km off the coast of Nilaveli, a coastal town in Eastern Province, encompassing a total area of 471.429 hectares. The island's name derives from the rock pigeon which has colonized it. The national park contains some of the best remaining coral reefs of Sri Lanka.",
      highlights: ["Coral Reefs", "Snorkeling", "Marine Life", "Rock Pigeons", "Crystal Clear Waters"],
      bestTime: "April to September",
      duration: "Full Day"
    }
  ];

  // Filter destinations based on selected category
  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tourist Attractions in Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Discover the Pearl of the Indian Ocean with its rich cultural heritage, 
              stunning natural beauty, and diverse wildlife attractions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sri Lanka Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Sri Lanka
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ancient kingdoms to pristine beaches, from misty mountains to wildlife sanctuaries, 
              Sri Lanka offers an incredible diversity of experiences in a compact island nation.
            </p>
          </motion.div>

          {/* Map Placeholder - In a real implementation, you would integrate with Google Maps or similar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 mb-12 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <img
                src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sri Lanka Map"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <p className="mt-4 text-gray-600">
                Interactive map showing major tourist attractions across Sri Lanka
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Tourist Attractions' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600">
              Showing {filteredDestinations.length} attractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedDestination(destination)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <MapPinIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">{destination.location}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {destination.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {destination.description.substring(0, 150)}...
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <ClockIcon className="h-4 w-4" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <CameraIcon className="h-4 w-4" />
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedDestination.name}</h2>
                  <p className="text-gray-600">{selectedDestination.location}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{selectedDestination.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{selectedDestination.bestTime}</div>
                  <div className="text-sm text-gray-600">Best Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 capitalize">{selectedDestination.category}</div>
                  <div className="text-sm text-gray-600">Category</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">{selectedDestination.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Plan Your Visit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Destinations;