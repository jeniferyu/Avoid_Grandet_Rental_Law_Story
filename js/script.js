/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'End': {
		title: 'Things just got real!',
		body: 'You finished Monogatari 101.',
		icon: 'assets/icons/icon_192x192.png'
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	universe: 
	{
	  "autoPlay": true,
	  "background": {
		"color": {
		  "value": "transparent"
		},
		"image": "",
		"position": "",
		"repeat": "",
		"size": "",
		"opacity": 1
	  },
	  "backgroundMask": {
		"composite": "destination-out",
		"cover": {
		  "color": {
			"value": "#fff"
		  },
		  "opacity": 1
		},
		"enable": false
	  },
	  "clear": true,
	  "defaultThemes": {},
	  "delay": 0,
	  "fullScreen": {
		"enable": true,
		"zIndex": 0
	  },
	  "detectRetina": true,
	  "duration": 0,
	  "fpsLimit": 120,
	  "interactivity": {
		"detectsOn": "window",
		"events": {
		  "onClick": {
			"enable": true,
			"mode": "push"
		  },
		  "onDiv": {
			"selectors": [],
			"enable": false,
			"mode": [],
			"type": "circle"
		  },
		  "onHover": {
			"enable": true,
			"mode": "repulse",
			"parallax": {
			  "enable": false,
			  "force": 2,
			  "smooth": 10
			}
		  },
		  "resize": {
			"delay": 0.5,
			"enable": true
		  }
		},
		"modes": {
		  "trail": {
			"delay": 1,
			"pauseOnStop": false,
			"quantity": 1
		  },
		  "attract": {
			"distance": 200,
			"duration": 0.4,
			"easing": "ease-out-quad",
			"factor": 1,
			"maxSpeed": 50,
			"speed": 1
		  },
		  "bounce": {
			"distance": 200
		  },
		  "bubble": {
			"distance": 200,
			"duration": 0.4,
			"mix": false,
			"divs": {
			  "distance": 200,
			  "duration": 0.4,
			  "mix": false,
			  "selectors": []
			}
		  },
		  "connect": {
			"distance": 80,
			"links": {
			  "opacity": 0.5
			},
			"radius": 60
		  },
		  "grab": {
			"distance": 100,
			"links": {
			  "blink": false,
			  "consent": false,
			  "opacity": 1
			}
		  },
		  "push": {
			"default": true,
			"groups": [],
			"quantity": 4
		  },
		  "remove": {
			"quantity": 2
		  },
		  "repulse": {
			"distance": 200,
			"duration": 0.4,
			"factor": 100,
			"speed": 1,
			"maxSpeed": 50,
			"easing": "ease-out-quad",
			"divs": {
			  "distance": 200,
			  "duration": 0.4,
			  "factor": 100,
			  "speed": 1,
			  "maxSpeed": 50,
			  "easing": "ease-out-quad",
			  "selectors": []
			}
		  },
		  "slow": {
			"factor": 3,
			"radius": 200
		  },
		  "light": {
			"area": {
			  "gradient": {
				"start": {
				  "value": "#ffffff"
				},
				"stop": {
				  "value": "#000000"
				}
			  },
			  "radius": 1000
			},
			"shadow": {
			  "color": {
				"value": "#000000"
			  },
			  "length": 2000
			}
		  }
		}
	  },
	  "manualParticles": [],
	  "particles": {
		"bounce": {
		  "horizontal": {
			"value": 1
		  },
		  "vertical": {
			"value": 1
		  }
		},
		"collisions": {
		  "absorb": {
			"speed": 2
		  },
		  "bounce": {
			"horizontal": {
			  "value": 1
			},
			"vertical": {
			  "value": 1
			}
		  },
		  "enable": false,
		  "maxSpeed": 10,
		  "mode": "bounce",
		  "overlap": {
			"enable": true,
			"retries": 0
		  }
		},
		"color": {
		  "value": "#ff0000",
		  "animation": {
			"h": {
			  "count": 0,
			  "enable": true,
			  "speed": 20,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			},
			"s": {
			  "count": 0,
			  "enable": false,
			  "speed": 1,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			},
			"l": {
			  "count": 0,
			  "enable": false,
			  "speed": 1,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			}
		  }
		},
		"effect": {
		  "close": true,
		  "fill": true,
		  "options": {},
		  "type": []
		},
		"groups": {},
		"move": {
		  "angle": {
			"offset": 0,
			"value": 90
		  },
		  "attract": {
			"distance": 200,
			"enable": false,
			"rotate": {
			  "x": 3000,
			  "y": 3000
			}
		  },
		  "center": {
			"x": 50,
			"y": 50,
			"mode": "percent",
			"radius": 0
		  },
		  "decay": 0,
		  "distance": {},
		  "direction": "none",
		  "drift": 0,
		  "enable": true,
		  "gravity": {
			"acceleration": 9.81,
			"enable": false,
			"inverse": false,
			"maxSpeed": 50
		  },
		  "path": {
			"clamp": true,
			"delay": {
			  "value": 0
			},
			"enable": false,
			"options": {}
		  },
		  "outModes": {
			"default": "out",
			"bottom": "out",
			"left": "out",
			"right": "out",
			"top": "out"
		  },
		  "random": false,
		  "size": false,
		  "speed": 1,
		  "spin": {
			"acceleration": 0,
			"enable": false
		  },
		  "straight": false,
		  "trail": {
			"enable": false,
			"length": 10,
			"fill": {}
		  },
		  "vibrate": false,
		  "warp": false
		},
		"number": {
		  "density": {
			"enable": true,
			"width": 1920,
			"height": 1080
		  },
		  "limit": {
			"mode": "delete",
			"value": 0
		  },
		  "value": 80
		},
		"opacity": {
		  "value": 0.5,
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 2,
			"decay": 0,
			"delay": 0,
			"sync": false,
			"mode": "auto",
			"startValue": "random",
			"destroy": "none"
		  }
		},
		"reduceDuplicates": false,
		"shadow": {
		  "blur": 0,
		  "color": {
			"value": "#000"
		  },
		  "enable": false,
		  "offset": {
			"x": 0,
			"y": 0
		  }
		},
		"shape": {
		  "close": true,
		  "fill": true,
		  "options": {},
		  "type": "circle"
		},
		"size": {
		  "value": {
			"min": 1,
			"max": 3
		  },
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 5,
			"decay": 0,
			"delay": 0,
			"sync": false,
			"mode": "auto",
			"startValue": "random",
			"destroy": "none"
		  }
		},
		"stroke": {
		  "width": 0
		},
		"zIndex": {
		  "value": 0,
		  "opacityRate": 1,
		  "sizeRate": 1,
		  "velocityRate": 1
		},
		"destroy": {
		  "bounds": {},
		  "mode": "none",
		  "split": {
			"count": 1,
			"factor": {
			  "value": 3
			},
			"rate": {
			  "value": {
				"min": 4,
				"max": 9
			  }
			},
			"sizeOffset": true,
			"particles": {}
		  }
		},
		"roll": {
		  "darken": {
			"enable": false,
			"value": 0
		  },
		  "enable": false,
		  "enlighten": {
			"enable": false,
			"value": 0
		  },
		  "mode": "vertical",
		  "speed": 25
		},
		"tilt": {
		  "value": 0,
		  "animation": {
			"enable": false,
			"speed": 0,
			"decay": 0,
			"sync": false
		  },
		  "direction": "clockwise",
		  "enable": false
		},
		"twinkle": {
		  "lines": {
			"enable": false,
			"frequency": 0.05,
			"opacity": 1
		  },
		  "particles": {
			"enable": false,
			"frequency": 0.05,
			"opacity": 1
		  }
		},
		"wobble": {
		  "distance": 5,
		  "enable": false,
		  "speed": {
			"angle": 50,
			"move": 10
		  }
		},
		"life": {
		  "count": 0,
		  "delay": {
			"value": 0,
			"sync": false
		  },
		  "duration": {
			"value": 0,
			"sync": false
		  }
		},
		"rotate": {
		  "value": 0,
		  "animation": {
			"enable": false,
			"speed": 0,
			"decay": 0,
			"sync": false
		  },
		  "direction": "clockwise",
		  "path": false
		},
		"orbit": {
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 1,
			"decay": 0,
			"delay": 0,
			"sync": false
		  },
		  "enable": false,
		  "opacity": 1,
		  "rotation": {
			"value": 45
		  },
		  "width": 1
		},
		"links": {
		  "blink": false,
		  "color": {
			"value": "#ffffff"
		  },
		  "consent": false,
		  "distance": 150,
		  "enable": false,
		  "frequency": 1,
		  "opacity": 0.4,
		  "shadow": {
			"blur": 5,
			"color": {
			  "value": "#000"
			},
			"enable": false
		  },
		  "triangles": {
			"enable": false,
			"frequency": 1
		  },
		  "width": 1,
		  "warp": false
		},
		"repulse": {
		  "value": 0,
		  "enabled": false,
		  "distance": 1,
		  "duration": 1,
		  "factor": 1,
		  "speed": 1
		}
	  },
	  "pauseOnBlur": true,
	  "pauseOnOutsideViewport": true,
	  "responsive": [],
	  "smooth": false,
	  "style": {},
	  "themes": [],
	  "zLayers": 100,
	  "name": "Basic",
	  "motion": {
		"disable": false,
		"reduce": {
		  "factor": 4,
		  "value": true
		}
	  }
	}	
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'Artists': {
		'Backgrounds': '<a href="https://queenbeebee.carrd.co/" target="_blank">Queen BeeBee</a>',
		'Sprites': '<a href="https://queenbeebee.carrd.co/" target="_blank">Queen BeeBee</a>'
	},
	'Audio': {
		'Music': `<span xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'> _ghost</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</span>`
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'Theme': '_ghost_-_Reverie_(small_theme).mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'Dandelion': 'DandelionTimelapse.mp4'
});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	morning: 'morning.png',
	afternoon: 'afternoon.png',
	night: 'night.png',
	nightLight: 'night-light.png',
});


