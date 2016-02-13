var number;                                                             //Variables for all functions
var temp;
var i = 0;
var words;
var wordinput;
var wordtemp;
var wordconvert = "";
var wordconvert2 = "";
var wordconverttemp = "";
var delimiter;
var index;
function numtowords(source) {
    number = document.getElementById("numbertowordsinput").value;                           //Puts the value into "number" variable
    if (number !== "") {                                                                    //Checks if it exceeds the limits
        if (number > 1000000) {
            number = document.getElementById("numbertowordsinput").value = 1000000;
            document.getElementById("numbertowordsoutput").value = "one million";
            return;
        }
        if (number < 0) {
            number = document.getElementById("numbertowordsinput").value = 0;
            document.getElementById("numbertowordsoutput").value = "zero";
            return;
        }
        i = 0;                                                                              //"i" variable will determine the index of the number being checked.
        words = "";                                                                         //"word" variable will be the output
        if (number % 100 < 20 && number % 100 >= 10) {                                      //Checks first for any number from ten to nineteen
            temp = number % 100;
            switch (temp) {
                case 10:
                    words = "ten ";
                    break;
                case 11:
                    words = "eleven ";
                    break;
                case 12:
                    words = "twelve ";
                    break
                case 13:
                    words = "thirteen ";
                    break;
                case 14:
                    words = "fourteen ";
                    break;
                case 15:
                    words = "fifteen ";
                    break;
                case 16:
                    words = "sixteen ";
                    break;
                case 17:
                    words = "seventeen ";
                    break;
                case 18:
                    words = "eighteen ";
                    break;
                case 19:
                    words = "nineteen ";
                    break;
            }
            number = Math.floor(number / 100);                                              //Jumps to the hundredth index
            i += 2;
        }
            while (number > 0) {                                                            //Continuously checks the digit through modulo 10
                temp = number % 10;
                switch (i) {                                                                //Case 0 and 3 for thousand and ones digits
                    case 0:case 3:
                        if(i == 3) words = "thousand " + words;
                        switch (temp) {
                            case 1:
                                words = "one " + words;
                                break;
                            case 2:
                                words = "two " + words;
                                break
                            case 3:
                                words = "three " + words;
                                break;
                            case 4:
                                words = "four " + words;
                                break;
                            case 5:
                                words = "five " + words;
                                break;
                            case 6:
                                words = "six " + words;
                                break;
                            case 7:
                                words = "seven " + words;
                                break;
                            case 8:
                                words = "eight " + words;
                                break;
                            case 9:
                                words = "nine " + words;
                                break;
                        }
                        break;
                    case 1: case 4:                                                         //Case 1 and 4 for tens
                        switch (temp) {
                            case 2:
                                words = "twenty " + words;
                                break
                            case 3:
                                words = "thirty " + words;
                                break;
                            case 4:
                                words = "forty " + words;
                                break;
                            case 5:
                                words = "fifty " + words;
                                break;
                            case 6:
                                words = "sixty " + words;
                                break;
                            case 7:
                                words = "seventy " + words;
                                break;
                            case 8:
                                words = "eighty " + words;
                                break;
                            case 9:
                                words = "ninety " + words;
                                break;
                        }
                        break;
                    case 2: case 5:                                                             //Case 2 and 5 for hundreds
                        switch (temp) {
                            case 1:
                                words = "one hundred " + words;
                                break;
                            case 2:
                                words = "two hundred " + words;
                                break;
                            case 3:
                                words = "three hundred " + words;
                                break;
                            case 4:
                                words = "four hundred " + words;
                                break;
                            case 5:
                                words = "five hundred " + words;
                                break;
                            case 6:
                                words = "six hundred " + words;
                                break;
                            case 7:
                                words = "seven hundred" + words;
                                break;
                            case 8:
                                words = "eight hundred " + words;
                                break;
                            case 9:
                                words = "nine hundred " + words;
                                break;
                        }
                        break;
                }
                number = Math.floor(number / 10);                                                   //Updates the number to be checked then increments index/"i"
                i++;
                
            }
            document.getElementById("numbertowordsoutput").value = words;                           //Once finished, the output will be printed
    }
}

