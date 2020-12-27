// var infos = [
//     member1 = { name: "Luke Cage", job: "Founder & CEO", img: "imgs/team-1.jpg" },
//     member2 = { name: "Jessica Jones", job: "Product Designer", img: "imgs/team-2.jpg" },
//     member3 = { name: "Matt Murdock", job: "Lead Developer", img: "imgs/team-3.jpg" },
//     member4 = { name: "Claire Temple", job: "Sales Manager", img: "imgs/team-4.jpg" },
//     member1 = { name: "Luke Cage", job: "Founder & CEO", img: "imgs/team-1.jpg" },
//     member2 = { name: "Jessica Jones", job: "Product Designer", img: "imgs/team-2.jpg" },
//     member3 = { name: "Matt Murdock", job: "Lead Developer", img: "imgs/team-3.jpg" },
//     member4 = { name: "Claire Temple", job: "Sales Manager", img: "imgs/team-4.jpg" },
//     member1 = { name: "Luke Cage", job: "Founder & CEO", img: "imgs/team-1.jpg" },
//     member2 = { name: "Jessica Jones", job: "Product Designer", img: "imgs/team-2.jpg" },
//     member3 = { name: "Matt Murdock", job: "Lead Developer", img: "imgs/team-3.jpg" },
//     member4 = { name: "Claire Temple", job: "Sales Manager", img: "imgs/team-4.jpg" },
// ];
// var containers = "";
// for (var i = 0; i < infos.length; i++) {
//     containers += "<div class='col-lg-3 col-md-6 mb-4'><div class='position-relative'><img class='img-fluid' src=" + infos[i].img + "><div class='overlay position-absolute text-left'><div class='pl-3'><ul class='list-unstyled  d-flex align-items-center icons pt-3'><li class=' mr-3'><i class='fab fa-facebook-f mr-2'></i> </li><li class='mr-3'><i class='fab fa-twitter mr-2'></i></li><li><i class='fab fa-instagram'></i></li></ul><h4>" +infos[i].name +"</h4><span>"+infos[i].job+"</span></div></div></div></div>";
// }
// document.getElementById("card").innerHTML = containers;
$(".wrapper").animate({"width":"100%"}, 2000);
$(".wrapper").animate({"height":window.innerHeight}, 2000, function(){
    $(".wrapper h1").slideDown(2000, function(){
        $(".wrapper>div").fadeIn(2000)
    })
});