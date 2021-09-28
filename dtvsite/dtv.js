const shuttleIcon = new Vivus(
	'shuttle',
	{
	  type: 'sync',
	  duration: 200,
	}
);
const resumeeIcon = new Vivus(
	'resume',
	{
	  type: 'sync',
	  duration: 200,
	}
);
const guarantiiIcon = new Vivus(
	'guarantii',
	{
	  type: 'sync',
	  duration: 200,
	}
);
const searchIcon = new Vivus(
	'search',
	{
	  type: 'sync',
	  duration: 200,
	}
);
const contractIcon = new Vivus(
	'contract',
	{
	  type: 'sync',
	  duration: 200,
	}
);
contract

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = windowScroll / windowHeight * 100;

	progress.style.width = per + '%'
}