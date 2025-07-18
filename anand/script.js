const products = [
  {
    title: "Amino Formula",
    desc: "Comprehensive Amino Acid profile: Advanced Amino Formula contains 8 essential amino acids, crucial for protein synthesis, muscular strength, and overall physical optimization.  ",
    price: "$71.08",
    image: "imgs/img1.png",
    link: "https://www.advancedbionutritionals.com/DS24/Advanced-Amino/Muscle-Mass-Loss/VSL-V1.htm#aff=Jayaanand"
  },
  {
    title: "Veganize Baking",
    desc: "Veganize Baking features 100 easy-to-bake Vegan recipes. Your audience will love the comprehensive introduction with detailed how-to instructions for a seamless baking experience.",
    price: "$9.08",
    image: "imgs/img2.jpg",
    link: "https://www.digistore24.com/redir/525847/Jayaanand/"
  },
  {
    title: "Reflux Summit",
    desc: "Millions struggle with reflux symptoms like heartburn, chronic cough, and throat irritation—often without lasting relief from conventional treatments.",
    price: "$59.42",
    image: "imgs/img3.jpg",
    link: "https://refluxsummit.com/summit-packages/#aff=Jayaanand"
  }
];

// Inject products into HTML
const container = document.getElementById('productContainer');

products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <span class="price">${p.price}</span>
    <a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
  `;
  container.appendChild(card);
});