function enterword(source) {                                                             //Works for converting words to num and words to currency
    if (source.id == "enterwordtonum") {
        wordinput = document.getElementById("wordstonum").value;
        wordconvert = wordconverttemp;
    } else if (source.id == "enterwordtocurr") {
        wordinput = document.getElementById("wordstonum2").value;
        wordconvert = wordconvert2;
    }

    if (wordinput == "zero" ||                                                                  //For inputting ones digit
        wordinput == "one" ||                                                               //Inputting is from left to right, so ones digit can't follow another ones digit
        wordinput == "two" ||                                                               //or anything from ten to nineteen
        wordinput == "three" ||
        wordinput == "four" ||
        wordinput == "five" ||
        wordinput == "six" ||
        wordinput == "seven" ||
        wordinput == "eight" ||
        wordinput == "nine") {
        if (wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "one" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "two" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "three" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "four" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "five" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "six" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "seven" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "eight" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "nine" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "ten" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "eleven" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "twelve" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "thirteen" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "fourteen" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "fifteen" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "sixteen" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "seventeen" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "eighteen" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] != "nineteen") {
            if (wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "tens") {                                      //For ten to nineteen, needs a "tens" first
                wordconvert = (wordconvert.split(" ")).splice(0, wordconvert.split(" ").length - 2).join(" ") + " ";
                switch (wordinput) {
                    case "zero":
                        wordconvert = wordconvert + "ten ";
                        break;
                    case "one":
                        wordconvert = wordconvert + "eleven ";
                        break;
                    case "two":
                        wordconvert = wordconvert + "twelve ";
                        break;
                    case "three":
                        wordconvert = wordconvert + "thirteen ";
                        break;
                    case "four":
                        wordconvert = wordconvert + "fourteen ";
                        break;
                    case "five":
                        wordconvert = wordconvert + "fifteen ";
                        break;
                    case "six":
                        wordconvert = wordconvert + "sixteen ";
                        break;
                    case "seven":
                        wordconvert = wordconvert + "seventeen ";
                        break;
                    case "eight":
                        wordconvert = wordconvert + "eighteen ";
                        break;
                    case "nine":
                        wordconvert = wordconvert + "nineteen ";
                        break;
                }
            } else if (wordinput != "zero") wordconvert = wordconvert + wordinput + " ";
        } else alert("Invalid!");
    }
    if (wordinput == "tens") {
        if ((wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "one" ||                       //For inputting tens digit such twenty, thirty, etc.
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "two" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "three" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "four" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "five" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "six" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "seven" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "eight" ||
            wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "nine") &&
            (wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "ten" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "twenty" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "thirty" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "fourty" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "fifty" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "sixty" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "seventy" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "eighty" &&
            wordconvert.split(" ")[wordconvert.split(" ").length - 3] != "ninety")) {
            wordtemp = wordconvert.split(" ")[wordconvert.split(" ").length - 2];
            wordconvert = (wordconvert.split(" ")).splice(0, wordconvert.split(" ").length - 2).join(" ") + " ";
            switch (wordtemp) {
                case "one":
                    wordconvert = wordconvert + "ten ";
                    break;
                case "two":
                    wordconvert = wordconvert + "twenty ";
                    break;
                case "three":
                    wordconvert = wordconvert + "thirty ";
                    break;
                case "four":
                    wordconvert = wordconvert + "forty ";
                    break;
                case "five":
                    wordconvert = wordconvert + "fifty ";
                    break;
                case "six":
                    wordconvert = wordconvert + "sixty ";
                    break;
                case "seven":
                    wordconvert = wordconvert + "seventy ";
                    break;
                case "eight":
                    wordconvert = wordconvert + "eighty ";
                    break;
                case "nine":
                    wordconvert = wordconvert + "ninety ";
                    break;
            }
        } else if (wordconvert == "") {
            wordconvert = "tens ";
        } else if (wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "hundred" ||                //Can also be followed by a hundred, thousand or million
                   wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "thousand" ||
                   wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "million") {
            wordconvert = wordconvert + wordinput + " ";
        } else alert("Invalid!");
    }

    if (wordinput == "hundred") {                                                //Hundreds, thousands, and millions can only follow ones digits                                                                        
        if ((wordinput == "hundred" && wordconvert.split(" ").indexOf("hundred") != -1 && wordconvert.split(" ").indexOf("thousand") == -1) ||
           (wordinput == "thousand" && wordconvert.split(" ").indexOf("thousand") != -1) || wordconvert.split(" ").indexOf("million") != -1) {
            alert("Invalid!");                                                      //Two "hundreds" or "thousands" can't exist at the same time
        } else if (wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "one" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "two" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "three" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "four" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "five" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "six" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "seven" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "eight" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "nine" ||
                wordconvert.split(" ")[wordconvert.split(" ").length - 2] == "hundred") {
            wordconvert = wordconvert + wordinput + " ";
        } else alert("Invalid!");                         
    }
    if (wordinput == "thousand" || wordinput == "million") {                  
        if (wordinput == "million") wordconvert = "one million";
        else if ((wordinput == "thousand" && wordconvert.split(" ").indexOf("thousand") != -1) || wordconvert.split(" ").indexOf("million") != -1) {
            alert("Invalid!");
        } else wordconvert = wordconvert + wordinput + " ";
    }
    if (source.id == "enterwordtonum") {                                          //Puts into the first gray field aftwerwards
        document.getElementById("wordstonumberinput").value = wordconvert;
        wordconverttemp = wordconvert;
    } else if (source.id == "enterwordtocurr") {
        document.getElementById("wordstocurrencyinput2").value = wordconvert;
        wordconvert2 = wordconvert;
    } 
}

