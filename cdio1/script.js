const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Khi click vào dot (chấm tròn)
function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
  highlightSlide(index);
}

// Cập nhật dot đang chọn
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentIndex]) dots[currentIndex].classList.add('active');
}

// Làm nổi bật 1 slide (sáng + viền), làm mờ các ảnh còn lại
function highlightSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Gán click vào từng ảnh → làm viền sáng
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    highlightSlide(index);
  });
});

// Làm ảnh đầu tiên sáng lúc mở trang
highlightSlide(0);
