let wordOne=`The`;
let wordTwo=` nurse`;
let wordThree=` in`;
let wordFour=` the`;
let wordFive=` white`;
let wordSix=` hat`;
let wordSeven=` didn't`;
let wordEight=` see`;
let wordNine=` me`;
let wordTen=` sitting`;
let wordEleven=` in`;
let wordTwelve=` the`;
let wordThirteen=` hallway;`;
let wordFourteen=` I`;
let wordFifteen=` even`;
let wordSixteen=` said,`;
let wordSeventeen=` "Hey,`;
let wordEighteen=` look`;
let wordNineteen=` out,`;
let wordTwenty=` lady!"`;

document.writeln(
    `<br><h4>A story, told by twenty variables:</h4>` + 
    wordOne + wordTwo + wordThree + wordFour + wordFive + wordSix + wordSeven + wordEight + wordNine + wordTen + wordEleven + wordTwelve + wordThirteen + wordFourteen + wordFifteen + wordSixteen + wordSeventeen + wordEighteen + wordNineteen + wordTwenty
);

document.writeln(`<br><br><h4>Counting up by 2's:</h4>`);
for(var i=1;i<=100;i=i+2){
    document.writeln(i);
    if(i%3==0){
        document.writeln(`: This number is divisible by 3!`);
        if(i==3){
            document.writeln(` And is a prime number !`);
        }
        document.writeln(`<br>`);
    }else{
        var prime=true;
        for(var j=2;j<i;j++){
            if (i%j == 0) {
                prime=false;
                document.writeln(`<br>`);
                break;
            }
        }
        if(prime==true){
            document.writeln(`: This number is a prime number!<br>`);
        }
    }
}