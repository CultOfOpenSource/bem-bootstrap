module.exports = {
    block: 'page',
    title: 'Cards · Bootstrap',
    favicon: 'https://getbootstrap.com/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'card.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'card.min.js' }],
    content: [
        {
            block: 'main',
            content: [
                { 
                    tag: 'h1',
                    block: 'bd_title',     
                    content: [ 'Cards' ],    
                    attrs: { id: 'content',}
                },
                { 
                    tag: 'p',  
                    content: [ "Bootstrap's cards provide a flexible and extensible content container with multiple variants and options."],    
                },
                
                {
                    tag: 'h2',
                    content: 'About'
                },
                {
                tag: 'p',
                content: [
                {
                    tag: '',
                    content: ["A "]  
                },
                {
                    tag: 'strong',
                    content: ["card "]   
                },
                {
                    tag: '',
                    content: ["is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."]  
                },
                ]
            },
                {
                    tag: 'p',
                    content: "If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
                },
                {
                    tag: 'h2',
                    content: 'Example'
                },
                {
                    tag: 'p',
                    content: "Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components."
                },
                {
                 tag: 'p',
                content: [
                {
                    tag: '',
                    content: "Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various "
                },
                {
                    tag: "a href='https://getbootstrap.com/docs/4.0/components/card/#sizing'",
                    content: "sizing options. "
                },
            ]
        },

        {
            block: 'example',
            content: [
                "<div class='card' style='width: 20rem;'>",
" <img class='card-img-top' src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16044cc32e8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16044cc32e8%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.015625%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' alt='Card image cap'>",
 " <div class='card-body'>",
 "<h4 class='card-title'>Card title</h4>",
    "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>",
    "<a href='#' class='btn btn-primary'>Go somewhere</a>",
    "</div>",
  "</div>",
            ]
        },
       /* {
            block: 'example',
            content: [
                "&ltdiv class='card' style='width: 20rem;'&gt",
" &ltimg class='card-img-top' src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16044cc32e8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16044cc32e8%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.015625%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' alt='Card image cap'&gt",
 " &ltdiv class='card-body'&gt",
 "&lth4 class='card-title'&gtCard title&lt/h4&gt",
    "&ltp class='card-text'&gtSome quick example text to build on the card title and make up the bulk of the cards content.&lt/p&gt",
    "&lta href='#' class='btn btn-primary'&gtGo somewhere&lt/a&gt",
    "&lt/div&gt",
  "&lt/div&gt",
            ]
        },*/
                {
                    tag: 'h2',
                    content: 'Content types'
                },
                {
                    tag: 'p',
                    content: "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported."
                },
                {
                    tag: 'h3',
                    content: 'Body'
                },
                {
                tag: 'p',
                content: [
                    {
                        tag: '',
                        content: ["The building block of a card is the "]  
                    },
                    {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-body'

                    },
                    {
                        tag: '',
                        content: [". Use it whenever you need a padded section within a card."]  
                    },
                    ],
                },
                {
                    block: 'example',
                    content: {
                        
                    }
                },
                                {
                    tag: 'h3',
                    content: 'Titles, text, and links'
                },
                {
                tag: 'p',
                content: [
                    {
                        tag: '',
                        content: ["Card titles are used by adding "]  
                    },
                    {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-title'
                    },
                    {
                        tag: '',
                        content: [" to a "]  
                    },
                    {
                        block: 'code',
                        mods: {highlighter: 'rouge'},
                        content: [ '&lt','h','*','&gt']
                    },
                    {
                        tag: '',
                        content: [" tag. In the same way, links are added and placed next to each other by adding "]  
                    },
                    {
                        block: 'code',
                        mods: {highlighter: 'rouge'},
                        content: '.card-link'
                    },
                    {
                        tag: '',
                        content: [" to an "]  
                    },
                    {
                        block: 'code',
                        mods: {highlighter: 'rouge'},
                        content: [ '&lt','a','&gt']
                    },
                    {
                        tag: '',
                        content: [" tag."]  
                    },
                    ],
                },
                {
                    tag: 'p',
                    content: [
                        {
                            tag: '',
                            content: ["Subtitles are used by adding a "]  
                        },
                        {
                                block: 'code',
                                mods: {highlighter: 'rouge'},
                                content: '.card-subtitle'
                        },
                        {
                            tag: '',
                            content: [" to a "]  
                        },
                        {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: [ '&lt','h','*','&gt']
                        },
                        {
                            tag: '',
                            content: ["  tag. If the "]  
                        },
                        {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-title'
                        },
                        {
                            tag: '',
                            content: [" and the "]  
                        },
                        {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-subtitle'
                        },
                        {
                            tag: '',
                            content: [" items are placed in a "]  
                        },
                        {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-body'
                        },
                        {
                            tag: '',
                            content: [" item, the card title and subtitle are aligned nicely. "]  
                        },
                        ],
                    },
                    {
                        block: 'example',
                        content: {
                            
                        }
                    },
                    {
                        tag: 'h3',
                        content: 'Images'
                    },
                    {
                    tag: 'p',
                    content: [
                        {
                                block: 'code',
                                mods: {highlighter: 'rouge'},
                                content: '.card-img-top'
                        },
                        {
                            tag: '',
                            content: [" places an image to the top of the card. With "]  
                        },
                        {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-text'
                        },
                        {
                            tag: '',
                            content: ["text can be added to the card. Text within "]  
                        },
                        {
                            block: 'code',
                            mods: {highlighter: 'rouge'},
                            content: '.card-text'
                        },
                        {
                            tag: '',
                            content: [" can also be styled with the standard HTML tags."]  
                        },
                        ],
                    },
                    {
                        block: 'example',
                        content: {
                            
                        }
                    },
                    {
                        tag: 'h3',
                        content: 'List groups'
                    },
                    {
                    tag: 'p',
                    content: [
                    {
                        tag: '',
                        content: ["Create lists of content in a card with a flush list group."]  
                    },
                    ]
                },
                {
                    block: 'example',
                    content: {
                        
                    }
                },
                {
                    block: 'example',
                    content: {
                        
                    }
                },
                {
                    block: 'card',
                    tag: 'h3',
                    content: 'Kitchen sink'
                },
                {
                tag: 'p',
                content: [
                {
                    tag: '',
                    content: ["Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card."]  
                },
                ]
            },
            {
                block: 'example',
                content: {
                    
                }
            },
            {
                tag: 'h3',
                content: 'Header and footer'
            },
            {
            tag: 'p',
            content: [
            {
                tag: '',
                content: ["Add an optional header and/or footer within a card."]  
            },
            ]
        },
        {
            block: 'example',
            content: {
                
            }
        },
        {
            tag: 'p',
            content: [
                {
                    tag: '',
                    content: ["Card headers can be styled by adding "]  
                },
                {
                        block: 'code',
                        mods: {highlighter: 'rouge'},
                        content: '.card-header'
                },
                {
                    tag: '',
                    content: [" to "]  
                },
                {
                    block: 'code',
                    mods: {highlighter: 'rouge'},
                    content: 
                    [ '&lt','h','*','&gt']
                },
                {
                    tag: '',
                    content: [" elements."]  
                },
                ],
            },
            {
                block: 'example',
                content: {
                    
                }
            },
            {
                block: 'example',
                content: {
                    
                }
            },
            {
                block: 'example',
                content: {
                    
                }
            },
            {
                tag: 'h2',
                content: 'Sizing'
            },
            {
            tag: 'p',
            content: [
            {
                tag: '',
                content: ["Cards assume no specific "]  
            },
            {
                block: 'code',
                mods: {highlighter: 'rouge'},
                content: 'width'
            },
            {
                tag: '',
                content: [" to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities."]  
            },
            ]
        },
        {
            tag: 'h3',
            content: 'Using grid markup'
        },
        {
        tag: 'p',
        content: [
        {
            tag: '',
            content: ["Using the grid, wrap cards in columns and rows as needed."]  
        },
        ]
    },
    {
        block: 'example',
        content: {
            
        }
    },
    {
        tag: 'h3',
        content: 'Using utilities'
    },
    {
    tag: 'p',
    content: [
    {
        tag: '',
        content: ["Use our handful of "]  
    },
    {
        tag: "a href='https://getbootstrap.com/docs/4.0/utilities/sizing/'",
        content: "available sizing utilities"
    },
    {
        tag: '',
        content: [" to quickly set a card’s width."]  
    },
    ]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h3',
    content: 'Using custom CSS'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Use custom CSS in your stylesheets or as inline styles to set a width."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h3',
    content: 'Text alignment'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["You can quickly change the text alignment of any card—in its entirety or specific parts—with our "]  
},
{
    tag: "a href='https://getbootstrap.com/docs/4.0/utilities/text/#text-alignment'",
    content: "text align classes."
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h3',
    content: 'Navigation'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Add some navigation to a card’s header (or block) with Bootstrap’s "]  
},
{
    tag: "a href='https://getbootstrap.com/docs/4.0/components/navs/'",
    content: "nav components."
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h2',
    content: 'Images'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card."]  
},
]
},
{
    tag: 'h3',
    content: 'Image caps'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h3',
    content: 'Image overlays'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h2',
    content: 'Card styles'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Cards include various options for customizing their backgrounds, borders, and color."]  
},
]
},
{
    tag: 'h3',
    content: 'Background and color'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Use "]  
},
{
    tag: "a href='https://getbootstrap.com/docs/4.0/utilities/colors/'",
    content: "text and background utilities"
},
{
    tag: '',
    content: [" to change the appearance of a card."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h3',
    content: 'Border'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Use "]  
},
{
    tag: "a href='https://getbootstrap.com/docs/4.0/utilities/borders/'",
    content: "border utilities"
},
{
    tag: '',
    content: [" to change just the "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: 'border-color'
},
{
    tag: '',
    content: [" of a card. Note that you can put "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: '.text-{color}'
},
{
    tag: '',
    content: [" classes on the parent "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: '.card'
},
{
    tag: '',
    content: [" or a subset of the card’s contents as shown below."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h3',
    content: 'Mixins utilities'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["You can also change the borders on the card header and footer as needed, and even remove their "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: 'background-color'
},
{
    tag: '',
    content: [" with "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: '.bg-transparent'
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'h2',
    content: 'Card layout'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, these layout options are not yet responsive."]  
},
]
},
{
    tag: 'h3',
    content: 'Card groups'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: 'display: flex;'
},
{
    tag: '',
    content: [" to achieve their uniform sizing."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'p',
    content: [
    {
        tag: '',
        content: ["When using card groups with footers, their content will automatically line up."]  
    },
    ]
    },
    {
        block: 'example',
        content: {
            
        }
    },
{
    tag: 'h3',
    content: 'Card decks'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Need a set of equal width and height cards that aren’t attached to one another? Use card decks."]  
},
]
},
{
    block: 'example',
    content: {
        
    }
},
{
    tag: 'p',
    content: [
    {
        tag: '',
        content: ["Just like with card groups, card footers in decks will automatically line up."]  
    },
    {
        block: 'example',
        content: {
            
        }
    },
    ]
    },
{
    tag: 'h3',
    content: 'Card columns'
},
{
tag: 'p',
content: [
{
    tag: '',
    content: ["Cards can be organized into Masonry-like columns with just CSS by wrapping them in "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: '.card-columns'
},
{
    tag: '',
    content: [". Cards are built with CSS "]  
},
{
    block: 'code',
    mods: {highlighter: 'rouge'},
    content: 'column'
},
{
    tag: '',
    content: [" properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right."]  
},
]
},
{
    tag: 'p',
    content: [
        {
            tag: 'strong',
            content: ["Heads up!"]   
        },
    {
        tag: '',
        content: [" Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to"]  
    },
    {
        block: 'code',
        mods: {highlighter: 'rouge'},
        content: 'display: inline-block'
    },
    {
        tag: '',
        content: [" as  "]  
    },
    {
        block: 'code',
        mods: {highlighter: 'rouge'},
        content: 'column-break-inside: avoid'
    },
    {
        tag: '',
        content: [" isn’t a bulletproof solution yet."]  
    },
    ]
    },
    {
        block: 'example',
        content: {
            
        }
    },
    {
        tag: 'p',
        content: [
        {
            tag: '',
            content: ["Card columns can also be extended and customized with some additional code. Shown below is an extension of the "]  
        },
        {
            block: 'code',
            mods: {highlighter: 'rouge'},
            content: '.card-columns'
        },
        {
            tag: '',
            content: [" class using the same CSS we use—CSS columns— to generate a set of responsive tiers for changing the number of columns."]  
        },
        ]
        },
        {
            block: 'example',
            content: {
                
            }
        },
            ]
        }
    ]
};
