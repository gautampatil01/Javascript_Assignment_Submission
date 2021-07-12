let cards=[
    {
        image : "https://www.teahub.io/photos/full/174-1747235_anime-minimal-dragon-ball-super-goku-wallpaper-goku.jpg",
        value : 1,
        status : "closed"
    },
    { 
        image : "https://www.teahub.io/photos/full/174-1747235_anime-minimal-dragon-ball-super-goku-wallpaper-goku.jpg",
        value : 1,
        status : "closed"
    },
    {
        image : "https://i1.sndcdn.com/artworks-000118701077-tvmk00-t500x500.jpg",
        value : 2,
        status : "closed"
    },
    {
       image : "https://i1.sndcdn.com/artworks-000118701077-tvmk00-t500x500.jpg",
       value : 2,
       status : "closed"
    },     
    {
        image : "https://i.pinimg.com/564x/fd/bd/c2/fdbdc25e7e1576f0b9f5240699764e78.jpg",
        value:3,
        status : "closed"
    },
    {    
        image :"https://i.pinimg.com/564x/fd/bd/c2/fdbdc25e7e1576f0b9f5240699764e78.jpg",
        value : 3,
        status : "closed"
    },
    {    
        image : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcyxrxk-adb8c604-e2e5-4909-9e62-eef458872deb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGN5eHJ4ay1hZGI4YzYwNC1lMmU1LTQ5MDktOWU2Mi1lZWY0NTg4NzJkZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dBtSky5h56E1aF9Kr7hqjKI723Jrl4RBs29DqLIUMXM",
        value : 4,
        status : "closed"
    },
    {    
        image : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcyxrxk-adb8c604-e2e5-4909-9e62-eef458872deb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGN5eHJ4ay1hZGI4YzYwNC1lMmU1LTQ5MDktOWU2Mi1lZWY0NTg4NzJkZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dBtSky5h56E1aF9Kr7hqjKI723Jrl4RBs29DqLIUMXM",
        value : 4,
        status : "closed"
    },    
    {  
        image : "https://upload.wikimedia.org/wikipedia/en/5/51/Chi-Chi_Kakarot.jpg",
        value : 5,
        status : "closed"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/5/51/Chi-Chi_Kakarot.jpg",
        value : 5,
        status : "closed"    
    }

]

let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}
let cardsCopy=cards;


function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
              <div class="overlay ${card.status}" onclick="openCard(${index})">
              </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);  


let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
 cards[index].status="opened";
 if(cardCount===1){
     val1=cards[index].value;
     cardCount++; 
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            // reset after one guess 
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{

            alert("Game Over");
            location.reload();

        }
    }
displayCards(cards);
} 