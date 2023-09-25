const userSeeds= [
    {
        username: 'lernantino',
        email: 'lernantino@gmail.com',
        thoughts: [
            {
                thoughtText: "The Mad Hatter in Alice in Wonderland represents the whimsical chaos of the subconscious mind, challenging societal norms and inviting us to embrace our own eccentricities.",
                createdAt: new Date(),
                reactions: [
                    {
                        reactionId: 1,
                        reactionBody: 'Cool!',
                        username: 'lernantino',
                        createdAt: new Date()
                    },
                    {
                        reactionId: 2,
                        reactionBody: 'Great!',
                        username: 'lernantino',
                        createdAt: new Date()
                    }
                ]
            },
            {
                thoughtText: "Trinity in The Matrix is a symbol of empowered femininity in a dystopian world. Her strength, agility, and unwavering love for Neo demonstrate the importance of resilience and love in the face of artificial reality.",
                createdAt: new Date(),
                reactions: [
                    {
                        reactionId: 1,
                        reactionBody: 'Cool!',
                        username: 'lernantino',
                        createdAt: new Date()
                    },
                    {
                        reactionId: 2,
                        reactionBody: 'Great!',
                        username: 'lernantino',
                        createdAt: new Date()
                    }
                ]
            }
        ],
        friends: ['katie', 'john', 'mike'],
    },
    {
        username: 'katie',
        email: 'katie@gmail.com',
        thoughts: [
            {
                thoughtText: "Miro's influence on the art world is profound. His surreal, abstract works challenge conventional boundaries, inspiring creativity and pushing artistic expression. Miro reminds us that art should be an exploration of the imagination, transcending norms and sparking innovation.",
                createdAt: new Date(),
                reactions: [
                    {
                        reactionId: 1,
                        reactionBody: 'Cool!',
                        username: 'katie',
                        createdAt: new Date()
                    },
                    {
                        reactionId: 2,
                        reactionBody: 'Great!',
                        username: 'katie',
                        createdAt: new Date()
                    }
                ]
            },
            {
                thoughtText: "Eiichiro Oda is a manga legend, the genius behind 'One Piece.' His boundless creativity, intricate world-building, and diverse characters have captivated millions, proving that storytelling knows no limits. Oda's dedication to his craft sets an inspiring example for aspiring manga artists worldwide.",
                createdAt: new Date(),
                reactions: [
                    {
                        reactionId: 1,
                        reactionBody: 'Cool!',
                        username: 'katie',
                        createdAt: new Date()
                    },
                    {
                        reactionId: 2,
                        reactionBody: 'Great!',
                        username: 'katie',
                        createdAt: new Date()
                    }
                ]
            }
        ],      friends: ['lernantino', 'john', 'mike'],
    },
    {
        username: 'john',
        email: 'john@gmail.com',
        thoughts: [
            {
                thoughtText: "Recursive logic is the backbone of problem-solving in computer science and mathematics. Its elegant, self-replicating nature simplifies complex tasks into manageable steps. Like a fractal, it reminds us that understanding the small parts can unravel the bigger picture",
                createdAt: new Date(),
                reactions: [
                    {
                        reactionId: 1,
                        reactionBody: 'Cool!',
                        username: 'john',
                        createdAt: new Date()
                    },
                    {
                        reactionId: 2,
                        reactionBody: 'Great!',
                        username: 'john',
                        createdAt: new Date()
                    }
                ]
            },
            {
                thoughtText: "MERN (MongoDB, Express, React, Node) is a powerhouse in web development. Its seamless integration, flexibility, and open-source community drive innovation. MERN empowers developers to build scalable, modern web apps that adapt to changing demands, shaping the future of digital experiences.",
                createdAt: new Date(),
                reactions: [
                    {
                        reactionId: 1,
                        reactionBody: 'Cool!',
                        username: 'john',
                        createdAt: new Date()
                    },
                    {
                        reactionId: 2,
                        reactionBody: 'Great!',
                        username: 'john',
                        createdAt: new Date()
                    }
                ]
            }
        ],      friends: ['katie', 'lernantino', 'mike'],
    }
];

module.exports = userSeeds;