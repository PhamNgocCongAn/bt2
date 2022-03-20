function myFunction1() {
    let a = document.getElementById("text_1").value;
    a = parseInt(a);
    let b = document.getElementById("text_2").value;
    b = parseInt(b);
    let c = document.getElementById("select");
    let value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    let k;
    switch(value) {
        case 1:{
            k = (a + (b * 2))/3;
            k = parseFloat(k);
            document.getElementById("result").value = k;
            break;
        }
        case 2:{
            k = ((a*2) + (b * 3))/5;
            k = parseFloat(k);
            document.getElementById("result").value = k;
        }
        case 3:{
            k = ((a*3) + (b * 4))/7;
            k = parseFloat(k);
            document.getElementById("result").value = k;
        }
    }
    if(k>=9){
        document.getElementById("display").innerHTML = "Học lực giỏi";
        document.getElementById("display").style.color = "green";
    }
    if(k>=7 && k<9){
        document.getElementById("display").innerHTML = "Học lực khá";
        document.getElementById("display").style.color = "blue";
    }
    if(k>=5 && k<7){
        document.getElementById("display").innerHTML = "Học lực trung bình";
        document.getElementById("display").style.color = "black";
    }
    if(k>=1 && k<5){
        document.getElementById("display").innerHTML = "Học lực yếu";
        document.getElementById("display").style.color = "red";
    }
}
function myFunction2(){
    document.getElementById('text_1').value = "";
    document.getElementById('text_2').value = "";
}