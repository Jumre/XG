// === Sidebar Toggle (Responsive) ===
function toggleNav() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');

  sidebar.classList.toggle('closed');

  // Adjust layout depending on device width
  if (window.innerWidth > 768) {
    main.style.marginLeft = sidebar.classList.contains('closed') ? '0' : '220px';
    localStorage.setItem('sidebarClosed', sidebar.classList.contains('closed'));
  } else {
    main.style.marginLeft = '0';
  }
}

// === Restore Sidebar and Set Up Events ===
window.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const isClosed = localStorage.getItem('sidebarClosed') === 'true';

  if (window.innerWidth > 768) {
    // Desktop — remember state
    if (isClosed) {
      sidebar.classList.add('closed');
      main.style.marginLeft = '0';
    } else {
      sidebar.classList.remove('closed');
      main.style.marginLeft = '220px';
    }
  } else {
    // Mobile — always start closed
    sidebar.classList.add('closed');
    main.style.marginLeft = '0';
  }

  // === Close sidebar when nav link clicked (mobile only) ===
  const navLinks = sidebar.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.add('closed');
        main.style.marginLeft = '0';
      }
    });
  });

  // === Render products and enable search ===
  renderProducts();

  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const container = document.getElementById("productContainer");
      container.innerHTML = "";

      const filtered = products.filter(p => p.name.toLowerCase().includes(query));
      filtered.forEach(product => {
        container.innerHTML += generateProductCard(product);
      });

      // Hide pagination when searching
      const paginationNav = document.getElementById("paginationNav");
      if (paginationNav) paginationNav.style.display = query ? "none" : "block";
    });
  }
});


// === Hero Carousel ===
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

if (slides.length > 0) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

