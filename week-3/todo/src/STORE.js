import { v4 as uuidv4 } from "uuid";


 const todos= [
    {   id: uuidv4(),
        text: "stream",
        isCompleted: false
    },
    {   id: uuidv4(),
        text: "do laundry",
        isCompleted: true
    },
    {   id: uuidv4(),
        text: "food shopping",
        isCompleted: true
    },
    {   id: uuidv4(),
        text: "do homework",
        isCompleted: false
    }
];

export default todos