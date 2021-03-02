var user_name;

function login(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("name", user_name);
    window.location="second_page.html";
}
