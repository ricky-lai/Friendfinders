// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendsArray = [
    {
        name: "Scarlett Johanen",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scarlett_Johansson_by_Gage_Skidmore_2019.jpg/876px-Scarlett_Johansson_by_Gage_Skidmore_2019.jpg",
        scores: [
            "3",
            "4",
            "5",
            "2",
            "3",
            "5",
            "4",
            "5",
            "3",
            "2"
        ]
    },
    {
        name: "The Rock",
        photo: "https://media4.s-nbcnews.com/j/newscms/2018_48/1391231/dwayne-johnson-the-rock-today-main-181130_aded88c04fbad9773fb0d07f4286014a.fit-2000w.jpg",
        scores: [
            "3",
            "4",
            "5",
            "3",
            "2",
            "2",
            "4",
            "2",
            "5",
            "3"
        ]
    },
    {
        name: "Batman",
        photo: "https://media.entertainmentearth.com/assets/images/c4a6b14aebc54400982f14b388547f82lg.jpg",
        scores: [
            "5",
            "3",
            "2",
            "2",
            "4",
            "4",
            "5",
            "2",
            "5",
            "2"
        ]
    },
    {
        name: "Wonder Woman",
        photo: "https://media.vanityfair.com/photos/5c4ddf0fba532c6650dedf67/1:1/w_1332,h_1332,c_limit/wonder-woman-3-modern.jpg",
        scores: [
            "5",
            "3",
            "1",
            "1",
            "5",
            "5",
            "1",
            "2",
            "4",
            "2"
        ]
    }
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;