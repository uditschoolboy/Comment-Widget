const getComments = () => {
    return [
        {
            id: "1",
            userId: "1",
            userName: "Udit Chaudhary",
            text: "This is the first comment",
            parentId: null
        },
        {
            id: "2",
            userId: "2",
            userName: "Shambhavi Shukla",
            text: "This is the second Comment",
            parentId: null
        },
        {
            id: "3",
            userId: "1",
            userName: "Udit Chaudhary",
            text: "Hi Dear!",
            parentId: "2"
        }
    ];
}

export default getComments;