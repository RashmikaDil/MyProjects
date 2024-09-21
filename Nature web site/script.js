
function gt(){
document.getElementById('menuBR').addEventListener('click', function() {
    const navbar = document.getElementById('nv');
    const icon = document.getElementById('icon');
    if (navbar.classList.contains('hide')) {
      navbar.classList.remove('hide');
      navbar.classList.add('show');
      icon.classList.remove('fa-bars');
    icon.classList.add('fa-x');

    } else {
      navbar.classList.remove('show');
      navbar.classList.add('hide');
      icon.classList.remove('fa-x');
    icon.classList.add('fa-bars');

    }
  });}
