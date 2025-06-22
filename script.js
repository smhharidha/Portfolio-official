function showResume() {
  window.open('your-resume.pdf');
}

const projectBoxes = document.querySelectorAll('.project-box');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

projectBoxes.forEach(box => {
  observer.observe(box);
});
