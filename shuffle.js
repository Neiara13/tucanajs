<script>
  function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
  }
  
  function generateCarouselItems(testimonials) {
  return testimonials
  .map((testimonial, index) => `
  <div class="carousel-item ${index === 0 ? "active" : ""} text-center">
  <h3>${testimonial.name}</h3>
  <h4>${testimonial.server}</h4>
  <p>${testimonial.text}</p>
  </div>
  `)
  .join("");
  }
  
  function generateCarousel(testimonials, carouselId) {
  return `
  <div id="${carouselId}" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  ${generateCarouselItems(testimonials)}
  </div>
  </div>
  `;
  }
  </script>
