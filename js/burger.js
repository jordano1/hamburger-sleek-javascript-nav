function classToggle() {
	//get links in navbar
	const foos = document.querySelectorAll('.fa-times');
	
	foos.forEach(div => div.classList.toggle('no_show'));

	const bars = document.querySelectorAll('.fa-bars');
	bars.forEach(div => div.classList.toggle('no_show'));
	
	const navs = document.querySelectorAll('.navbar_items');
	//loop through each item with above class and add below class, which displays the links
	navs.forEach(nav => nav.classList.toggle('show_nav'));
  }
  //run function when you click the 'hamburger'
document.querySelector('.toggle_nav')
  .addEventListener('click', classToggle);