player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");
document.getElementById("p1name").innerHTML=player1name;
document.getElementById("p2name").innerHTML=player2name;
score1=0;
score2=0;
document.getElementById("p1score").innerHTML=score1;
document.getElementById("p2score").innerHTML=score2;
document.getElementById("question").innerHTML="question turn-"+player1name;
document.getElementById("answer").innerHTML="answer turn-"+player2name;
function send(){
    var word=document.getElementById("word").value; 
    finalword=word.toLowerCase();
    letter1=finalword.charAt(1);
    middlevalue=Math.floor(finalword.length/2);
    letter2=finalword.charAt(middlevalue);
    finalvalue=finalword.length-1;
    letter3=finalword.charAt(finalvalue);
    replace1=finalword.replace(letter1,"_");
    replace2=replace1.replace(letter2,"_");
    questionword=replace2.replace(letter3,"_");
    questions="<h4>question-"+questionword+"</h4>";
    answers="<input id='answer' type='text'><br>";
    buttonis="<button onclick='check()'>check</button>";
    row=questions+answers+buttonis;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
qturn="player1";
aturn="player2";
function check() {
    answers1=document.getElementById("answer").value;
    finnalanswer=answers1.toLowerCase();
    if (finalword==finnalanswer) {
        if (aturn=="player1") {
            score1=score1+1;
            document.getElementById("p1score").innerHTML=score1;
        } else {
            score2=score2+1;
            document.getElementById("p2score").innerHTML=score2;
            
        }
        
    }
    if (qturn=="player1") {
        qturn="player2";
        document.getElementById("question").innerHTML="question turn-"+player2name;
    } else {
        qturn="player1";
        document.getElementById("question").innerHTML="question turn-"+player1name;
    }
    if (aturn=="player1") {
        aturn="player2";
        document.getElementById("answer").innerHTML="answer turn-"+player2name;

    }
    else{
        aturn="player1";
        document.getElementById("answer").innerHTML="answer turn-"+player1name;
    }
    document.getElementById("output").innerHTML="";
}