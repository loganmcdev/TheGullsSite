const button = document.getElementById("testButton");
button.addEventListener("click", function() {

var score = 0;
var questions = [
    {
        prompt: "Q-Do seagulls mate by season or by life?\n(a)life\n(b)season",
        answer: "a"
    },
    {
        prompt:"Do male or female seagulls have a larger bill?\n(a)Male\n(b)female",
        answer: "a"
    },
    {
        prompt:"Do female seagulls have larger or smaller bodies than males?\n(a)larger\n(b)smaller\n",
        answer: "b"
    },
    {
        prompt:"What color are juvenile seagulls?\n(a)all white\n(b)black and white\n(c)brown and grey",
        answer: "c"
    },
    {
        prompt:"Are seagulls most active during the day or at night?\n(a)Nighttime\n(b)Daytime\n",
        answer: "b"
    },
    {
        prompt:"how long is a seagulls common lifespan?\n(a)5-10 years\n(b)10-20 years\n(c)30-40 years",
        answer: "b"
    },
    {
        prompt:"Can seagulls swim?\n(a)yes\n(b)no\n",
        answer: "a"
    },
    {
        prompt:"do male or female gulls have flatter crowns on their heads?\n(a)male\n(b)female\n",
        answer: "a"
    },
    {
        prompt:"Are seagulls intelligent?\n(a)no\n(b)yes\n",
        answer: "b"
    },
    {
        prompt:"Can seagulls drink saltwater?\n(a)no\n(b)yes\n",
        answer: "b"
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