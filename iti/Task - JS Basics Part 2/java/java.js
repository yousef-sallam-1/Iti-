var name1 = document.querySelector("#name");
var age = document.querySelector("#age");
var job = document.querySelector("#job");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {

    if (name1.value === "" || age.value === "" || job.value === "") {

        alert("Please fill all fields");

    } else {

        console.log("Name: " + name1.value);
        console.log("Age: " + age.value);
        console.log("Job: " + job.value);

        if (age.value < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }

});