function reset(source) {                                         //Works for converting words to num and words to currency
    if (source.id == "resetwordtonum") {
        wordconverttemp = "";
        document.getElementById("wordstonumberinput").value = "";  
        document.getElementById("wordstonumberoutput").value = "";
    } else if (source.id == "resetwordtocurr") {
        wordconvert2 = "";
        document.getElementById("wordstocurrencyinput2").value = "";  
        document.getElementById("wordstocurrencyoutput").value = "";
    }
}

function wordstonum(source) {                                   //Works for converting words to num and words to currency
    if (source.id == "wordtonumbutton") {
        wordconvert = wordconverttemp;
    } else if (source.id == "wordstocurrency") {
        wordconvert = wordconvert2;
    }
    wordtemp = wordconvert.split(" ");
    words = "";
    for (i = 0; i <= wordtemp.length - 2; i++) {
        switch (wordtemp[i]) {                                                      //Converts the ones digit
            case "one":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "001";
                else if (wordtemp[i - 1] == "hundred") words = words + "01";
                else words = words + "1";
                break;
            case "two":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "002";
                else if (wordtemp[i - 1] == "hundred") words = words + "02";
                else words = words + "2";
                break;
            case "three":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "003";
                else if (wordtemp[i - 1] == "hundred") words = words + "03";
                else words = words + "3";
                break;
            case "four":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "004";
                else if (wordtemp[i - 1] == "hundred") words = words + "04";
                else words = words + "4";
                break;
            case "five":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "005";
                else if (wordtemp[i - 1] == "hundred") words = words + "05";
                else words = words + "5";
                break;
            case "six":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "006";
                else if (wordtemp[i - 1] == "hundred") words = words + "06";
                else words = words + "6";
                break;
            case "seven":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "007";
                else if (wordtemp[i - 1] == "hundred") words = words + "07";
                else words = words + "7";
                break;
            case "eight":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "008";
                else if (wordtemp[i - 1] == "hundred") words = words + "08";
                else words = words + "8";
                break;
            case "nine":
                if (wordtemp[i - 1] == "thousand" && i == wordtemp.length - 2) words = words + "009";
                else if (wordtemp[i - 1] == "hundred") words = words + "09";
                else words = words + "9";
                break;
            case "ten":
                if (wordtemp[i - 1] == "thousand") words = words + "010";                  //Converts ten to nineteen
                else if (wordtemp[i + 1] == "thousand") words = words + "10";
                else words = words + "10";
                break;
            case "eleven":
                if (wordtemp[i - 1] == "thousand") words = words + "011";
                else words = words + "11";
                break;
            case "twelve":
                if (wordtemp[i - 1] == "thousand") words = words + "012";
                else words = words + "12";
                break;
            case "thirteen":
                if (wordtemp[i - 1] == "thousand") words = words + "013";
                else words = words + "13";
                break;
            case "fourteen":
                if (wordtemp[i - 1] == "thousand") words = words + "014";
                else words = words + "14";
                break;
            case "fifteen":
                if (wordtemp[i - 1] == "thousand") words = words + "015";
                else words = words + "15";
                break;
            case "sixteen":
                if (wordtemp[i - 1] == "thousand") words = words + "016";
                else words = words + "16";
                break;
            case "seventeen":
                if (wordtemp[i - 1] == "thousand") words = words + "017";
                else words = words + "17";
                break;
            case "eighteen":
                if (wordtemp[i - 1] == "thousand") words = words + "018";
                else words = words + "18";
                break;
            case "nineteen":
                if (wordtemp[i - 1] == "thousand") words = words + "019";
                else words = words + "19";
                break;
            case "twenty":
                if (wordtemp[i - 1] == "thousand") words = words + "02";                       //Converts the tens digit
                else if (wordtemp[i + 1] == "thousand") words = words + "20";
                else words = words + "2";
                break;
            case "thirty":
                if (wordtemp[i - 1] == "thousand") words = words + "03";
                else if (wordtemp[i + 1] == "thousand") words = words + "30";
                else words = words + "3";
                break;
            case "forty":
                if (wordtemp[i - 1] == "thousand") words = words + "04";
                else if (wordtemp[i + 1] == "thousand") words = words + "40";
                else words = words + "4";
                break;
            case "fifty":
                if (wordtemp[i - 1] == "thousand") words = words + "05";
                else if (wordtemp[i + 1] == "thousand") words = words + "50";
                else words = words + "5";
                break;
            case "sixty":
                if (wordtemp[i - 1] == "thousand") words = words + "06";
                else if (wordtemp[i + 1] == "thousand") words = words + "60";
                else words = words + "6";
                break;
            case "seventy":
                if (wordtemp[i - 1] == "thousand") words = words + "07";
                else if (wordtemp[i + 1] == "thousand") words = words + "70";
                else words = words + "7";
                break;
            case "eighty":
                if (wordtemp[i - 1] == "thousand") words = words + "08";
                else if (wordtemp[i + 1] == "thousand") words = words + "80";
                else words = words + "8";
                break;
            case "ninety":
                if (wordtemp[i - 1] == "thousand") words = words + "09";
                else if (wordtemp[i + 1] == "thousand") words = words + "90";
                else words = words + "9";
                break;
            case "thousand":                                                //Converts the thousands
                if (wordtemp[i - 1] == "hundred") {
                    words = words + "00";
                }
                break;
        }
    }
    if (wordtemp[wordtemp.length - 2] == "ten" ||                    //Checks if the number ends with a tens, hundreds, or thousands digit
        wordtemp[wordtemp.length - 2] == "twenty" ||
        wordtemp[wordtemp.length - 2] == "thirty" ||
        wordtemp[wordtemp.length - 2] == "forty" ||
        wordtemp[wordtemp.length - 2] == "fifty" ||
        wordtemp[wordtemp.length - 2] == "sixty" ||
        wordtemp[wordtemp.length - 2] == "seventy" ||
        wordtemp[wordtemp.length - 2] == "eighty" ||
        wordtemp[wordtemp.length - 2] == "ninety") {
        words = words + "0";
    } else if (wordtemp[wordtemp.length - 2] == "hundred") {
        words = words + "00";
    } else if (wordtemp[wordtemp.length - 2] == "thousand") {
        words = words + "000";
    } else if (wordtemp[wordtemp.length - 1] == "million") {
        words = words + "000000";
    }
    if (source.id == "wordtonumbutton") {                                          //Puts into the first gray field aftwerwards
        document.getElementById("wordstonumberoutput").value = words;
        wordconverttemp = wordconvert;
    } else if (source.id == "wordstocurrency") {
        switch (document.getElementById("wordstocurrencyinput1").value) {
            case "USD":
                words = "USD" + words;
                break;
            case "PHP":
                words = "PHP" + words;
                break;
            case "JPY":
                words = "JPY" + words;
                break;
        }
        document.getElementById("wordstocurrencyoutput").value = words;                  //Once finished, the output will be printed
        wordconvert2 = wordconvert;
    }
                           
}


function numdel(source) {
    number = document.getElementById("numdelimitedinput1").value;                            //Puts the value into "number" variable                     
    if (number > 1000000) {
        number = document.getElementById("numdelimitedinput1").value = 1000000;
    }
    if (number < 0) {
        number = document.getElementById("numdelimitedinput1").value = 0;
    }
    if (document.getElementById("numdelimitedinput1").value == "" || 
        document.getElementById("numdelimitedinput2").value == "" ||
        document.getElementById("numdelimitedinput3").value == "" ){
            alert("Missing Input!");
    }else{
        if (document.getElementById("numdelimitedinput2").value.length > 1) {
            alert("Only one character for delimiter");
        } else if (document.getElementById("numdelimitedinput3").value > document.getElementById("numdelimitedinput1").value.length || document.getElementById("numdelimitedinput3").value < 0) {
            alert("The number of jumps has exceeded");
        } else {
            temp = document.getElementById("numdelimitedinput1").value.length - document.getElementById("numdelimitedinput3").value;
            number = (document.getElementById("numdelimitedinput1").value + "").split("");
            number.splice(temp, 0, document.getElementById("numdelimitedinput2").value);
            document.getElementById("numdelimitedoutput").value = number.join("");
        }
    }
    
    

}