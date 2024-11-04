  document.addEventListener("DOMContentLoaded", function() {
  function renderCarousel(containerId, testimonials) {
  const uniqueCarouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;
  const shuffledTestimonials = shuffleArray([...testimonials]);
  const carouselContainer = document.getElementById(containerId);
  carouselContainer.querySelector(".col-md-12").innerHTML = generateCarousel(shuffledTestimonials, uniqueCarouselId);
  
  $(`#${uniqueCarouselId}`).carousel({
  interval: 5000,
  });
  }
  
  renderCarousel("carouselContainer1", testimonials1);
  renderCarousel("carouselContainer2", testimonials2);
  });

