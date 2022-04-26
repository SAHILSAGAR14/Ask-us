// ## JS Logic/Validation/Checks for Appointment Form ##

let nameValid = () => {
  let name = document.getElementById("formGroupExampleInput").value;
  if (name == "" || name == null) {
    // console.log("Name is Required");
    document.getElementById("errorName").innerHTML = "Name is Required";
    document.getElementById("b1").disabled = true;
    document
      .getElementById("formGroupExampleInput")
      .classList.add("is-invalid");
  } else {
    //name should contains letter only
    let nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(name) && name.length >= 3) {
      // console.log(name);
      document.getElementById("errorName").innerHTML = "";
      document.getElementById("b1").disabled = false;
      document
        .getElementById("formGroupExampleInput")
        .classList.remove("is-invalid");
    } else {
      // console.log("Name should contains Letter Only");
      document.getElementById("errorName").innerHTML =
        "Name should contains minimum 3 Letter Only";
      document.getElementById("b1").disabled = true;
      document
        .getElementById("formGroupExampleInput")
        .classList.add("is-invalid");
    }
  }
};

let fnameValid = () => {
  let name = document.getElementById("formGroupExampleInput2").value;
  if (name == "" || name == null) {
    // console.log("Father Name is Required");
    document.getElementById("errorfName").innerHTML = "Father Name is Required";
    document.getElementById("b1").disabled = true;
    document
      .getElementById("formGroupExampleInput2")
      .classList.add("is-invalid");
  } else {
    //Father name should contains letter only
    let nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(name) && name.length >= 3) {
      // console.log(name);
      document.getElementById("errorfName").innerHTML = "";
      document.getElementById("b1").disabled = false;
      document
        .getElementById("formGroupExampleInput2")
        .classList.remove("is-invalid");
    } else {
      // console.log("Father Name should contains Letter Only");
      document.getElementById("errorfName").innerHTML =
        "Father Name should contains minimum 3 Letter Only";
      document.getElementById("b1").disabled = true;
      document
        .getElementById("formGroupExampleInput2")
        .classList.add("is-invalid");
    }
  }
};

let emailValid = () => {
  let email = document.getElementById("inputEmail4").value;
  if (email == "" || email == null) {
    // console.log("email is Required");
    document.getElementById("errorEmail").innerHTML = "Email is Required";
    document.getElementById("b1").disabled = true;
    document.getElementById("inputEmail4").classList.add("is-invalid");
  } else {
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    if (emailRegex.test(email)) {
      // console.log(email);
      document.getElementById("errorEmail").innerHTML = "";
      document.getElementById("b1").disabled = false;
      document.getElementById("inputEmail4").classList.remove("is-invalid");
    } else {
      // console.log("Invalid Email Address");
      document.getElementById("errorEmail").innerHTML =
        "Invalid Email Address..";
      document.getElementById("b1").disabled = true;
      document.getElementById("inputEmail4").classList.add("is-invalid");
    }
  }
};

let phoneValid = () => {
  let phone = document.getElementById("inputMobile4").value;
  if (phone == "" || phone == null) {
    // console.log("Phone is Required");
    document.getElementById("errorPhone").innerHTML = "Phone is Required";
    document.getElementById("b1").disabled = true;
    document.getElementById("inputMobile4").classList.add("is-invalid");
  } else {
    //check phone no contains 10 digit or not
    if (phone.length == 10) {
      //start digit has to be between 9,8,7 or 6.
      if (
        phone.substr(0, 1) == "9" ||
        phone.substr(0, 1) == "8" ||
        phone.substr(0, 1) == "7" ||
        phone.substr(0, 1) == "6"
      ) {
        // console.log(phone);
        document.getElementById("errorPhone").innerHTML = "";
        document.getElementById("b1").disabled = false;
        document.getElementById("inputMobile4").classList.remove("is-invalid");
      } else {
        // console.log("Invalid Mobile Number");
        document.getElementById("errorPhone").innerHTML =
          "Invalid Mobile Number...";
        document.getElementById("b1").disabled = true;
        document.getElementById("inputMobile4").classList.add("is-invalid");
      }
    } else {
      // console.log("Phone Number must contains 10 Digit");
      document.getElementById("errorPhone").innerHTML =
        "Phone Number must Contains 10 Digit.";
      document.getElementById("b1").disabled = true;
      document.getElementById("inputMobile4").classList.add("is-invalid");
    }
  }
};
