function add_user(){

player1_name=document.getElementById("player1_name_input").value;
player2_name=document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name",player1_name);
localStorage.setItem("player2_name",player2_name);

window.location="game_page.html";

}

function send(){

    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Word in lower case"+word);

    chartAt1=word.chartAt(1);
    console.log(chartAt1);
    
    length_divide_2=Math.floor(word.length/2);
    chartAt2=word.chartAt(length_divide_2);

    console.log(chartAt2);

    length_minus_1=word.length-1;
    chartAt3=word.chartAt(length_minus_1);

    console.log(chartAt3);

}