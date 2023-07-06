var element1 = document.getElementById("likee");
var element2 = document.getElementById("unlikee");
document.querySelectorAll(".heart")[0].addEventListener('click',function (){
    element1.classList.toggle("diss");
    element1.classList.toggle("active");
    element2.classList.toggle("diss");
    element2.classList.toggle("active");
})
document.querySelectorAll(".heart")[1].addEventListener('click',function (){
    element1.classList.toggle("diss");
    element1.classList.toggle("active");
    element2.classList.toggle("diss");
    element2.classList.toggle("active");
})

var test1=document.querySelectorAll(".testrl1")[0];
var test2=document.querySelectorAll(".testrl2")[0];
document.querySelectorAll(".pagination")[0].addEventListener('click',function(){
    test1.classList.toggle("testtop");
    test1.classList.toggle("testbottom");
    test2.classList.toggle("testtop");
    test2.classList.toggle("testbottom");
    document.querySelectorAll(".pagination")[0].classList.toggle("rotate");
    // alert("hi");
})
