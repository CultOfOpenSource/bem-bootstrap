module.exports = {
	block: 'page',
	title: 'Cards · Bootstrap',
	favicon: 'https://getbootstrap.com/favicon.ico',
	head: [{
		elem: 'meta',
		attrs: {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}
	}, {
		elem: 'css',
		url: 'card.min.css'
	}],
	scripts: [{
		elem: 'js',
		url: 'card.min.js'
	}],
	content: [{
		block: 'main',
		content: [{
			block: 'bd_title',
			content: ['Cards'],
			attrs: {
				id: 'content',
			}
		}, {
			block: 'bd-lead',
			content: ["Bootstrap's cards provide a flexible and extensible content container with multiple variants and options."],
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'About',
				}, {
					block: 'anchorjs-link',
					url: '#about',
				}, ]
			},
			attrs: {
				id: 'about',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["A "]
			}, {
				tag: 'strong',
				content: ["card "]
			}, {
				tag: '',
				content: ["is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."]
			}, ]
		}, {
			tag: 'p',
			content: "If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'Example',
				}, {
					block: 'anchorjs-link',
					url: '#example',
				}, ]
			},
			attrs: {
				id: 'example',
			}
		}, {
			tag: 'p',
			content: "Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components."
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: "Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various "
			}, {
				tag: "a href='https://getbootstrap.com/docs/4.0/components/card/#sizing'",
				content: "sizing options. "
			}, ]
		}, {
			block: 'example',
			content: [{
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-img-top',
					url: '...',
				}, {
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'This is some text within a card body.'
					}, {
						block: 'card-text',
						content: "Some quick example text to build on the card title and make up the bulk of the card's content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			}]
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'Content types',
				}, {
					block: 'anchorjs-link',
					url: '#content-types',
				}, ]
			},
			attrs: {
				id: 'content-types',
			}
		}, {
			tag: 'p',
			content: "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported."
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Body',
				}, {
					block: 'anchorjs-link',
					url: '#body',
				}, ]
			},
			attrs: {
				id: 'body',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["The building block of a card is the "]
			}, {
				block: 'code',
				content: '.card-body'
			}, {
				tag: '',
				content: [". Use it whenever you need a padded section within a card."]
			}, ],
		}, {
			block: 'example',
			content: {
				block: 'card',
				content: [{
					block: 'card-body',
					content: ['This is some text within a card body.'],
				}, ]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Titles, text, and links',
				}, {
					block: 'anchorjs-link',
					url: '#titles-text-and-links',
				}, ]
			},
			attrs: {
				id: 'titles-text-and-links',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Card titles are used by adding "]
			}, {
				block: 'code',
				content: '.card-title'
			}, {
				tag: '',
				content: [" to a "]
			}, {
				block: 'code',
				content: ['&lt', 'h', '*', '&gt']
			}, {
				tag: '',
				content: [" tag. In the same way, links are added and placed next to each other by adding "]
			}, {
				block: 'code',
				content: '.card-link'
			}, {
				tag: '',
				content: [" to an "]
			}, {
				block: 'code',
				content: ['&lt', 'a', '&gt']
			}, {
				tag: '',
				content: [" tag."]
			}, ],
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Subtitles are used by adding a "]
			}, {
				block: 'code',
				content: '.card-subtitle'
			}, {
				tag: '',
				content: [" to a "]
			}, {
				block: 'code',
				content: ['&lt', 'h', '*', '&gt']
			}, {
				tag: '',
				content: ["  tag. If the "]
			}, {
				block: 'code',
				content: '.card-title'
			}, {
				tag: '',
				content: [" and the "]
			}, {
				block: 'code',
				content: '.card-subtitle'
			}, {
				tag: '',
				content: [" items are placed in a "]
			}, {
				block: 'code',
				content: '.card-body'
			}, {
				tag: '',
				content: [" item, the card title and subtitle are aligned nicely. "]
			}, ],
		}, {
			block: 'example',
			content: {
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Card title'
					}, {
						block: 'card-subtitle',
						mix: [{
							block: 'mb-2',
						}, {
							block: 'text-muted',
						}],
						content: 'Card subtitle'
					}, {
						block: 'card-text',
						content: "Some quick example text to build on the card title and make up the bulk of the card's content."
					}, {
						block: 'card-link',
						url: '#',
						content: 'Card link'
					}, {
						block: 'card-link',
						url: '#',
						content: 'Another link'
					}, ],
				}, ]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Images',
				}, {
					block: 'anchorjs-link',
					url: '#images',
				}, ]
			},
			attrs: {
				id: 'images',
			}
		}, {
			tag: 'p',
			content: [{
				block: 'code',
				content: '.card-img-top'
			}, {
				tag: '',
				content: [" places an image to the top of the card. With "]
			}, {
				block: 'code',
				content: '.card-text'
			}, {
				tag: '',
				content: ["text can be added to the card. Text within "]
			}, {
				block: 'code',
				content: '.card-text'
			}, {
				tag: '',
				content: [" can also be styled with the standard HTML tags."]
			}, ],
		}, {
			block: 'example',
			content: {
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-img-top',
					url: '...',
				}, {
					block: 'card-body',
					content: [{
						block: 'card-text',
						content: "Some quick example text to build on the card title and make up the bulk of the card's content."
					}, ],
				}, ]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'List groups',
				}, {
					block: 'anchorjs-link',
					url: '#list-groups',
				}, ]
			},
			attrs: {
				id: 'list-groups',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Create lists of content in a card with a flush list group."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'list-group',
					mix: {
						"block": "list-group-flush"
					},
					content: [{
						block: 'list-group-item',
						content: "Cras justo odio"
					}, {
						block: 'list-group-item',
						content: "Dapibus ac facilisis in"
					}, {
						block: 'list-group-item',
						content: "Vestibulum at eros"
					}, ],
				}, ]
			}
		}, {
			block: 'example',
			content: {
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-header',
					content: 'Featured',
				}, {
					block: 'list-group',
					mix: {
						"block": "list-group-flush"
					},
					content: [{
						block: 'list-group-item',
						content: "Cras justo odio"
					}, {
						block: 'list-group-item',
						content: "Dapibus ac facilisis in"
					}, {
						block: 'list-group-item',
						content: "Vestibulum at eros"
					}, ],
				}, ]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Kitchen sink',
				}, {
					block: 'anchorjs-link',
					url: '#kitchen-sink',
				}, ]
			},
			attrs: {
				id: 'kitchen-sink',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card."]
			}, ]
		}, {
			block: 'example',
			content: {
				"block": "card",
				"attrs": {
					"style": "width: 20rem;"
				},
				"content": [{
					"block": "card-img-top"
				}, {
					"block": "card-body",
					"content": [{
						"block": "card-title",
						"content": "Card title"
					}, {
						"block": "card-subtitle",
						"mix": [{
							"block": "mb-2"
						}, {
							"block": "text-muted"
						}],
						"content": "Card subtitle"
					}, {
						"block": "card-text",
						"content": "Some quick example text to build on the card title and make up the bulk of the card's content."
					}]
				}, {
					"block": "list-group",
					"mix": {
						"block": "list-group-flush"
					},
					"content": [{
						"block": "list-group-item",
						"content": "Cras justo odio"
					}, {
						"block": "list-group-item",
						"content": "Dapibus ac facilisis in"
					}, {
						"block": "list-group-item",
						"content": "Vestibulum at eros"
					}]
				}, {
					"block": "card-body",
					"content": [{
						"block": "card-link",
						"url": "#",
						"content": "Card link"
					}, {
						"block": "card-link",
						"url": "#",
						"content": "Another link"
					}]
				}]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Header and footer',
				}, {
					block: 'anchorjs-link',
					url: '#header-and-footer',
				}, ]
			},
			attrs: {
				id: 'header-and-footer',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Add an optional header and/or footer within a card."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card',
				content: [{
					block: 'card-header',
					content: 'Featured',
				}, {
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment',
					}, {
						block: 'card-text',
						content: 'With supporting text below as a natural lead-in to additional content.',
					}, {
						block: 'btn',
						mix: 'btn-primary',
						url: '#',
						content: 'Go somewhere',
					}, ],
				}]
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Card headers can be styled by adding "]
			}, {
				block: 'code',
				content: '.card-header'
			}, {
				tag: '',
				content: [" to "]
			}, {
				block: 'code',
				content: ['&lt', 'h', '*', '&gt']
			}, {
				tag: '',
				content: [" elements."]
			}, ],
		}, {
			block: 'example',
			content: {
				block: 'card',
				content: [{
					block: 'card-header',
					tag: 'h4',
					content: 'Featured',
				}, {
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment',
					}, {
						block: 'card-text',
						content: 'With supporting text below as a natural lead-in to additional content.',
					}, {
						block: 'btn',
						mix: 'btn-primary',
						url: '#',
						content: 'Go somewhere',
					}, ],
				}]
			}
		}, {
			block: 'example',
			content: {
				block: 'card',
				content: [{
					block: 'card-header',
					content: 'Quote',
				}, {
					block: 'card-body',
					content: [{
						block: 'blockquote',
						mix: 'mb-0',
						content: [{
							tag: 'p',
							content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
						}, {
							block: 'blockquote-footer',
							content: [{
								"html": "Someone famous in "
							}, {
								"tag": "cite",
								"attrs": {
									"title": "Source Title"
								},
								"content": "Source Title"
							}]
						}, ]
					}, ],
				}]
			}
		}, {
			block: 'example',
			content: {
				block: 'card',
				mix: 'text-center',
				content: [{
					block: 'card-header',
					tag: 'h4',
					content: 'Featured',
				}, {
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment',
					}, {
						block: 'card-text',
						content: 'With supporting text below as a natural lead-in to additional content.',
					}, {
						block: 'btn',
						mix: 'btn-primary',
						url: '#',
						content: 'Go somewhere',
					}, ],
				}, {
					block: 'card-footer',
					mix: 'text-muted',
					content: '2 days ago',
				}, ]
			}
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'Sizing',
				}, {
					block: 'anchorjs-link',
					url: '#sizing',
				}, ]
			},
			attrs: {
				id: 'sizing',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Cards assume no specific "]
			}, {
				block: 'code',
				content: 'width'
			}, {
				tag: '',
				content: [" to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities."]
			}, ]
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Using grid markup',
				}, {
					block: 'anchorjs-link',
					url: '#using-grid-markup',
				}, ]
			},
			attrs: {
				id: 'using-grid-markup',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Using the grid, wrap cards in columns and rows as needed."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'row',
				content: [{
					block: 'col-sm-6',
					content: {
						block: 'card',
						attrs: {
							style: 'width: 20rem;',
						},
						content: [{
							block: 'card-body',
							content: [{
								block: 'card-title',
								content: 'Special title treatment'
							}, {
								block: 'card-text',
								content: "With supporting text below as a natural lead-in to additional content."
							}, {
								block: 'btn',
								url: '#',
								mods: {
									primary: true
								},
								content: 'Go somewhere'
							}, ],
						}, ]
					}
				}, {
					block: 'col-sm-6',
					content: {
						block: 'card',
						attrs: {
							style: 'width: 20rem;',
						},
						content: [{
							block: 'card-body',
							content: [{
								block: 'card-title',
								content: 'Special title treatment'
							}, {
								block: 'card-text',
								content: "With supporting text below as a natural lead-in to additional content."
							}, {
								block: 'btn',
								url: '#',
								mods: {
									primary: true
								},
								content: 'Go somewhere'
							}, ],
						}, ]
					}
				}, ],
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Using utilities',
				}, {
					block: 'anchorjs-link',
					url: '#using-utilities',
				}, ]
			},
			attrs: {
				id: 'using-utilities',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Use our handful of "]
			}, {
				tag: "a href='https://getbootstrap.com/docs/4.0/utilities/sizing/'",
				content: "available sizing utilities"
			}, {
				tag: '',
				content: [" to quickly set a card’s width."]
			}, ]
		}, {
			block: 'example',
			content: [{
				block: 'card',
				mix: 'w-75',
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ],
			}, {
				block: 'card',
				mix: 'w-50',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			}, ],
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Using custom CSS',
				}, {
					block: 'anchorjs-link',
					url: '#using-custom-css',
				}, ]
			},
			attrs: {
				id: 'using-custom-css',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Use custom CSS in your stylesheets or as inline styles to set a width."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Text alignment',
				}, {
					block: 'anchorjs-link',
					url: '#text-alignment',
				}, ]
			},
			attrs: {
				id: 'text-alignment',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["You can quickly change the text alignment of any card—in its entirety or specific parts—with our "]
			}, {
				tag: "a href='https://getbootstrap.com/docs/4.0/utilities/text/#text-alignment'",
				content: "text align classes."
			}, ]
		}, {
			block: 'example',
			content: [{
				block: 'card',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			}, {
				block: 'card',
				mix: 'text-center',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			}, {
				block: 'card',
				mix: 'text-right',
				attrs: {
					style: 'width: 20rem;',
				},
				content: [{
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			}],
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Navigation',
				}, {
					block: 'anchorjs-link',
					url: '#navigation',
				}, ]
			},
			attrs: {
				id: 'navigation',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Add some navigation to a card’s header (or block) with Bootstrap’s "]
			}, {
				tag: "a href='https://getbootstrap.com/docs/4.0/components/navs/'",
				content: "nav components."
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card',
				mix: 'text-center',
				content: [{
					block: 'card-header',
					content: [{
						block: 'nav',
						mix: [{
							block: 'nav-tabs'
						}, {
							block: 'card-header-tabs',
						}],
						content: [{
							block: 'nav-item',
							content: {
								block: 'nav-link',
								url: '#',
								content: 'Active',
								mix: 'active',
							},
						}, {
							block: 'nav-item',
							content: {
								block: 'nav-link',
								url: '#',
								content: 'Link',
							},
						}, {
							block: 'nav-item',
							content: {
								block: 'nav-link',
								url: '#',
								content: 'Disabled',
								mix: 'disabled',
							},
						}, ],
					}],
				}, {
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			},
		}, {
			block: 'example',
			content: {
				block: 'card',
				mix: 'text-center',
				content: [{
					block: 'card-header',
					content: [{
						block: 'nav',
						mix: [{
							block: 'nav-pills'
						}, {
							block: 'card-header-pills',
						}],
						content: [{
							block: 'nav-item',
							content: {
								block: 'nav-link',
								url: '#',
								content: 'Active',
								mix: 'active',
							},
						}, {
							block: 'nav-item',
							content: {
								block: 'nav-link',
								url: '#',
								content: 'Link',
							},
						}, {
							block: 'nav-item',
							content: {
								block: 'nav-link',
								url: '#',
								content: 'Disabled',
								mix: 'disabled',
							},
						}, ],
					}],
				}, {
					block: 'card-body',
					content: [{
						block: 'card-title',
						content: 'Special title treatment'
					}, {
						block: 'card-text',
						content: "With supporting text below as a natural lead-in to additional content."
					}, {
						block: 'btn',
						url: '#',
						mods: {
							primary: true
						},
						content: 'Go somewhere'
					}, ],
				}, ]
			},
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'Images',
				}, {
					block: 'anchorjs-link',
					url: '#images-1',
				}, ]
			},
			attrs: {
				id: 'images-1',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card."]
			}, ]
		}, {
			tag: 'h3',
			content: 'Image caps',
			attrs: {
				id: 'image-caps',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card."]
			}, ]
		}, {
			block: 'example',
			content: [{
				"block": "card",
				mix: 'mb-3',
				"content": [{
					"block": "card-img-top",
					url: '...',
				}, {
					"block": "card-body",
					"content": [{
						"block": "card-title",
						"content": "Card title"
					}, {
						"block": "card-text",
						"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					}, {
						"block": "card-text",
						"content": [{
							"block": "text-muted",
							"content": "Last updated 3 mins ago"
						}]
					}]
				}]
			}, {
				"block": "card",
				"content": [{
					"block": "card-body",
					"content": [{
						"block": "card-title",
						"content": "Card title"
					}, {
						"block": "card-text",
						"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					}, {
						"block": "card-text",
						"content": [{
							"block": "text-muted",
							"content": "Last updated 3 mins ago"
						}]
					}]
				}, {
					"block": "card-img-bottom",
					url: '...',
				}, ]
			}, ],
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Image overlays',
				}, {
					block: 'anchorjs-link',
					url: '#image-overlays',
				}, ]
			},
			attrs: {
				id: 'image-overlays',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'example',
				content: ['dark', ].map(function(modName) {
					var mod = {};
					mod[modName] = true;
					return {
						block: 'card',
						mix: [{
							"block": 'bg-' + modName,
						}, {
							"block": 'text-white',
						}, ],
						content: [{
							block: 'card-img-top',
							url: '...',
						}, {
							block: 'card-img-overlay',
							content: [{
								block: 'card-title',
								content: 'Card title',
							}, {
								block: 'card-text',
								content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
							}, {
								block: 'card-text',
								content: "Last updated 3 mins ago",
							}, ],
						}, ],
					}
				})
			},
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'Card styles',
				}, {
					block: 'anchorjs-link',
					url: '#card-styles',
				}, ]
			},
			attrs: {
				id: 'card-styles',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Cards include various options for customizing their backgrounds, borders, and color."]
			}, ]
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Background and color',
				}, {
					block: 'anchorjs-link',
					url: '#background-and-color',
				}, ]
			},
			attrs: {
				id: 'background-and-color',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Use "]
			}, {
				tag: "a href='https://getbootstrap.com/docs/4.0/utilities/colors/'",
				content: "text and background utilities"
			}, {
				tag: '',
				content: [" to change the appearance of a card."]
			}, ]
		}, {
			block: 'example',
			content: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', ].map(function(modName) {
				var mod = {};
				mod[modName] = true;
				return {
					block: 'card',
					mix: [{
						"block": 'bg-' + modName,
                    },
                    //Попытался использовать match, чтобы у белой карточки был text-dark, но что-то не пошло...
                    {
						"block": 'text-white',
					}, {
						"block": 'mb-3',
					}, ],
					attrs: {
						style: 'width: 20rem;',
					},
					content: [{
						block: 'card-header',
						content: 'Header',
					}, {
						block: 'card-body',
						content: [{
							block: 'card-title',
							content: modName + ' card title',
						}, {
							block: 'card-text',
							content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
						}, ],
					}, ],
				}
			})
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Border',
				}, {
					block: 'anchorjs-link',
					url: '#border',
				}, ]
			},
			attrs: {
				id: 'border',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Use "]
			}, {
				tag: "a href='https://getbootstrap.com/docs/4.0/utilities/borders/'",
				content: "border utilities"
			}, {
				tag: '',
				content: [" to change just the "]
			}, {
				block: 'code',
				content: 'border-color'
			}, {
				tag: '',
				content: [" of a card. Note that you can put "]
			}, {
				block: 'code',
				content: '.text-{color}'
			}, {
				tag: '',
				content: [" classes on the parent "]
			}, {
				block: 'code',
				content: '.card'
			}, {
				tag: '',
				content: [" or a subset of the card’s contents as shown below."]
			}, ]
		}, {
			block: 'example',
			content: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', ].map(function(modName) {
				var mod = {};
				mod[modName] = true;
				return {
					block: 'card',
					mix: [{
						"block": 'border-' + modName,
					}, {
						"block": 'mb-3',
					}, ],
					attrs: {
						style: 'width: 20rem;',
					},
					content: [{
						block: 'card-header',
						content: 'Header',
					}, {
						block: 'card-body',
						mix: [{
                            //Такая же проблема с цветом текста
							"block": 'text-' + modName,
						}, ],
						content: [{
							block: 'card-title',
							content: modName + ' card title',
						}, {
							block: 'card-text',
							content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
						}, ],
					}, ],
				}
			})
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Mixins utilities',
				}, {
					block: 'anchorjs-link',
					url: '#mixins-utilities',
				}, ]
			},
			attrs: {
				id: 'mixins-utilities',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["You can also change the borders on the card header and footer as needed, and even remove their "]
			}, {
				block: 'code',
				content: 'background-color'
			}, {
				tag: '',
				content: [" with "]
			}, {
				block: 'code',
				content: '.bg-transparent'
			}, ]
		}, {
			block: 'example',
			content: ['success', ].map(function(modName) {
				var mod = {};
				mod[modName] = true;
				return {
					block: 'card',
					mix: [{
						"block": 'border-' + modName,
					}, {
						"block": 'mb-3',
					}, ],
					attrs: {
						style: 'width: 20rem;',
					},
					content: [{
						block: 'card-header',
						content: 'Header',
						mix: [{
							"block": 'bg-transparent',
						}, {
							"block": 'border-' + modName,
						}, ],
					}, {
						block: 'card-body',
						mix: [{
							"block": 'text-' + modName,
						}, ],
						content: [{
							block: 'card-title',
							content: modName + ' card title',
						}, {
							block: 'card-text',
							content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
						}, ],
					}, {
						block: 'card-footer',
						content: 'Footer',
						mix: [{
							"block": 'bg-transparent',
						}, {
							"block": 'border-' + modName,
						}, ],
					}, ],
				}
			})
		}, {
			tag: 'h2',
			content: {
				content: [{
					html: 'Card layout',
				}, {
					block: 'anchorjs-link',
					url: '#card-layout',
				}, ]
			},
			attrs: {
				id: 'card-layout',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, these layout options are not yet responsive."]
			}, ]
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Card groups',
				}, {
					block: 'anchorjs-link',
					url: '#card-groups',
				}, ]
			},
			attrs: {
				id: 'card-groups',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use "]
			}, {
				block: 'code',
				content: 'display: flex;'
			}, {
				tag: '',
				content: [" to achieve their uniform sizing."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card-group',
				"content": [{
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						}, {
							"block": "card-text",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}]
					}]
				}, {
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This card has supporting text below as a natural lead-in to additional content."
						}, {
							"block": "card-text",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}]
					}]
				}, {
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}, {
							"block": "card-text",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}]
					}]
				}, ]
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["When using card groups with footers, their content will automatically line up."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card-group',
				"content": [{
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						}, ]
					}, {
						"block": "card-footer",
						"content": [{
							"block": "text-muted",
							"content": "Last updated 3 mins ago"
						}]
					}, ]
				}, {
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This card has supporting text below as a natural lead-in to additional content."
						}, ]
					}, {
						"block": "card-footer",
						"content": [{
							"block": "text-muted",
							"content": "Last updated 3 mins ago"
						}]
					}, ]
				}, {
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}, ]
					}, {
						"block": "card-footer",
						"content": [{
							"block": "text-muted",
							"content": "Last updated 3 mins ago"
						}]
					}, ]
				}, ]
			}
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Card decks',
				}, {
					block: 'anchorjs-link',
					url: '#card-decks',
				}, ]
			},
			attrs: {
				id: 'card-decks',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Need a set of equal width and height cards that aren’t attached to one another? Use card decks."]
			}, ]
		}, {
			block: 'example',
			content: {
				block: 'card-deck',
				"content": [{
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						}, {
							"block": "card-text",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}]
					}]
				}, {
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This card has supporting text below as a natural lead-in to additional content."
						}, {
							"block": "card-text",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}]
					}]
				}, {
					"block": "card",
					"content": [{
						"block": "card-img-top",
						url: '...',
					}, {
						"block": "card-body",
						"content": [{
							"block": "card-title",
							"content": "Card title"
						}, {
							"block": "card-text",
							"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
						}, {
							"block": "card-text",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}]
					}]
				}, ]
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Just like with card groups, card footers in decks will automatically line up."]
			}, {
				block: 'example',
				content: {
					block: 'card-deck',
					"content": [{
						"block": "card",
						"content": [{
							"block": "card-img-top",
							url: '...',
						}, {
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title"
							}, {
								"block": "card-text",
								"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							}, ]
						}, {
							"block": "card-footer",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}, ]
					}, {
						"block": "card",
						"content": [{
							"block": "card-img-top",
							url: '...',
						}, {
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title"
							}, {
								"block": "card-text",
								"content": "This card has supporting text below as a natural lead-in to additional content."
							}, ]
						}, {
							"block": "card-footer",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}, ]
					}, {
						"block": "card",
						"content": [{
							"block": "card-img-top",
							url: '...',
						}, {
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title"
							}, {
								"block": "card-text",
								"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
							}, ]
						}, {
							"block": "card-footer",
							"content": [{
								"block": "text-muted",
								"content": "Last updated 3 mins ago"
							}]
						}, ]
					}, ]
				}
			}, ]
		}, {
			tag: 'h3',
			content: {
				content: [{
					html: 'Card columns',
				}, {
					block: 'anchorjs-link',
					url: '#card-columns',
				}, ]
			},
			attrs: {
				id: 'card-columns',
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Cards can be organized into Masonry-like columns with just CSS by wrapping them in "]
			}, {
				block: 'code',
				content: '.card-columns'
			}, {
				tag: '',
				content: [". Cards are built with CSS "]
			}, {
				block: 'code',
				content: 'column'
			}, {
				tag: '',
				content: [" properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right."]
			}, ]
		}, {
			tag: 'p',
			content: [{
				tag: 'strong',
				content: ["Heads up!"]
			}, {
				tag: '',
				content: [" Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to"]
			}, {
				block: 'code',
				content: 'display: inline-block'
			}, {
				tag: '',
				content: [" as  "]
			}, {
				block: 'code',
				content: 'column-break-inside: avoid'
			}, {
				tag: '',
				content: [" isn’t a bulletproof solution yet."]
			}, ]
		}, {
			block: 'example',
			content: {
				"content": [{
					"block": "card-columns",
					"content": [{
						"block": "card",
						"content": [{
							"block": "card-img-top",
							url: '...',
						}, {
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title that wraps to a new line"
							}, {
								"block": "card-text",
								"content": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							}]
						}]
					}, {
						"block": "card",
						"mix": {
							"block": "p-3"
						},
						"content": [{
							"block": "blockquote",
							"mix": [{
								"block": "mb-0"
							}, {
								"block": "card-body"
							}],
							"content": [{
								"tag": "p",
								"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
							}, {
								"block": "blockquote-footer",
								"content": [{
									"block": "text-muted",
									"content": [{
										"html": "Someone famous in "
									}, {
										"tag": "cite",
										"attrs": {
											"title": "Source Title"
										},
										"content": "Source Title"
									}]
								}]
							}]
						}]
					}, {
						"block": "card",
						"content": [{
							"block": "card-img-top",
							url: '...',
						}, {
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title"
							}, {
								"block": "card-text",
								"content": "This card has supporting text below as a natural lead-in to additional content."
							}, {
								"block": "card-text",
								"content": [{
									"block": "text-muted",
									"content": "Last updated 3 mins ago"
								}]
							}]
						}]
					}, {
						"block": "card",
						"mix": [{
							"block": "bg-primary"
						}, {
							"block": "text-white"
						}, {
							"block": "text-center"
						}, {
							"block": "p-3"
						}],
						"content": [{
							"block": "blockquote",
							"mix": [{
								"block": "mb-0"
							}],
							"content": [{
								"tag": "p",
								"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat."
							}, {
								"block": "blockquote-footer",
								"content": [{
									"block": "text-muted",
									"content": [{
										"html": "Someone famous in "
									}, {
										"tag": "cite",
										"attrs": {
											"title": "Source Title"
										},
										"content": "Source Title"
									}]
								}]
							}]
						}]
					}, {
						"block": "card",
						"mix": [{
							"block": "text-center"
						}],
						"content": [{
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title"
							}, {
								"block": "card-text",
								"content": "This card has supporting text below as a natural lead-in to additional content."
							}, {
								"block": "card-text",
								"content": [{
									"block": "text-muted",
									"content": "Last updated 3 mins ago"
								}]
							}]
						}]
					}, {
						"block": "card",
						"content": [{
							"block": "card-img-top",
							url: '...',
						}]
					}, {
						"block": "card",
						"mix": [{
							"block": "p-3"
						}, {
							"block": "text-right"
						}],
						"content": [{
							"block": "blockquote",
							"mix": [{
								"block": "mb-0"
							}],
							"content": [{
								"tag": "p",
								"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
							}, {
								"block": "blockquote-footer",
								"content": [{
									"block": "text-muted",
									"content": [{
										"html": "Someone famous in "
									}, {
										"tag": "cite",
										"attrs": {
											"title": "Source Title"
										},
										"content": "Source Title"
									}]
								}]
							}]
						}]
					}, {
						"block": "card",
						"content": [{
							"block": "card-body",
							"content": [{
								"block": "card-title",
								"content": "Card title"
							}, {
								"block": "card-text",
								"content": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
							}, {
								"block": "card-text",
								"content": [{
									"block": "text-muted",
									"content": "Last updated 3 mins ago"
								}]
							}]
						}]
					}, ]
				}]
			}
		}, {
			tag: 'p',
			content: [{
				tag: '',
				content: ["Card columns can also be extended and customized with some additional code. Shown below is an extension of the "]
			}, {
				block: 'code',
				content: '.card-columns'
			}, {
				tag: '',
				content: [" class using the same CSS we use—CSS columns— to generate a set of responsive tiers for changing the number of columns."]
			}, ]
		}, {
            //Не работает, тк в css отсутствуют эти стили
			block: 'example',
			content: [{
				block: 'nc',
				content: '.card-columns',
			}, {
				block: 'p',
				content: '{',
			}, {
				block: 'k',
				content: '@include',
			}, {
				block: 'nd',
				content: 'media-breakpoint-only',
			}, {
				block: 'p',
				content: '(',
			}, {
				block: 'n',
				content: 'lg',
			}, {
				block: 'p',
				content: ')',
			}, {
				block: 'p',
				content: '{',
			}, {
				block: 'nl',
				content: 'column-count',
			}, {
				block: 'p',
				content: ':',
			}, {
				block: 'm',
				content: '4',
			}, {
				block: 'p',
				content: ';',
			}, {
				block: 'p',
				content: '}',
			}, {
				block: 'k',
				content: '@include',
			}, {
				block: 'nd',
				content: 'media-breakpoint-only',
			}, {
				block: 'p',
				content: '(',
			}, {
				block: 'n',
				content: 'xl',
			}, {
				block: 'p',
				content: ')',
			}, {
				block: 'p',
				content: '{',
			}, {
				block: 'nl',
				content: 'column-count',
			}, {
				block: 'p',
				content: ':',
			}, {
				block: 'm',
				content: '5',
			}, {
				block: 'p',
				content: ';',
			}, {
				block: 'p',
				content: '}',
			}, {
				block: 'p',
				content: '}',
			}, ]
		}, ]
	}]
};
