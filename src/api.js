const getComments = async() => {
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
        },
        {
            id: "4",
            userId: "2",
            userName: "Shambhavi Shukla",
            text: "Hi my love",
            parentId: "3"
        },
        {
            id: "5",
            userId: "2",
            userName: "Shambhavi Shukla",
            text: "Wow! Marry Me",
            parentId: "1"
        },
        {
            id: "6",
            userId: "1",
            userName: "Udit Chaudhary",
            text: "Sure my baby",
            parentId: "5"
        }
    ];
}

export default getComments;