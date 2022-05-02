// write js code here corresponding to matches.html


var matches = JSON.parse(localStorage.getItem("schedule"));
var fav = JSON.parse(localStorage.getItem("favouriteMatches")) || [];

displayMatches(matches);

document.querySelector("#filterVenue")
document.addEventListener("change",filterVenue);

function filterVenue() {
    var selected = document.querySelector("#filterVenue").value;
    console.log(selected);

    var filteredList = matches.filter(function(el){
        return el.venue == selected;
    }) ;

    console.log(filteredList);
    displayMatches(filteredList);
    
}

function displayMatches(matches) {
    document.querySelector("tbody").innerHTML="";
         matches.forEach(function(el,i){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = el.matchNum;
    
            var td2 = document.createElement("td");
            td2.innerText = el.teamA;
    
            var td3 = document.createElement("td");
            td3.innerText = el.teamB;
    
            var td4 = document.createElement("td");
            td4.innerText = el.date;
    
            var td5 = document.createElement("td");
            td5.innerText = el.venue;
    
            var td6 = document.createElement("td");
            td6.innerText = "Favourite";
            td6.style.color="green";
            td6.style.cursor="pointer";
           
            td6.addEventListener("click",function(){
                addToFavourite(el);
                removeItem(el,i);
            });
    
            tr.append(td1,td2,td3,td4,td5,td6);
            document.querySelector("tbody").append(tr);
    
        })
}

function removeItem(el,index){
    matches.splice(index,1);
    localStorage.setItem("schedule",JSON.stringify(matches));
    window.location.reload();
}

function addToFavourite(el){
    fav.push(el);
    localStorage.setItem("favouriteMatches",JSON.stringify(fav));
}
