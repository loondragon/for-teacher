function add() {
    name1=document.getElementById("name1").value;
    name2=document.getElementById("name2").value;
    localStorage.setItem("player1",name1);
    localStorage.setItem("player2",name2);
    window.location="game.html";
}