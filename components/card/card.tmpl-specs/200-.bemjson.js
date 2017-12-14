([
{
            "block": "card-columns",
            "content": [{
                "block": "card",
                "content": [{
                    elem: 'img',
                    elemMods: {top: true},
                    attrs: {
                        alt: "foo",
                        src: '...',
                    },
                }, {
                    "elem": "body",
                    "content": [{
                        "elem": "title",
                        "content": "Card title that wraps to a new line"
                    }, {
                        "elem": "text",
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
                    elem: 'img',
                    elemMods: {top: true},
                    attrs: {
                        alt: "foo",
                        src: '...',
                    },
                }, {
                    "elem": "body",
                    "content": [{
                        "elem": "title",
                        "content": "Card title"
                    }, {
                        "elem": "text",
                        "content": "This card has supporting text below as a natural lead-in to additional content."
                    }, {
                        "elem": "text",
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
                    elem: 'img',
                    elemMods: {top: true},
                    attrs: {
                        alt: "foo",
                        src: '...',
                    },
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
                    "elem": "body",
                    "content": [{
                        "elem": "title",
                        "content": "Card title"
                    }, {
                        "elem": "text",
                        "content": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
                    }, {
                        "elem": "text",
                        "content": [{
                            "block": "text-muted",
                            "content": "Last updated 3 mins ago"
                        }]
                    }]
                }]
            }, ]
        }
]);
