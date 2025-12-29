// ===== MOBILE MENU TOGGLE =====
// Toggle mobile menu when hamburger button is clicked
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('show');
    });
});


// 1. Data: The places you want to show
const foodPlaces=[
    {
        id: 1,
        name: "Avartana",
        category: "Restaurant",
        image: "./images/avarta.jpg",
        desc: "Upscale South Indian restaurant at ITC Grand Chola serving traditional fare.",
    },
    {
        id: 2,
        name:"Kipling Cafe",
        category: "Cafe",
        image: "./images/kipling cafe.png",
        desc: "A beautiful garden cafe perfect for high tea and desserts."
    },
    {
        id: 3,
        name: "jamavar",
        category: "Restaurant",
        image: "./images/jamavar.jpg",
        desc: "Legendary biryani that you cannot miss when in Chennai."
    },
    {
        id: 4,
        name: "Ciclo Cafe",
        category: "Cafe",
        image: "./images/ciclo.png",
        desc: "Modern vibes, great coffee, and delicious brunch options."
    },

    {
        id: 5,
        name: "The Flying Elephant",
        category: "Restaurant",
        image: "./images/FLYING.jpg",
        desc: "Upscale South Indian restaurant at ITC Grand Chola serving traditional fare.",
    },
    {
        id: 6,
        name:"Madras Spice Restaurant",
        category: "Restaurant",
        image: "./images/madra.jpeg",
        desc: "Chinese and Asian-style dishes at affordable prices — perfect for casual dinners.",
    },
    {
        id: 7,
        name: "East Cost at Madras Square",
        category: "Restaurant",
        image: "./images/east.jpg",
        desc: "One of Chennai’s most popular grill and seafood restaurants, known for good flavour and vibes.",
    },
    {
        id: 8,
        name: "Coffee Since 1965",
        category: "Cafe",
        image: "./images/cofeesincw.jpeg",
        desc: "Modern vibes, great coffee, and delicious brunch options."
    },

    {
    id: 9,
    name: "Six O Ones",
        category: "Restaurant",
        image: "./images/sixone.jpg",
        desc: "Fine dining at The Park hotel with upscale ambiance and diverse menu-ideal for dinners,loacted in T.Nagar.",
    },
    {
        id: 10,
        name:"J Hind",
        category: "Restaurant",
        image: "./images/jhind.jpg",
        desc: "Classic North Indian dishes with a contemporary twist in an elegant setting in T.Nagar.",
    },
    {
        id: 11,
        name: "Aqua, The Park",
        category: "Restaurant",
        image: "./images/aqua.jpg",
        desc: "Aqua is a rooftop restaurant offering stunning city views and a diverse menu, perfect for special occasions in with in The Park on the eighth floor in Tnagar.",
    },
    {
        id: 12,
        name: "Cafe de Paris",
        category: "Cafe",
        image: "./images/paris.jpg",
        desc: "European-style cafe known for its pastries, coffee, and charming ambiance in Teynampet.",
    },

{
    id: 13,
    name: "Patti-veedu",
        category: "Restaurant",
        image: "./images/FLYING.jpg",
        desc: "Pure-veg restaurant serving traditional South Indian cuisine in a homely setting, located in T.Nagar.",
    },
    {
        id: 14,
        name:"Litte Soi",
        category: "Restaurant",
        image: "./images/madra.jpeg",
        desc: "Pan-Asian cuisine with a focus on Thai dishes, offering a vibrant dining experience in Anna Nagar.",
    },
    {
        id: 15,
        name: "Delhi Highway",
        category: "Restaurant",
        image: "./images/delhih.jpg",
        desc: "Veg North Indian resaturant celebrated for its Delhi-style street food and rich curries in Nungambakkam.",
    },
    {
        id: 16,
        name: "Wild Garden Cafe",
        category: "Cafe",
        image: "./images/garden.jpg",
        desc: "A cozy cafe with a garden setting, offering a variety of coffee and light meals in Royapettah."
    },
    {
    id: 17,
    name: "Cocoa & Creme Rooftop Cafe",
    category: "Cafe",
    image: "./images/cc.webp",
    desc: "A relaxed rooftop cafe in Adyar known for its desserts, mocktails, and calm evening ambience, perfect for casual hangouts."
   },
   {
    id: 18,
    name: "The Bistrograph",
    category: "Cafe",
    image: "./images/b.jpg",
    desc: "A cozy and aesthetic cafe in Adyar offering great coffee, comfort food, and a peaceful atmosphere for conversations."
   },
   {
    id: 19,
    name: "Writer’s Cafe",
    category: "Cafe",
    image: "./images/writer.jpeg",
    desc: "A warm and welcoming cafe in Adyar popular for its hot chocolate, sandwiches, and quiet reading-friendly environment."
   },
   {
    id: 20,
    name: "Igloos Rooftop Restaurant",
    category: "Restaurant",
    image: "./images/igloos.jpg",
    desc: "A rooftop restaurant in Koyambedu featuring private igloo-style seating with multi-cuisine dishes and city views."
   },
   {
    id: 21,
    name: "Black Pearl",
    category: "Cafe",
    image: "./images/pirate.jpg",
    desc: "A well-loved cafe in Velachery known for strong coffee, affordable snacks, and a laid-back local vibe." 
   },
   {
    id: 22,
    name: "Zaitoon",
    category: "Restaurant",
    image: "./images/zaitoon.jpg",
    desc: "A popular Middle Eastern restaurant with branches across Chennai, famous for biryani, grills, and Arabian dishes."
   },
   {
    id: 23,
    name: "Pumpkin Tales",
    category: "Cafe",
    image: "./images/pt.jpg",
    desc: "A premium cafe in Alwarpet offering healthy breakfast options, artisanal coffee, and a bright aesthetic setting."
   },
   {
    id: 24,
    name: "Broken Bridge Cafe",
    category: "Cafe",
    image: "./images/bb.jpg",
    desc: "A rustic-themed cafe near Raja Annamalaipuram known for comfort food, creative drinks, and relaxed interiors."
   },
   {
    id: 25,
    name: "Azzuri Bay",
    category: "Restaurant",
    image: "./images/AzzuriBay.jpg",
    desc: "A high-end multi-cuisine restaurant in Guindy offering Asian, Indian, and continental dishes with live kitchen counters."
  },
  {
    id: 26,
    name: "Sandy’s Chocolate Laboratory",
    category: "Cafe",
    image: "./images/sandys.jpg",
    desc: "A dessert-focused cafe in Nungambakkam famous for chocolate-based dishes, waffles, and thick shakes."
  },
  {
    id: 27,
    name: "Coal Barbecues",
    category: "Restaurant",
    image: "./images/coal.jpg",
    desc: "A popular barbecue restaurant with live grills on the table, offering a wide variety of starters and buffets."
  },
  { 
    id: 28,
    name: "Amelie's Cafe & Creamery",
    category: "Cafe",
    image: "./images/amelia.jpg",
    desc: "A charming cafe in Nungambakkam known for handcrafted desserts, pasta, and cozy European-style interiors."
  },
  {
    id: 29,
    name: "Palmshore",
    category: "Restaurant",
    image: "./images/palm.jpg",
    desc: "A well-known restaurant serving flavorful biryanis and traditional South Indian non-vegetarian dishes across Chennai."
  },
  {
    id: 30,
    name: "Drizzle by the Beach",
    category: "Cafe",
    image: "./images/drizzle.jpg",
    desc: "A seaside cafe near ECR offering light meals, beverages, and a pleasant beachside dining experience."
}
   

];

// Show food cards based on selected category
function displayCards(selectedCategory) {
  // Get the right list of places
  let placesToShow;
  
  if (selectedCategory === "All") {
    placesToShow = foodPlaces;
  } else {
    placesToShow = foodPlaces.filter(place => place.category === selectedCategory);
  }
  
  // Create HTML for each place
  let cardsHTML = '';
  placesToShow.forEach(place => {
    cardsHTML += `
      <div class="card">
        <img src="${place.image}" alt="${place.name}" class="card-img">
        <div class="card-body">
          <span class="card-badge">${place.category}</span>
          <h3 class="card-title">${place.name}</h3>
          <p class="card-text">${place.desc}</p>
        </div>
      </div>
    `;
  });
  
  // Show the cards on the page
  document.getElementById('cards-container').innerHTML = cardsHTML;
}

// When page loads, set up the filters
document.addEventListener('DOMContentLoaded', function() {
  // Show all cards first
  displayCards('All');
  
  // Add click listeners to filter buttons
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Remove active from all buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      
      // Add active to this button
      this.classList.add('active');
      
      // Show filtered cards
      displayCards(this.dataset.filter);
    });
  });
});
