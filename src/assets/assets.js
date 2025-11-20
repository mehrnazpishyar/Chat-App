import chat_bg from "./chat.svg"
import chatIcon from "./chat.png"
import menuIcon from "./menuIcon.png"
import searchIcon from "./searchIcon.png"
import profile_lena from "./profile_lena.jpg"
import profile_max from "./profile_max.jpg"
import profile_samanta from "./profile_samanta.jpg"
import profile_richard from "./profile_richard.jpg"
import profile_david from "./profile_david.jpg"
import avatarIcon from "./avatarIcon.png"
import arrowIcon from "./arrowIcon.png"
import helpIcon from "./helpIcon.png"
import img1 from './img1.jpg'
import img2 from './img2.jpg'


const assets = {
    chat_bg,
    chatIcon,
    menuIcon,
    searchIcon,
    profile_lena,
    profile_max,
    profile_samanta,
    profile_richard,
    profile_david,
    avatarIcon,
    arrowIcon,
    helpIcon,
    img1,
    img2

}

export default assets;

export const userData = [
    {
        "_id": "680f50aaf10f3cd28382ecf2",
        "email": "test1@gmail.com",
        "fullName": "Lena Martin",
        "profilePic": profile_lena,
        "bio": "Hi Everyone, I am Lena",
    },
    {
        "_id": "680f50e4f10f3cd28382ecf9",
        "email": "test2@gmail.com",
        "fullName": "Max Johnson",
        "profilePic": profile_max,
        "bio": "Hi Everyone, I am Max",
    },
    {
        "_id": "680f510af10f3cd28382ed01",
        "email": "test3@gmail.com",
        "fullName": "Samanta Rick",
        "profilePic": profile_samanta,
        "bio": "Hi Everyone, I am Samanta",
    },
    {
        "_id": "680f5137f10f3cd28382ed10",
        "email": "test4@gmail.com",
        "fullName": "Richard Borono",
        "profilePic": profile_richard,
        "bio": "Hi Everyone, I am Richard",
    },
    {
        "_id": "680f516cf10f3cd28382ed11",
        "email": "test5@gmail.com",
        "fullName": "David Smith",
        "profilePic": profile_david,
        "bio": "Hi Everyone, I am David",
    }
]



export const messagesData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-11-20T10:10:25.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-11-20T10:10:30.844Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-11-20T10:10:35.844Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-11-20T10:10:45.844Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "image": img1,
        "seen": true,
        "createdAt": "2025-11-20T10:10:50.844Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "image": img2,
        "seen": true,
        "createdAt": "2025-11-20T10:11:10.844Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-11-20T10:11:20.844Z",
    }
]