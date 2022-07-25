const toggleMenu = (e) => {
  const menuBtn = document.querySelector('.menu-btn');
  const { target } = e;
  if (target.nodeName === 'SPAN' || target.nodeName === 'DIV') { menuBtn.classList.toggle('open'); }
  console.log(menuBtn.nodeName);
};

export default toggleMenu;
