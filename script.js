const menuItems = document.querySelectorAll('#menu li');
const sections = document.querySelectorAll('section');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove estado ativo
    menuItems.forEach(i => i.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Ativa o item e a seção clicada
    item.classList.add('active');
    document.getElementById(item.dataset.section).classList.add('active');
  });
});
