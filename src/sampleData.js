const boards = 
[
    {
        id: 1000,
        title: 'Course ideas',
        background: '#fffad33',
    },
    {
        id: 2000,
        title: 'House ideas',
        background: '#7FFFD4',
    },
    {
        id: 3000, 
        title: 'Garden ideas',
        background: '#7FFF00',
    }
]

const lists =
[
    {
        id: 100,
        title: 'House ideas',
        board: 1000,
        cards:[
            {
                id: 1,
                text: 'card 1',
            },
            {
                id: 2,
                text: 'card 2',
            },
        ],
    },
    {
        id: 200,
        title: 'Garden ideas',
        board: 1000,
        cards:[
            {
                id: 1,
                text: 'card 1',
            },
            {
                id: 2,
                text: 'card 2',
            },
        ],
    },
    {
        id: 300,
        title: 'Game ideas',
        board: 1000,
        cards:[
            {
                id: 1,
                text: 'card 1',
            },
            {
                id: 2,
                text: 'card 2',
            },
        ],
    }
]

const data = 
{
    boards,
    lists,
}

export default data