// Define the Characters
monogatari.characters ({
	p: {
		name: '{{player.name}}',
		color: '#ff3951'
	},
	y: {
		name: '{{yui_name}}',
		color: '#00bfff',
		directory: 'yui',
		sprites :{
			angry: 'angry.png',
			smiling: 'smiling.png',
			happy: 'happy.png',
			worried: 'worried.png',
		}
	}
});

const { Storage } = monogatari;

monogatari.script ({
	// The game starts here.
	'Start':[
			{'Conditional': {
				'Condition': function () {
					return Storage.get ('played') == 'true';
				},
				'True': {'Choice':{
					'Text': 'It seems you have already played the demo, do you wish to skip the introduction?',
					'Skip':{
						'Text': 'Skip',
						'Do': 'jump Topics'
					},
					'Continue':{
						'Text': 'Continue',
						'Do': 'jump Introduction'
					}
				}},
				'False': 'jump Introduction'
			}}
		],

		'Introduction': [
			'clear',
			'show scene black with fadeIn',
			{'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					Storage.set ('PlayerName', input);
					storage.player.name = input;
					this.storage ({ player: { name: input } });	
					return true;
				},
				'Warning': 'You must enter a name!'
			}},
			'centered You know?...',
			'centered At first, there was nothing, only void. A void so dark and silent...',
			'show particles universe',
			'centered Then, suddenly, they started to appear...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 20;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 80;
					return true;
				},
			}},
			'show particles universe',
			'y There weren\'t many at first but little by little, more and more came...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 50;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 20;
					return true;
				},
			}},
			'show particles universe',
			'y Tenths became hundreds...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 80;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 50;
					return true;
				},
			}},
			'show particles universe',
			'y Hundreds became thousands...',
			'y Soon they weren\'t just there... they were interacting, joining forces for a higher goal...',
			'hide particles',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.links.enable = true;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.links.enable = false;
					return true;
				},
			}},
			'show particles universe',
			'y They were getting ready...',
			'hide particles',

			'play music Theme',
			'show scene morning',
			'show character y happy center with fadeIn',

			'show character y smiling with fadeIn',
			'y "Nice to meet you, {{player.name}}."',
			'y "I’m Amelia — a student at Carleton University."',
			'y "They say you’ve been chosen for a special mission."',
			'y "Many students here are struggling to find fair housing."',
			'y "I need your help. My landlord, Mr. Grant, has some rules that sound... questionable."',
			'y "He’s asking for first and last month’s rent *and* a $300 cleaning fee upfront. He also says I can’t invite friends over without asking first."',
			'y "What do you think — is that okay?"',

			{
			'Choice': {
				'Dialog': 'Your judgment, Agent:',
				'Yes': {
				'Text': 'Seems fine to me.',
				'Do': 'jump AmeliaChoiceYes'
				},
				'No': {
				'Text': 'That sounds risky or illegal.',
				'Do': 'jump AmeliaChoiceNo'
				},
				'Maybe': {
				'Text': 'It might not matter much.',
				'Do': 'jump AmeliaChoiceMaybe'
				}
			}
			},
		],

					// --- Feedback branches ---

		'AmeliaChoiceYes': [
			'show character y worried',
			'y "Oh… I thought so, but I’m not sure anymore."',
			'centered <b>Feedback</b>',
			'nvl "That’s not correct. In Ontario, landlords can only ask for last month’s rent and a reasonable key deposit — not a $300 cleaning fee."',
			'nvl "Restricting visitors also interferes with a tenant’s right to reasonable enjoyment of their home."',
			'y "Oh no… I almost signed the contract. Thank you for clarifying!"',
			'jump AmeliaResult'
		],

		'AmeliaChoiceNo': [
			'show character y happy',
			'y "Yeah, I had a bad feeling about that!"',
			'centered <b>Feedback</b>',
			'nvl "Correct! The cleaning fee is illegal under the Residential Tenancies Act."',
			'nvl "And visitor restrictions violate tenant rights."',
			'y "Thanks, {{player.name}} — you just saved me from a terrible landlord!"',
			'jump AmeliaResult'
		],

		'AmeliaChoiceMaybe': [
			'show character y worried',
			'y "Maybe you’re right… maybe it’s just a small rule."',
			'centered <b>Feedback</b>',
			'nvl "Not quite. Small details matter in rental law."',
			'nvl "Extra upfront fees and unreasonable visitor rules are both red flags."',
			'y "I’ll be more careful from now on."',
			'jump AmeliaResult'
			],

		'AmeliaResult': [
			'hide character y with fadeOut',
			'show scene #fff with fadeIn',
			'centered <b>Case Summary</b>',
			'nvl "<b>Red Flags:</b> Illegal cleaning fee, unreasonable visitor restriction."',
			'nvl "<b>Legal Reference:</b> Residential Tenancies Act, s.134 — unlawful charges and interference with enjoyment."',
			'nvl "You’ve completed your first mission as a Rental Agent."',
			'centered <b>Next case coming soon...</b>',
			'end',
			'jump Topics'
		],
			

		'Topics': [
			'show scene morning',
			'show character y smiling with fadeIn',
			function () {
				Storage.set ('played', true);
				return true;
			},
			{'Choice':{
				'Text':	'Let\'s see, what do you want to know about?',
				'Animations':{
					'Text': 'Animations',
					'Do': 'jump Animations'
				},
				'Media':{
					'Text': 'Multimedia',
					'Do': 'jump Media'
				},
				'Scripting':{
					'Text': 'Scripting',
					'Do': 'jump Script'
				},
				'Playing':{
					'Text': 'Playing',
					'Do': 'jump Playing'
				},
				'Nothing': {
					'Text': 'Nothing',
					'Do': 'jump Nothing',
					'Condition': function () {
						const { playing, media, scripting, animations } = this.storage();
						return playing && media && scripting && animations;
					}
				}
			}}
		],

		'Animations': [
			function () {
				this.storage({ animations: true });
				return true;
			},
			'show scene morning with fadeIn',
			'show character y happy with fadeIn',
			'y Oh, animations are fun! They make weird things happen to us and the world we live in.',
			'y You can animate pretty much anything yourself but there are some predefined animations that you can start using in both backgrounds and us characters',
			'y For example, we can have a small earthquake just for ourselves.',
			'show scene morning with shake infinite',
			'show character y happy with fadeIn',
			'y Oh wait, if the world is moving how come I\'m standing still, that doesn\'t make any sense does it?',
			'show character y smiling with shake infinite',
			'y Ah! That\'s more like it, as you can see, things can get real weird around here for no other reason than someone wanting to have fun',
			'p Eh... isn\'t that kind of... bad for us?',
			'show character y worried with shake infinite',
			'y Bad? Wait till you hear how our existence ends as soon as they close this or worse, how we get amnesia every time they forget to save!',
			'show scene morning with zoomIn',
			'show character y happy with fadeIn',
			'y But hey, things aren\'t so bad, we also get to experience things that no one else can.',
			{'Function': {
				'Apply': function () {
					this.action ('particles').particles ('universe').particles.number.value = 200;
					this.action ('particles').particles ('universe').particles.links.enable = false;
					return true;
				},
				'Reverse': function () {
					this.action ('particles').particles ('universe').particles.number.value = 100;
					this.action ('particles').particles ('universe').particles.links.enable = true;
					return true;
				},
			}},
			'show particles universe',

			'y I bet they don\'t have this things where the real you is from.',
			'p What are this things? Can I touch them?',

			'y Sure you can! These are called particles, useful for creating some effects like <i>wind, stars, snow, rain</i> and well, pretty much all sorts of weird stuff.',
			'y If you are the geeky type, then you should know all animations are mainly achieved through CSS but you can use JavaScript as well, the choice is yours!',
			'hide particles',
			'jump Topics'
		],

		'Nothing':[
			'show scene nightLight',
			'show character y happy with fadeIn',
			'y Well, guess that ends up our adventure for now',
			'p Already? I was having so much fun!',
			'y Awww sorry {{player.name}}, our writer has a limited imagination so this was really short',
			'y Nontheless, I hope you were able to learn a lot about this amazing world we live in.',
			'y I hope you got some inspiration and are ready to bring a new novel to the world!',
			'y I\'ll be waiting for it, good luck!',
			'notify End 2000',
			'end'
		],

		'Script':[
			function () {
				this.storage({ scripting: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y As a writer, having a simple language to write is important, that\'s why Monogatari has a Ren\'py-like language.',
			'p Monogatari?...',
			'y Yes! Monogatari is the engine we are living on, it\'s important to keep it simple enough so writers, the ones that make up all our lifes, can focus on that, creating awesome stories for everyone',
			'y If Ren\'py is familiar to you, then writing in Monogatari will be incredibly easy, if not, the syntax is very simple and you\'ll be writing in no time.',
			'p Well, it ain\'t familiar for me, that\'s for sure...',
			'show character y smiling with fadeIn',
			'y No silly, I was talking to real you, who probably has played a lot of novels just like this one',
			'show character y happy with fadeIn',
			'y In the documentation you\'ll find all the examples you need to start writing.',
			'y Remember that Monogatari is open source, and released under the MIT License so you can use it for all your projects. I really hope to see your project very soon!',
			'y As you may know the web has evolved a lot, you\'ll be able to create visual novels as we know them, but also create more incredible things!',

			'y It is really up to your imagination!, there are tons and tons of APIs for the web, and you can easily integrate them to your visual novel',
			'y You name it, Paypal integration for in-app purchases and more, real-time information, you can even create the whole backend for your visual novel in order to have accounts, protected information etc. The sky is the limit!',

			'y Now, Monogatari is responsive, which means that everyone will be able to enjoy of your novel regardless the device they\'re on.',
			'y The inteface is written in HTML5 while the functionality as I said before is written in Javascript and all the styling is mainly CSS.',
			'y This means you could also access real time data and a lot more with the APIs available for the web, even connect it to social media.',
			'y Try Monogatari, extend it, and create Visual Novels like no one has seen before!',
			'jump Topics'
		],

		'Media':[
			function () {
				this.storage({ media: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y So... media, what can we see in our world?',
			'y Well, images are what you are seeing right now but there are a few tricks left.',
			'y Videos for example are a nice way to show some more motion, let me show you what I mean.',
			'show video Dandelion background with fadeIn',
			'show character y smiling',
			'y Nice right? But that\'s not all, unless you\'ve got this muted, you should be hearing to some music.',
			'hide video Dandelion',
			'show character y worried',
			'y You can hear <i>music, sounds and voices</i> on a novel, there\'s only music on this one because... guess what?',
			'p The writer was kind of... lazy?',
			'y Exactly! But hey, there are many others who will take real advantage of all this posibilities!',
			'y He also sucks at drawing and design so you may be asking why does everything look so good?.',
			'y Well, the resources used here were made by really awesome people wiling to share their awesomeness!',
			'show character y happy',
			'y Now then, this world is a web based one, you may use any format supported by browsers, that means the basic JPG, PNG and GIF (yeah, animated GIFs) as well as others like SVG!',
			'y I really recommend you using SVG, it will surely enhance the experience for everyone since no matter what resolution their screen is, it will look awesome.',
			'p Screen?... Resolution? what are you talking about?',
			'y Oh! Guess I forgot to tell you we were being displayed inside a screen... think of it as a mirror to our reality and the resolution is just how good we look',
			'jump Topics'
		],

		'Playing':[
			function () {
				this.storage({ playing: true });
				return true;
			},
			'show scene afternoon',
			'show character y happy with fadeIn',
			'y Playing a visual novel made with Monogatari is an awesome experience.',
			'y If it\'s on the web, you won\'t need to install anything, just enter the page and play! as simple as that.',
			'y Now, it depends entirely on the developer but the features they can add to your game are infinite! so you will be enjoying a lot of things you\'ve never seen in a VN before.',
			'y Sharing a game with friends is now even easier than before.',
			'jump Topics'
		]
});
