let ans_box,random_r,random_g,random_b,value=6;
let hardbool=true;
let color1=document.getElementById('c1');
let color2=document.getElementById('c2');
let color3=document.getElementById('c3');
let color4=document.getElementById('c4');
let color5=document.getElementById('c5');
let color6=document.getElementById('c6');
function easy() {
    color1.disabled=false;
    color2.disabled=false;
    color3.disabled=false;
    color4.disabled=false;
    color5.disabled=false;
    color6.disabled=false;
    color4.style.visibility = "hidden";
    color5.style.visibility = "hidden";
    color6.style.visibility = "hidden";
    ans_box = Math.floor(Math.random()*3 + 1);
    hardbool=false;
    document.getElementById('yellow').style.background = "rgb(231, 198, 9)";
    document.getElementById('tryagain').style.visibility = "hidden";
    random_r = Math.floor(Math.random()*256);
    random_g = Math.floor(Math.random()*256);
    random_b = Math.floor(Math.random()*256);
    document.getElementById('r').innerHTML=random_r;
    document.getElementById('g').innerHTML=random_g;
    document.getElementById('b').innerHTML=random_b;
    if (ans_box==1) {
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.background = "rgb("+random_g/6+","+random_r+","+random_b/3+")";
        color3.style.background = "rgb("+random_r/2+","+random_b+","+random_g/2+")";
        color4.style.background = "rgb("+random_g+","+random_b+","+random_r/8+")";
        color5.style.background = "rgb("+random_b/6+","+random_r/2+","+random_g/3+")";
        color6.style.background = "rgb("+random_r/4+","+random_b/7+","+random_g/2+")";
    }
    else if (ans_box==2) {
        color1.style.background = "rgb("+random_r/5+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r/3+","+random_g+","+random_b/4+")";
        color4.style.background = "rgb("+random_b/8+","+random_r+","+random_g/7+")";
        color5.style.background = "rgb("+random_g/2+","+random_r/2+","+random_b/3+")";
        color6.style.background = "rgb("+random_g+","+random_b+","+random_r/2+")";
    }
    else if (ans_box==3) {
        color1.style.background = "rgb("+random_b+","+random_r/2+","+random_g+")";
        color2.style.background = "rgb("+random_r/8+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_b/4+","+random_g/3+","+random_r+")";
        color5.style.background = "rgb("+random_r/2+","+random_b/2+","+random_g/3+")";
        color6.style.background = "rgb("+random_g/7+","+random_r+","+random_b/2+")";
    }
}
function hard() {
    color1.disabled=false;
    color2.disabled=false;
    color3.disabled=false;
    color4.disabled=false;
    color5.disabled=false;
    color6.disabled=false;
    color4.style.visibility = "visible";
    color5.style.visibility = "visible";
    color6.style.visibility = "visible";
    ans_box = Math.floor(Math.random()*6 + 1);
    hardbool=true;
    document.getElementById('yellow').style.background = "rgb(231, 198, 9)";
    document.getElementById('tryagain').style.visibility = "hidden";
    random_r = Math.floor(Math.random()*256);
    random_g = Math.floor(Math.random()*256);
    random_b = Math.floor(Math.random()*256);
    document.getElementById('r').innerHTML=random_r;
    document.getElementById('g').innerHTML=random_g;
    document.getElementById('b').innerHTML=random_b;
    ans_box = Math.floor(Math.random()*6 + 1);
    if (ans_box==1) {
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.background = "rgb("+random_g/6+","+random_r+","+random_b/3+")";
        color3.style.background = "rgb("+random_r/2+","+random_b+","+random_g/2+")";
        color4.style.background = "rgb("+random_g+","+random_b+","+random_r/8+")";
        color5.style.background = "rgb("+random_b/6+","+random_r/2+","+random_g/3+")";
        color6.style.background = "rgb("+random_r/4+","+random_b/7+","+random_g/2+")";
    }
    else if (ans_box==2) {
        color1.style.background = "rgb("+random_r/5+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r/3+","+random_g+","+random_b/4+")";
        color4.style.background = "rgb("+random_b/8+","+random_r+","+random_g/7+")";
        color5.style.background = "rgb("+random_g/2+","+random_r/2+","+random_b/3+")";
        color6.style.background = "rgb("+random_g+","+random_b+","+random_r/2+")";
    }
    else if (ans_box==3) {
        color1.style.background = "rgb("+random_b+","+random_r/2+","+random_g+")";
        color2.style.background = "rgb("+random_r/8+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_b/4+","+random_g/3+","+random_r+")";
        color5.style.background = "rgb("+random_r/2+","+random_b/2+","+random_g/3+")";
        color6.style.background = "rgb("+random_g/7+","+random_r+","+random_b/2+")";
    }
    else if (ans_box==4) {
        color1.style.background = "rgb("+random_r/7+","+random_g/2+","+random_b+")";
        color2.style.background = "rgb("+random_b/3+","+random_r+","+random_g+")";
        color3.style.background = "rgb("+random_b/2+","+random_g/7+","+random_r+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_g+","+random_r/2+","+random_b/3+")";
        color6.style.background = "rgb("+random_g/6+","+random_b+","+random_r/2+")";
    }
    else if (ans_box==5) {
        color1.style.background = "rgb("+random_r/6+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_b/5+","+random_g+","+random_r+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b/7+")";
        color4.style.background = "rgb("+random_b/2+","+random_r/3+","+random_g+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_g/7+","+random_b/5+","+random_r/2+")";
    }
    else if (ans_box==6) {
        color1.style.background = "rgb("+random_r/9+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_b+","+random_g/8+","+random_r+")";
        color3.style.background = "rgb("+random_g/7+","+random_b+","+random_r/2+")";
        color4.style.background = "rgb("+random_b+","+random_r/3+","+random_g+")";
        color5.style.background = "rgb("+random_g/2+","+random_r+","+random_b/3+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
    }
}
function rgb() {
    color1.disabled=false;
    color2.disabled=false;
    color3.disabled=false;
    color4.disabled=false;
    color5.disabled=false;
    color6.disabled=false;
    document.getElementById('yellow').style.background = "rgb(231, 198, 9)";
    document.getElementById('tryagain').style.visibility = "hidden";
    random_r = Math.floor(Math.random()*256);
    random_g = Math.floor(Math.random()*256);
    random_b = Math.floor(Math.random()*256);
    document.getElementById('r').innerHTML=random_r;
    document.getElementById('g').innerHTML=random_g;
    document.getElementById('b').innerHTML=random_b;
    ans_box = Math.floor(Math.random()*6 + 1);
    if (ans_box==1) {
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.background = "rgb("+random_g/6+","+random_r+","+random_b/3+")";
        color3.style.background = "rgb("+random_r/2+","+random_b+","+random_g/2+")";
        color4.style.background = "rgb("+random_g+","+random_b+","+random_r/8+")";
        color5.style.background = "rgb("+random_b/6+","+random_r/2+","+random_g/3+")";
        color6.style.background = "rgb("+random_r/4+","+random_b/7+","+random_g/2+")";
    }
    else if (ans_box==2) {
        color1.style.background = "rgb("+random_r/5+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r/3+","+random_g+","+random_b/4+")";
        color4.style.background = "rgb("+random_b/8+","+random_r+","+random_g/7+")";
        color5.style.background = "rgb("+random_g/2+","+random_r/2+","+random_b/3+")";
        color6.style.background = "rgb("+random_g+","+random_b+","+random_r/2+")";
    }
    else if (ans_box==3) {
        color1.style.background = "rgb("+random_b+","+random_r/2+","+random_g+")";
        color2.style.background = "rgb("+random_r/8+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_b/4+","+random_g/3+","+random_r+")";
        color5.style.background = "rgb("+random_r/2+","+random_b/2+","+random_g/3+")";
        color6.style.background = "rgb("+random_g/7+","+random_r+","+random_b/2+")";
    }
    else if (ans_box==4) {
        color1.style.background = "rgb("+random_r/7+","+random_g/2+","+random_b+")";
        color2.style.background = "rgb("+random_b/3+","+random_r+","+random_g+")";
        color3.style.background = "rgb("+random_b/2+","+random_g/7+","+random_r+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_g+","+random_r/2+","+random_b/3+")";
        color6.style.background = "rgb("+random_g/6+","+random_b+","+random_r/2+")";
    }
    else if (ans_box==5) {
        color1.style.background = "rgb("+random_r/6+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_b/5+","+random_g+","+random_r+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b/7+")";
        color4.style.background = "rgb("+random_b/2+","+random_r/3+","+random_g+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_g/7+","+random_b/5+","+random_r/2+")";
    }
    else if (ans_box==6) {
        color1.style.background = "rgb("+random_r/9+","+random_b/2+","+random_g+")";
        color2.style.background = "rgb("+random_b+","+random_g/8+","+random_r+")";
        color3.style.background = "rgb("+random_g/7+","+random_b+","+random_r/2+")";
        color4.style.background = "rgb("+random_b+","+random_r/3+","+random_g+")";
        color5.style.background = "rgb("+random_g/2+","+random_r+","+random_b/3+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
    }
    value=6;
}
function cc1() {
    if (ans_box==1) {
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.visibility = "visible";
        color3.style.visibility = "visible";
        color4.style.visibility = "visible";
        color5.style.visibility = "visible";
        color6.style.visibility = "visible";
        document.getElementById('yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        color1.disabled=true;
        color2.disabled=true;
        color3.disabled=true;
        color4.disabled=true;
        color5.disabled=true;
        color6.disabled=true;
    }
    else {
        color1.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function cc2() {
    if (ans_box==2) {
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color1.style.visibility = "visible";
        color3.style.visibility = "visible";
        color4.style.visibility = "visible";
        color5.style.visibility = "visible";
        color6.style.visibility = "visible";
        document.getElementById('yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        color1.disabled=true;
        color2.disabled=true;
        color3.disabled=true;
        color4.disabled=true;
        color5.disabled=true;
        color6.disabled=true;
    }
    else {
        color2.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function cc3() {
    if (ans_box==3) {
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.visibility = "visible";
        color1.style.visibility = "visible";
        color4.style.visibility = "visible";
        color5.style.visibility = "visible";
        color6.style.visibility = "visible";
        document.getElementById('yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        color1.disabled=true;
        color2.disabled=true;
        color3.disabled=true;
        color4.disabled=true;
        color5.disabled=true;
        color6.disabled=true;
    }
    else {
        color3.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function cc4() {
    if (ans_box==4) {
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.visibility = "visible";
        color1.style.visibility = "visible";
        color3.style.visibility = "visible";
        color5.style.visibility = "visible";
        color6.style.visibility = "visible";
        document.getElementById('yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        color1.disabled=true;
        color2.disabled=true;
        color3.disabled=true;
        color4.disabled=true;
        color5.disabled=true;
        color6.disabled=true;
    }
    else {
        color4.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function cc5() {
    if (ans_box==5) {
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.visibility = "visible";
        color1.style.visibility = "visible";
        color4.style.visibility = "visible";
        color3.style.visibility = "visible";
        color6.style.visibility = "visible";
        document.getElementById('yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        color1.disabled=true;
        color2.disabled=true;
        color3.disabled=true;
        color4.disabled=true;
        color5.disabled=true;
        color6.disabled=true;
    }
    else {
        color5.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function cc6() {
    if (ans_box==6) {
        color2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        color2.style.visibility = "visible";
        color1.style.visibility = "visible";
        color4.style.visibility = "visible";
        color5.style.visibility = "visible";
        color3.style.visibility = "visible";
        document.getElementById('yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        color1.disabled=true;
        color2.disabled=true;
        color3.disabled=true;
        color4.disabled=true;
        color5.disabled=true;
        color6.disabled=true;
    }
    else {
        color6.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
