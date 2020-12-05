
let book_data = [];

let book_names = [
  "Doctor At The Graveyard",
  "Creature In The Lake",
  "Desmond",
  "Zombie Without A Mouth",
  "Girls In The Lake",
  "Neighbors In The Mirror",
  "Monks In The Antique Shop",
  "Monks During Halloween",
  "Trees And Friends",
  "Spiders And Wives",
  "Wolves And Witches",
  "Dogs And Wolves",
  "Don't Look Behind The Door",
  "Emblems In My School",
  "Drawings At The Lake",
  "Trapped In The Attic",
  "Careful Of The Town",
  "Aware Of The Sea",
  "Sweating In My Demise"
];


let author_names =
[
  "May",
  "Desmond",
  "Frances",
  "Viviana",
  "Caridad",
  "Ellis",
  "Lon",
  "German",
  "Charmain",
  "Aldo",
  "Su",
  "Katelin",
  "Lesley",
  "Randi",
  "Valrie",
  "Byron",
  "Cecelia",
  "Kristen",
  "Rosalyn",
  "Grover"
];


for(let i = 0; i < author_names.length; i++)
{
  let rand = Math.floor((Math.random() * 10) + 1);
  var string = "";
  var val_1 = string.concat(rand);
  var val = val_1.concat("/10");
  book_data.push({Title: book_names[i], Author: author_names[i], Rating: val});
}

export default book_data;
