const button = document.getElementById("testButton");
button.addEventListener("click", function() {

var score = 0;
var questions = [
    {
        prompt: "Q-Do seagulls mate by season or by life?\n(A)life\n(B)season",
        answer: "A"
    },
    {
        prompt:"Do male or female seagulls have a larger bill?\n(A)Male\n(B)female",
        answer: "A"
    },
    {
        prompt:"Do female seagulls have larger or smaller bodies than males?\n(A)larger\n(B)smaller\n",
        answer: "B"
    },
    {
        prompt:"What color are juvenile seagulls?\n(A)all white\n(B)black and white\n(C)brown and grey",
        answer: "C"
    },
    {
        prompt:"Are seagulls most active during the day or at night?\n(A)Nighttime\n(B)Daytime\n",
        answer: "B"
    },
    {
        prompt:"how long is a seagulls common lifespan?\n(A)5-10 years\n(B)10-20 years\n(C)30-40 years",
        answer: "B"
    },
    {
        prompt:"Can seagulls swim?\n(A)yes\n(B)no\n",
        answer: "A"
    },
    {
        prompt:"do male or female gulls have flatter crowns on their heads?\n(A)male\n(B)female\n",
        answer: "A"
    },
    {
        prompt:"Are seagulls intelligent?\n(A)no\n(B)yes\n",
        answer: "B"
    },
    {
        prompt:"Can seagulls drink saltwater?\n(A)no\n(B)yes\n",
        answer: "B"
    },

]
for(var i=0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct");
    } else {
        alert("wrong");
    }
    alert("you got" + score + "/" + questions.length);
}
})
