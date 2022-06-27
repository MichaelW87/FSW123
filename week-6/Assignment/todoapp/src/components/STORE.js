import {v4 as uuidV4} from "uuid";

export const toDoArray = [
    {
        id: uuidV4(),
        text: "start stream",
        isCompleted : false,

    },
    {
        id: uuidV4(),
        text: "check loan status",
        isCompleted: false,
    },
    {
        id: uuidV4(),
        text: "food shopping",
        isCompleted: false,
    },
    {
        id: uuidV4(),
        text: "do homework",
        isCompleted: false,
    }
];