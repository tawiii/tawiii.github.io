$(document).ready(function(){
	var work = {
		img: [
				{
					link: 'http://realty-test.pro/',
					title: 'Realty',
					picture: 'img/realty.png',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://www.madsoft.maximuslab.com/',
					title: 'MadSoft',
					picture: 'img/madsoft.png',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://green-planet.cmsmasters.net/',
					title: 'Green Planet',
					picture: 'img/green.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://health-press.cmsmasters.net/',
					title: 'Health Press',
					picture: 'img/health.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://do-yoga.cmsmasters.net',
					title: 'Do Yoga',
					picture: 'img/yoga.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://le-cafe.cmsmasters.net',
					title: 'Le Cafe',
					picture: 'img/cafe.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Php'
						}
					]
				}
			]
	}

	var $placeHolder = $('.portfolio_work');
	var $tpl_src = $('#js-work').text();
	var _tpl = _.template($tpl_src);
	$placeHolder.html(_tpl(work));



	var data = {
		img: [
				{
					link: 'http://zaimi-pod-zalog.ru',
					title: 'Credit',
					picture: 'img/credit.png',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Ajax'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://cars-bazar.ru/uslugi/green-card/',
					title: 'Green-card',
					picture: 'img/green-card.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Ajax'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'https://posijuur.github.io/pled/',
					title: 'Plaid',
					picture: 'img/Pled.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Ajax'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'https://forexmobi.ru/strategi/',
					title: 'Forex',
					picture: 'img/forex.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						},{
							name: 'Ajax'
						},{
							name: 'Php'
						}
					]
				},
				{
					link: 'http://instrumenty.in.ua/',
					title: 'Tooling',
					picture: 'img/tool.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						}
					]
				},
				{
					link: 'https://posijuur.github.io/stamp/',
					title: 'Stamp',
					picture: 'img/shtamp.jpg',
					skills: [
						{
							name: 'HTML'
						},{
							name: 'Javascript'
						}
					]
				},
				{
					link: 'https://posijuur.github.io/taxi/',
					title: 'Taxi',
					picture: 'img/taxi.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						}
					]
				},
				{
					link: 'https://posijuur.github.io/detektor-lwi/',
					title: 'Lie detector',
					picture: 'img/detektor-lwi.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Javascript'
						}
					]
				}
			]
	}

	var $placeHolder = $('.portfolio_list');
	var $tpl_src = $('#js-img').text();
	var _tpl = _.template($tpl_src);
	$placeHolder.html(_tpl(data));


	var sourceGit = {
		img: [
				{
					link: 'https://github.com/posijuur/js24-25',
					title: 'Holiday Dreams',
					picture: 'img/scrin_holiday.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						},{
							name: 'Retina'
						},{
							name: 'Javascript'
						},{
							name: 'Ajax'
						}
					]
				},
				{
					link: 'https://github.com/posijuur/mount',
					title: 'PINGBULLER',
					picture: 'img/pingbuller.jpg',
					skills: [
						{
							name: 'HTML5'
						},{
							name: 'CSS3'
						},{
							name: 'Adaptive'
						}
					]
				},
			]
	}

	var $placeHolder = $('.portfolio_git');
	var $tpl_src = $('#js-src').text();
	var _tpl = _.template($tpl_src);
	$placeHolder.html(_tpl(sourceGit));
}); 