// === Product Catalog ===
const products = [
  {
    name: "Smart Switches",
    price: "KSh 2,000 – 3,000",
    image: "assets/images/smart-switch.jpg",
    description: "Control your lighting and appliances remotely for a smarter home.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Switches."
  },
  {
    name: "LED Lighting",
    price: "KSh 800 – 1,500",
    image: "assets/images/led-lighting.jpg",
    description: "Energy-saving bulbs and panels with superior brightness and longevity.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20LED%20Lighting."
  },
  {
    name: "Surge Protectors",
    price: "KSh 1,500 – 2,000",
    image: "assets/images/surge-protector.jpg",
    description: "Keep your electronic devices safe from power fluctuations.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Surge%20Protectors."
  },
  {
    name: "Extension Cables",
    price: "KSh 700 – 1,200",
    image: "assets/images/extension-cable.jpg",
    description: "Heavy-duty and reliable extensions for both home and office.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Extension%20Cables."
  },
  {
    name: "Socket Extensions with USB",
    price: "KSh 1,000 – 1,800",
    image: "assets/images/socket-usb.jpg",
    description: "Power your devices and charge gadgets simultaneously.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Socket%20Extensions%20with%20USB."
  },
  {
    name: "Outdoor Flood Lights",
    price: "KSh 2,000 – 4,000",
    image: "assets/images/flood-light.jpg",
    description: "High-lumen LED floodlights for outdoor and security lighting.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Outdoor%20Flood%20Lights."
  },
  {
    name: "Wall Sockets",
    price: "KSh 300 – 700",
    image: "assets/images/wall-socket.jpg",
    description: "Modern sockets with surge protection and stylish finishes.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wall%20Sockets."
  },
  {
    name: "Power Tools",
    price: "KSh 5,000 – 8,000",
    image: "assets/images/power-tools.jpg",
    description: "Durable drills, grinders, and saws for every professional need.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Power%20Tools."
  },
  {
    name: "Battery Inverters",
    price: "KSh 10,000 – 15,000",
    image: "assets/images/battery-inverter.jpg",
    description: "Uninterrupted power supply solutions for homes and offices.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Battery%20Inverters."
  },
  {
    name: "Ceiling Fans",
    price: "KSh 3,500 – 6,000",
    image: "assets/images/ceiling-fan.jpg",
    description: "Energy-efficient ceiling fans with elegant designs and silent operation.",
    link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Ceiling%20Fans."
  },
  {
  name: "Smartphones",
  price: "KSh 8,000 – 45,000",
  image: "assets/images/smartphone.jpg",
  description: "Latest Android and iPhone models with sleek design and superior performance.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smartphones."
},
{
  name: "Phone Chargers",
  price: "KSh 300 – 1,200",
  image: "assets/images/phone-charger.jpg",
  description: "Fast and reliable chargers compatible with all smartphone brands.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Phone%20Chargers."
},
{
  name: "USB Cables",
  price: "KSh 200 – 800",
  image: "assets/images/usb-cable.jpg",
  description: "Durable data and charging cables for Android, iPhone, and Type-C devices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20USB%20Cables."
},
{
  name: "TV Guards",
  price: "KSh 1,000 – 1,500",
  image: "assets/images/tv-guard.jpg",
  description: "Protect your TV and entertainment systems from power surges and voltage fluctuations.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20TV%20Guards."
},
{
  name: "JSB Extensions",
  price: "KSh 900 – 1,600",
  image: "assets/images/jsb-extension.jpg",
  description: "High-quality extensions with multiple outlets and surge protection.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20JSB%20Extensions."
},
{
  name: "Water Heaters",
  price: "KSh 4,000 – 8,000",
  image: "assets/images/water-heater.jpg",
  description: "Instant water heaters for bathrooms and kitchens with efficient power use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Water%20Heaters."
},
{
  name: "Woofers",
  price: "KSh 6,000 – 15,000",
  image: "assets/images/woofer.jpg",
  description: "Powerful sound systems and woofers with Bluetooth and USB support.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Woofers."
},
{
  name: "LED Bulbs",
  price: "KSh 150 – 400",
  image: "assets/images/led-bulb.jpg",
  description: "Energy-efficient LED bulbs for bright and long-lasting lighting.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20LED%20Bulbs."
},
{
  name: "TV Wall Mounts",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/tv-mount.jpg",
  description: "Adjustable wall mounts for flat-screen TVs of all sizes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20TV%20Wall%20Mounts."
},
{
  name: "Electric Kettles",
  price: "KSh 1,000 – 2,500",
  image: "assets/images/electric-kettle.jpg",
  description: "Boil water instantly with stylish, efficient electric kettles.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Kettles."
},
{
  name: "Blenders & Mixers",
  price: "KSh 3,000 – 6,000",
  image: "assets/images/blender.jpg",
  description: "Powerful blenders and mixers for home and commercial use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Blenders%20and%20Mixers."
},
{
  name: "Refrigerators",
  price: "KSh 25,000 – 65,000",
  image: "assets/images/refrigerator.jpg",
  description: "Energy-saving fridges for home and business with stylish finishes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Refrigerators."
},
{
  name: "Microwave Ovens",
  price: "KSh 10,000 – 18,000",
  image: "assets/images/microwave.jpg",
  description: "High-performance microwaves with grill and defrost functions.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Microwave%20Ovens."
},
{
  name: "Electric Irons",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/electric-iron.jpg",
  description: "Smooth and efficient irons for perfect wrinkle-free clothes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Irons."
},
{
  name: "Extension Reels",
  price: "KSh 2,000 – 3,500",
  image: "assets/images/extension-reel.jpg",
  description: "Heavy-duty cable reels suitable for indoor and outdoor use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Extension%20Reels."
},
{
  name: "Power Banks",
  price: "KSh 1,200 – 3,500",
  image: "assets/images/power-bank.jpg",
  description: "High-capacity power banks to keep your devices charged on the go.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Power%20Banks."
},
{
  name: "Wireless Earbuds",
  price: "KSh 1,500 – 4,500",
  image: "assets/images/wireless-earbuds.jpg",
  description: "Crystal-clear audio with Bluetooth connectivity and long battery life.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wireless%20Earbuds."
},
{
  name: "Smart TVs",
  price: "KSh 20,000 – 85,000",
  image: "assets/images/smart-tv.jpg",
  description: "Full HD and 4K Smart TVs with built-in apps and Wi-Fi support.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20TVs."
},
{
  name: "Bluetooth Speakers",
  price: "KSh 800 – 3,500",
  image: "assets/images/bluetooth-speaker.jpg",
  description: "Portable speakers with deep bass and long-lasting battery life.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Bluetooth%20Speakers."
},
{
  name: "Electric Extension Bars",
  price: "KSh 1,200 – 2,000",
  image: "assets/images/extension-bar.jpg",
  description: "Multi-socket extension bars with surge protection and USB ports.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Extension%20Bars."
}, 
{
  name: "Computer Mouse",
  price: "KSh 500 – 1,200",
  image: "assets/images/mouse.jpg",
  description: "Ergonomic wired and wireless mice for smooth and precise control.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Computer%20Mouse."
},
{
  name: "Keyboard",
  price: "KSh 800 – 2,000",
  image: "assets/images/keyboard.jpg",
  description: "Durable wired and wireless keyboards for office and gaming use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Keyboard."
},
{
  name: "HDMI Cables",
  price: "KSh 300 – 900",
  image: "assets/images/hdmi-cable.jpg",
  description: "High-quality HDMI cables for HD video and audio connections.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20HDMI%20Cables."
},
{
  name: "Power Banks",
  price: "KSh 1,200 – 3,500",
  image: "assets/images/power-bank.jpg",
  description: "Reliable power banks with large capacity and fast charging support.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Power%20Banks."
},
{
  name: "TV Guards",
  price: "KSh 1,000 – 1,500",
  image: "assets/images/tv-guard.jpg",
  description: "Voltage protection devices for safeguarding your electronics.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20TV%20Guards."
},
{
  name: "Voltage Stabilizers",
  price: "KSh 3,000 – 6,500",
  image: "assets/images/voltage-stabilizer.jpg",
  description: "Automatic voltage regulators to protect electrical devices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Voltage%20Stabilizers."
},
{
  name: "USB Flash Drives",
  price: "KSh 600 – 1,500",
  image: "assets/images/flash-drive.jpg",
  description: "Portable storage devices for files, music, and videos.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20USB%20Flash%20Drives."
},
{
  name: "Memory Cards",
  price: "KSh 500 – 2,000",
  image: "assets/images/memory-card.jpg",
  description: "High-speed SD and microSD cards for cameras and phones.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Memory%20Cards."
},
{
  name: "Laptop Chargers",
  price: "KSh 1,500 – 3,500",
  image: "assets/images/laptop-charger.jpg",
  description: "Reliable laptop adapters compatible with all major brands.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Laptop%20Chargers."
},
{
  name: "Laptops",
  price: "KSh 35,000 – 120,000",
  image: "assets/images/laptop.jpg",
  description: "Brand new and refurbished laptops for personal and business use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Laptops."
},
{
  name: "Printers & Scanners",
  price: "KSh 8,000 – 25,000",
  image: "assets/images/printer.jpg",
  description: "All-in-one printers and scanners for home and office use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Printers%20and%20Scanners."
},
{
  name: "CCTV Cameras",
  price: "KSh 3,000 – 15,000",
  image: "assets/images/cctv.jpg",
  description: "Security cameras with HD recording and night vision capabilities.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20CCTV%20Cameras."
},
{
  name: "Routers & Wi-Fi Extenders",
  price: "KSh 2,000 – 6,000",
  image: "assets/images/router.jpg",
  description: "Wireless routers and extenders for strong and stable internet coverage.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Routers%20and%20Wi-Fi%20Extenders."
},
{
  name: "Smart Doorbells",
  price: "KSh 4,000 – 7,000",
  image: "assets/images/smart-doorbell.jpg",
  description: "Video doorbells with motion detection and mobile alerts.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Doorbells."
},
{
  name: "Security Alarms",
  price: "KSh 3,500 – 7,000",
  image: "assets/images/security-alarm.jpg",
  description: "Wireless security alarm systems for home and business protection.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Security%20Alarms."
},
{
  name: "Portable Fans",
  price: "KSh 1,500 – 3,500",
  image: "assets/images/portable-fan.jpg",
  description: "Compact and rechargeable fans for office, home, or travel use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Portable%20Fans."
},
{
  name: "Table Lamps",
  price: "KSh 800 – 2,000",
  image: "assets/images/table-lamp.jpg",
  description: "LED desk lamps with adjustable brightness and USB charging ports.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Table%20Lamps."
},
{
  name: "Smart Watches",
  price: "KSh 2,000 – 7,000",
  image: "assets/images/smart-watch.jpg",
  description: "Smartwatches with fitness tracking and call notifications.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Watches."
},
{
  name: "Electric Cookers",
  price: "KSh 5,000 – 15,000",
  image: "assets/images/electric-cooker.jpg",
  description: "Single and double plate electric cookers for efficient cooking.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Cookers."
},
{
  name: "Toasters",
  price: "KSh 2,000 – 4,500",
  image: "assets/images/toaster.jpg",
  description: "Quick and stylish toasters for perfect breakfast slices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Toasters."
},
{
  name: "Electric Shavers",
  price: "KSh 1,500 – 4,000",
  image: "assets/images/electric-shaver.jpg",
  description: "Rechargeable grooming shavers with long battery life.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Shavers."
},
{
  name: "Extension Sockets",
  price: "KSh 700 – 1,800",
  image: "assets/images/extension-socket.jpg",
  description: "Durable socket extensions with multiple ports and surge protection.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Extension%20Sockets."
},
{
  name: "Smart Bulbs",
  price: "KSh 1,000 – 2,500",
  image: "assets/images/smart-bulb.jpg",
  description: "Wi-Fi controlled bulbs with adjustable color and brightness.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Bulbs."
},
{
  name: "Ring Lights",
  price: "KSh 1,500 – 3,500",
  image: "assets/images/ring-light.jpg",
  description: "Adjustable LED ring lights for photography and content creation.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Ring%20Lights."
},
{
  name: "Rechargeable Lamps",
  price: "KSh 800 – 2,000",
  image: "assets/images/rechargeable-lamp.jpg",
  description: "Energy-saving rechargeable lamps for home and outdoor use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Rechargeable%20Lamps."
},
{
  name: "Soldering Irons",
  price: "KSh 600 – 1,200",
  image: "assets/images/soldering-iron.jpg",
  description: "Compact and efficient soldering tools for electrical repair works.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Soldering%20Irons."
},
{
  name: "Cable Clips",
  price: "KSh 100 – 400",
  image: "assets/images/cable-clips.jpg",
  description: "Organize your cables and wiring neatly and safely.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Cable%20Clips."
},
{
  name: "Power Adapters",
  price: "KSh 500 – 1,500",
  image: "assets/images/power-adapter.jpg",
  description: "Universal adapters compatible with multiple devices and sockets.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Power%20Adapters."
},
{
  name: "Multiplug Adapters",
  price: "KSh 400 – 1,000",
  image: "assets/images/multiplug.jpg",
  description: "Compact multi-socket adapters for travel and office use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Multiplug%20Adapters."
},
{
  name: "Wireless Bluetooth Earphones",
  price: "KSh 1,200 – 3,500",
  image: "assets/images/bluetooth-earphones.jpg",
  description: "Comfortable, high-quality Bluetooth earphones with noise cancellation.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wireless%20Bluetooth%20Earphones."
},
{
  name: "Bluetooth Speakers",
  price: "KSh 2,000 – 6,000",
  image: "assets/images/bluetooth-speaker.jpg",
  description: "Portable speakers with powerful bass and long battery life.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Bluetooth%20Speakers."
},
{
  name: "Home Theatre Woofers",
  price: "KSh 8,000 – 25,000",
  image: "assets/images/home-theatre.jpg",
  description: "Multi-speaker sound systems for immersive home entertainment.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Home%20Theatre%20Woofers."
},
{
  name: "Subwoofers",
  price: "KSh 6,000 – 18,000",
  image: "assets/images/subwoofer.jpg",
  description: "Powerful subwoofers for deep, rich bass in your sound setup.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Subwoofers."
},
{
  name: "HD Smart TVs",
  price: "KSh 18,000 – 95,000",
  image: "assets/images/smart-tv.jpg",
  description: "High-definition smart TVs with built-in apps and streaming support.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20HD%20Smart%20TVs."
},
{
  name: "TV Wall Mounts",
  price: "KSh 1,000 – 3,000",
  image: "assets/images/tv-mount.jpg",
  description: "Adjustable and fixed TV brackets for all screen sizes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20TV%20Wall%20Mounts."
},
{
  name: "Wi-Fi Antennas",
  price: "KSh 700 – 2,500",
  image: "assets/images/wifi-antenna.jpg",
  description: "Boost your wireless signal with high-gain Wi-Fi antennas.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wi-Fi%20Antennas."
},
{
  name: "Network Switches",
  price: "KSh 3,500 – 9,000",
  image: "assets/images/network-switch.jpg",
  description: "Reliable Ethernet switches for office and home networking.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Network%20Switches."
},
{
  name: "LAN Cables (Cat6)",
  price: "KSh 100 – 250 per meter",
  image: "assets/images/lan-cable.jpg",
  description: "High-speed Cat6 cables for stable wired internet connections.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20LAN%20Cables."
},
{
  name: "Wireless Keyboards",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/wireless-keyboard.jpg",
  description: "Wireless keyboards with long-range connectivity and smooth keys.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wireless%20Keyboards."
},
{
  name: "Electric Kettles",
  price: "KSh 1,200 – 3,000",
  image: "assets/images/electric-kettle.jpg",
  description: "Fast-boiling kettles with auto shut-off and modern designs.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Kettles."
},
{
  name: "Water Heaters",
  price: "KSh 3,000 – 9,000",
  image: "assets/images/water-heater.jpg",
  description: "Instant and storage water heaters for home and office use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Water%20Heaters."
},
{
  name: "Blenders & Mixers",
  price: "KSh 2,000 – 7,500",
  image: "assets/images/blender.jpg",
  description: "High-speed blenders for smoothies and food preparation.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Blenders%20and%20Mixers."
},
{
  name: "Electric Irons",
  price: "KSh 1,000 – 3,500",
  image: "assets/images/electric-iron.jpg",
  description: "Durable irons with steam and dry options for crisp clothes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Irons."
},
{
  name: "Extension Reels",
  price: "KSh 2,000 – 5,000",
  image: "assets/images/extension-reel.jpg",
  description: "Heavy-duty extension reels ideal for workshops and offices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Extension%20Reels."
},
{
  name: "Ceiling Lights",
  price: "KSh 2,500 – 8,000",
  image: "assets/images/ceiling-light.jpg",
  description: "Elegant LED ceiling lights for modern interior lighting.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Ceiling%20Lights."
},
{
  name: "Flood Lights",
  price: "KSh 1,500 – 6,000",
  image: "assets/images/flood-light.jpg",
  description: "Bright LED floodlights suitable for outdoor and security use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Flood%20Lights."
},
{
  name: "Rechargeable Torches",
  price: "KSh 800 – 2,000",
  image: "assets/images/torch.jpg",
  description: "Portable and long-lasting rechargeable torches for home or camping.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Rechargeable%20Torches."
},
{
  name: "Hair Dryers",
  price: "KSh 1,200 – 4,000",
  image: "assets/images/hair-dryer.jpg",
  description: "Powerful and compact dryers for salon and home use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Hair%20Dryers."
},
{
  name: "Electric Hair Clippers",
  price: "KSh 1,500 – 4,000",
  image: "assets/images/hair-clipper.jpg",
  description: "Rechargeable hair clippers with stainless steel blades.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Hair%20Clippers."
},
{
  name: "Smart Home Plugs",
  price: "KSh 2,000 – 4,000",
  image: "assets/images/smart-plug.jpg",
  description: "Wi-Fi enabled plugs to control your appliances remotely.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Home%20Plugs."
},
{
  name: "Extension Cord with Surge Protector",
  price: "KSh 1,200 – 2,500",
  image: "assets/images/surge-protector.jpg",
  description: "Protect your devices from power spikes with quality surge extensions.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Extension%20Cord%20with%20Surge%20Protector."
},
{
  name: "USB Cables",
  price: "KSh 300 – 800",
  image: "assets/images/usb-cable.jpg",
  description: "Durable charging and data cables for Android, iPhone, and Type-C devices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20USB%20Cables."
},
{
  name: "Phone Chargers",
  price: "KSh 500 – 1,500",
  image: "assets/images/phone-charger.jpg",
  description: "Fast-charging adapters compatible with major smartphone brands.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Phone%20Chargers."
},
{
  name: "Headphones",
  price: "KSh 1,500 – 5,000",
  image: "assets/images/headphones.jpg",
  description: "Comfortable wired and wireless headphones with crisp sound.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Headphones."
},
{
  name: "Car Chargers",
  price: "KSh 800 – 1,500",
  image: "assets/images/car-charger.jpg",
  description: "Dual-port car chargers for fast charging on the go.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Car%20Chargers."
},
{
  name: "Inverters",
  price: "KSh 8,000 – 25,000",
  image: "assets/images/inverter.jpg",
  description: "Power inverters for backup during outages or off-grid use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Inverters."
},
{
  name: "Solar Panels",
  price: "KSh 6,000 – 20,000",
  image: "assets/images/solar-panel.jpg",
  description: "Efficient solar panels for home and small business setups.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Solar%20Panels."
},
{
  name: "Rechargeable Radios",
  price: "KSh 1,200 – 3,000",
  image: "assets/images/rechargeable-radio.jpg",
  description: "Compact FM/AM rechargeable radios with USB and SD support.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Rechargeable%20Radios."
},
{
  name: "Electric Pressure Cookers",
  price: "KSh 6,000 – 12,000",
  image: "assets/images/pressure-cooker.jpg",
  description: "Fast-cooking electric pressure cookers with safety features.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Pressure%20Cookers."
},
{
  name: "CCTV Cameras",
  price: "KSh 3,500 – 15,000",
  image: "assets/images/cctv-camera.jpg",
  description: "High-definition CCTV cameras for home and business surveillance.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20CCTV%20Cameras."
},
{
  name: "Security DVR Kits",
  price: "KSh 8,000 – 25,000",
  image: "assets/images/dvr-kit.jpg",
  description: "Complete DVR surveillance kits with storage and multiple channels.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Security%20DVR%20Kits."
},
{
  name: "Smart Door Bells",
  price: "KSh 4,000 – 8,000",
  image: "assets/images/smart-doorbell.jpg",
  description: "Wi-Fi doorbells with camera and two-way audio for added security.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Door%20Bells."
},
{
  name: "Motion Sensors",
  price: "KSh 1,500 – 3,500",
  image: "assets/images/motion-sensor.jpg",
  description: "Infrared motion sensors for automatic lighting and security systems.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Motion%20Sensors."
},
{
  name: "Solar Batteries",
  price: "KSh 10,000 – 25,000",
  image: "assets/images/solar-battery.jpg",
  description: "Long-lasting solar batteries for energy storage and backup.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Solar%20Batteries."
},
{
  name: "Solar Charge Controllers",
  price: "KSh 1,500 – 6,000",
  image: "assets/images/charge-controller.jpg",
  description: "Protect and regulate your solar system efficiently with smart charge controllers.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Solar%20Charge%20Controllers."
},
{
  name: "Voltage Stabilizers",
  price: "KSh 3,000 – 9,000",
  image: "assets/images/voltage-stabilizer.jpg",
  description: "Automatic stabilizers to protect your electronics from voltage fluctuations.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Voltage%20Stabilizers."
},
{
  name: "TV Guards",
  price: "KSh 1,200 – 2,000",
  image: "assets/images/tv-guard.jpg",
  description: "Protect your TV and electronics from power surges and spikes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20TV%20Guards."
},
{
  name: "Fridge Guards",
  price: "KSh 1,200 – 2,000",
  image: "assets/images/fridge-guard.jpg",
  description: "Reliable protection for your fridge and freezer against power irregularities.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Fridge%20Guards."
},
{
  name: "Ring Lights",
  price: "KSh 2,000 – 4,500",
  image: "assets/images/ring-light.jpg",
  description: "Bright adjustable ring lights perfect for photography, makeup, and videos.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Ring%20Lights."
},
{
  name: "Rechargeable LED Lamps",
  price: "KSh 800 – 2,000",
  image: "assets/images/rechargeable-lamp.jpg",
  description: "Portable rechargeable lamps ideal for home, office, or emergencies.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Rechargeable%20LED%20Lamps."
},
{
  name: "Solar Floodlights",
  price: "KSh 3,000 – 9,000",
  image: "assets/images/solar-floodlight.jpg",
  description: "Powerful solar floodlights for outdoor lighting and security.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Solar%20Floodlights."
},
{
  name: "Solar Garden Lights",
  price: "KSh 600 – 2,000",
  image: "assets/images/solar-garden-light.jpg",
  description: "Decorative and eco-friendly solar garden lighting solutions.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Solar%20Garden%20Lights."
},
{
  name: "Power Banks",
  price: "KSh 1,500 – 5,000",
  image: "assets/images/power-bank.jpg",
  description: "High-capacity power banks for charging devices on the go.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Power%20Banks."
},
{
  name: "Laptop Chargers",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/laptop-charger.jpg",
  description: "Original and compatible laptop chargers for all major brands.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Laptop%20Chargers."
},
{
  name: "Computer Mouse",
  price: "KSh 800 – 1,800",
  image: "assets/images/computer-mouse.jpg",
  description: "Ergonomic wired and wireless mice for laptops and desktops.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Computer%20Mouse."
},
{
  name: "USB Hubs",
  price: "KSh 1,000 – 2,500",
  image: "assets/images/usb-hub.jpg",
  description: "Expand your connectivity with multiple-port USB hubs.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20USB%20Hubs."
},
{
  name: "Memory Cards",
  price: "KSh 500 – 2,000",
  image: "assets/images/memory-card.jpg",
  description: "Reliable SD and microSD cards for phones, cameras, and devices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Memory%20Cards."
},
{
  name: "HDMI Cables",
  price: "KSh 600 – 1,500",
  image: "assets/images/hdmi-cable.jpg",
  description: "High-speed HDMI cables for crystal-clear video and audio transmission.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20HDMI%20Cables."
},
{
  name: "Electric Cookers",
  price: "KSh 6,000 – 18,000",
  image: "assets/images/electric-cooker.jpg",
  description: "Multi-burner cookers with oven and grill for your modern kitchen.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Cookers."
},
{
  name: "Microwave Ovens",
  price: "KSh 7,000 – 15,000",
  image: "assets/images/microwave.jpg",
  description: "Efficient microwaves for quick heating and modern cooking needs.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Microwave%20Ovens."
},
{
  name: "Toasters",
  price: "KSh 2,000 – 4,000",
  image: "assets/images/toaster.jpg",
  description: "Sleek, fast toasters perfect for breakfast lovers.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Toasters."
},
{
  name: "Electric Fans",
  price: "KSh 2,500 – 5,000",
  image: "assets/images/electric-fan.jpg",
  description: "Cool your space with stylish and powerful electric fans.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Fans."
},
{
  name: "Rechargeable Table Fans",
  price: "KSh 3,000 – 7,000",
  image: "assets/images/rechargeable-fan.jpg",
  description: "Portable rechargeable fans ideal for power outages and travel.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Rechargeable%20Table%20Fans."
},
{
  name: "Electric Sockets",
  price: "KSh 400 – 900",
  image: "assets/images/electric-socket.jpg",
  description: "Modern and safe electrical sockets for home and office installation.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Sockets."
},
{
  name: "Phone Holders",
  price: "KSh 500 – 1,500",
  image: "assets/images/phone-holder.jpg",
  description: "Adjustable holders for cars, desks, and tripods.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Phone%20Holders."
},
{
  name: "Wireless Chargers",
  price: "KSh 2,000 – 4,000",
  image: "assets/images/wireless-charger.jpg",
  description: "Fast wireless chargers for iPhones, Android, and smart devices.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wireless%20Chargers."
},
{
  name: "Smart Watches",
  price: "KSh 3,000 – 8,000",
  image: "assets/images/smart-watch.jpg",
  description: "Fitness tracking smartwatches with heart rate and notification features.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Watches."
},
{
  name: "Wi-Fi Routers",
  price: "KSh 3,500 – 12,000",
  image: "assets/images/wifi-router.jpg",
  description: "High-speed dual-band Wi-Fi routers for reliable internet connectivity at home or office.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Wi-Fi%20Routers."
},
{
  name: "Network Switches",
  price: "KSh 4,000 – 15,000",
  image: "assets/images/network-switch.jpg",
  description: "Fast Ethernet and gigabit switches to expand your wired network.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Network%20Switches."
},
{
  name: "Network Cables (CAT6)",
  price: "KSh 200 – 8,000",
  image: "assets/images/cat6-cable.jpg",
  description: "High-quality CAT6 cables available per meter or in full rolls.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Network%20Cables%20(CAT6)."
},
{
  name: "UPS Power Backups",
  price: "KSh 6,000 – 25,000",
  image: "assets/images/ups.jpg",
  description: "Uninterruptible power supply systems to keep your devices running during outages.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20UPS%20Power%20Backups."
},
{
  name: "Printers & Scanners",
  price: "KSh 9,000 – 35,000",
  image: "assets/images/printer-scanner.jpg",
  description: "Multifunction inkjet and laser printers for home and office use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Printers%20&%20Scanners."
},
{
  name: "External Hard Drives",
  price: "KSh 6,000 – 18,000",
  image: "assets/images/external-hdd.jpg",
  description: "Portable hard drives for secure data backup and extra storage.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20External%20Hard%20Drives."
},
{
  name: "Flash Drives",
  price: "KSh 800 – 2,000",
  image: "assets/images/flash-drive.jpg",
  description: "Reliable USB flash drives for quick data transfer and storage.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Flash%20Drives."
},
{
  name: "Laptop Cooling Pads",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/cooling-pad.jpg",
  description: "Keep your laptop cool with quiet and efficient cooling pads.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Laptop%20Cooling%20Pads."
},
{
  name: "Bluetooth Speakers",
  price: "KSh 2,000 – 6,000",
  image: "assets/images/bluetooth-speaker.jpg",
  description: "Portable Bluetooth speakers with deep bass and long battery life.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Bluetooth%20Speakers."
},
{
  name: "Earphones & Headsets",
  price: "KSh 800 – 4,000",
  image: "assets/images/earphones.jpg",
  description: "Comfortable wired and wireless earphones with superior sound quality.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Earphones%20&%20Headsets."
},
{
  name: "Smart Bulbs",
  price: "KSh 1,200 – 3,500",
  image: "assets/images/smart-bulb.jpg",
  description: "Color-changing smart bulbs controllable via app or voice assistant.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Bulbs."
},
{
  name: "Ceiling Lights",
  price: "KSh 2,500 – 7,000",
  image: "assets/images/ceiling-light.jpg",
  description: "Modern LED ceiling lights for homes, offices, and hotels.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Ceiling%20Lights."
},
{
  name: "Extension Cords (Heavy Duty)",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/heavy-extension.jpg",
  description: "Durable heavy-duty extensions for industrial or home use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Heavy%20Duty%20Extension%20Cords."
},
{
  name: "Electric Kettles",
  price: "KSh 1,800 – 3,500",
  image: "assets/images/electric-kettle.jpg",
  description: "Fast-boiling stainless steel electric kettles with auto-shutoff.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Electric%20Kettles."
},
{
  name: "Blenders & Mixers",
  price: "KSh 3,500 – 9,000",
  image: "assets/images/blender.jpg",
  description: "High-speed blenders and mixers for smoothies, soups, and sauces.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Blenders%20&%20Mixers."
},
{
  name: "Steam Irons",
  price: "KSh 2,000 – 5,000",
  image: "assets/images/steam-iron.jpg",
  description: "Powerful steam irons for crisp and wrinkle-free clothes.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Steam%20Irons."
},
{
  name: "Hair Dryers",
  price: "KSh 2,000 – 4,500",
  image: "assets/images/hair-dryer.jpg",
  description: "Compact and powerful hair dryers for salon-quality results at home.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Hair%20Dryers."
},
{
  name: "Soldering Irons",
  price: "KSh 1,000 – 2,500",
  image: "assets/images/soldering-iron.jpg",
  description: "Electric soldering irons for repairs and electronic assembly work.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Soldering%20Irons."
},
{
  name: "Digital Multimeters",
  price: "KSh 1,500 – 4,000",
  image: "assets/images/digital-multimeter.jpg",
  description: "Accurate multimeters for voltage, current, and resistance testing.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Digital%20Multimeters."
},
{
  name: "Cable Testers",
  price: "KSh 1,200 – 3,000",
  image: "assets/images/cable-tester.jpg",
  description: "Essential network cable testers for technicians and electricians.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Cable%20Testers."
},
{
  name: "Smart Power Strips",
  price: "KSh 2,500 – 5,000",
  image: "assets/images/smart-strip.jpg",
  description: "Wi-Fi enabled power strips with USB ports and surge protection.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Power%20Strips."
},
{
  name: "Rechargeable Torches",
  price: "KSh 1,200 – 3,500",
  image: "assets/images/rechargeable-torch.jpg",
  description: "Bright and long-lasting rechargeable flashlights for home or outdoor use.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Rechargeable%20Torches."
},
{
  name: "Solar Panels",
  price: "KSh 6,000 – 18,000",
  image: "assets/images/solar-panel.jpg",
  description: "Durable and efficient solar panels for home and business installations.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Solar%20Panels."
},
{
  name: "Mini Inverters",
  price: "KSh 3,500 – 10,000",
  image: "assets/images/mini-inverter.jpg",
  description: "Compact inverters for powering small electronics during outages.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Mini%20Inverters."
},
{
  name: "Smart Plugs",
  price: "KSh 2,000 – 3,500",
  image: "assets/images/smart-plug.jpg",
  description: "Control your appliances remotely via Wi-Fi smart plugs.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Smart%20Plugs."
},
{
  name: "HDMI Splitters",
  price: "KSh 1,500 – 3,000",
  image: "assets/images/hdmi-splitter.jpg",
  description: "Distribute one HDMI signal to multiple screens with clarity.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20HDMI%20Splitters."
},
{
  name: "Projector Screens",
  price: "KSh 4,000 – 10,000",
  image: "assets/images/projector-screen.jpg",
  description: "Foldable and wall-mount projector screens for office and home theaters.",
  link: "https://wa.me/254700489917?text=Hi%20XG%20Electricals!%20I'm%20interested%20in%20Projector%20Screens."
}





];

// === Pagination ===
const itemsPerPage = 25;
let currentPage = 1;

function generateProductCard(product) {
  return `
    <div class="feature" data-name="${product.name}">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Price Range:</strong> ${product.price}</p>
      <a href="${product.link}" class="shop-btn">Shop Now</a>
    </div>
  `;
}

function renderProducts() {
  const container = document.getElementById("productContainer");
  if (!container) return;

  container.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleProducts = products.slice(start, end);

  visibleProducts.forEach(product => {
    container.innerHTML += generateProductCard(product);
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const nav = document.getElementById("paginationNav");
  if (!nav) return;

  nav.innerHTML = `
    <button onclick="prevPage()" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
    <span>Page ${currentPage} of ${totalPages}</span>
    <button onclick="nextPage()" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
  `;
}

function nextPage() {
  if (currentPage < Math.ceil(products.length / itemsPerPage)) {
    currentPage++;
    renderProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
}
