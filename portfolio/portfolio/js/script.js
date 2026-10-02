//Menampilkan dan Menyembunyikan Foto
const foto = document.getElementById('foto');
document.getElementById('btn-sembunyi').addEventListener('click', () => foto.classList.add('hidden'));
document.getElementById('btn-tampil').addEventListener('click', () => foto.classList.remove('hidden'));

const links = document.querySelectorAll('.navbar li a');
const sections = ['about'].map(id => document.getElementById(id));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => s && observer.observe(s));
