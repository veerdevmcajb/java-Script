// Elements
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const imageInput = document.getElementById("image");

// Errors
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const genderError = document.getElementById("genderError");
const techError = document.getElementById("techError");
const imageError = document.getElementById("imageError");

// Helpers
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function show(el) {
  el.style.display = "block";
}
function hide(el) {
  el.style.display = "none";
}

// Validation functions
function validateName() {
  if (nameInput.value.trim().length < 3) {
    show(nameError);
    return false;
  }
  hide(nameError);
  return true;
}

function validateAge() {
  const val = parseInt(ageInput.value);
  if (isNaN(val) || val < 23 || val > 100) {
    show(ageError);
    return false;
  }
  hide(ageError);
  return true;
}

function validateEmail() {
  if (!emailRegex.test(emailInput.value.trim())) {
    show(emailError);
    return false;
  }
  hide(emailError);
  return true;
}

function validateCourse() {
  if (courseInput.value.trim() === "") {
    show(courseError);
    return false;
  }
  hide(courseError);
  return true;
}

function validateGender() {
  if (!document.querySelector('input[name="gender"]:checked')) {
    show(genderError);
    return false;
  }
  hide(genderError);
  return true;
}

function validateTechs() {
  const anyFrontend =
    document.querySelectorAll('input[name="frontend"]:checked').length > 0;
  const anyBackend =
    document.querySelectorAll('input[name="backend"]:checked').length > 0;
  const anyDatabase =
    document.querySelectorAll('input[name="database"]:checked').length > 0;
  if (!(anyFrontend || anyBackend || anyDatabase)) {
    show(techError);
    return false;
  }
  hide(techError);
  return true;
}

function validateImage() {
  if (imageInput.files.length === 0) {
    show(imageError);
    return false;
  }
  hide(imageError);
  return true;
}

// Events: focusout / change
nameInput.addEventListener("focusout", validateName);
ageInput.addEventListener("focusout", validateAge);
emailInput.addEventListener("focusout", validateEmail);
courseInput.addEventListener("focusout", validateCourse);
imageInput.addEventListener("change", validateImage);

// tech checkboxes change -> validate
const techCheckboxes = document.querySelectorAll(
  'input[name="frontend"], input[name="backend"], input[name="database"]'
);
techCheckboxes.forEach((cb) => cb.addEventListener("change", validateTechs));

// gender change
document
  .querySelectorAll('input[name="gender"]')
  .forEach((r) => r.addEventListener("change", validateGender));

// Save/load to localStorage
function loadStudents() {
  const students = JSON.parse(localStorage.getItem("students") || "[]");
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const tr = document.createElement("tr"); // <tr></tr>

    const td = (v) => {
      const cell = document.createElement("td");
      // <td></td>
      cell.innerHTML = v ?? "";
      // <td>valu</td>
      return cell;
    };

    tr.appendChild(td(student.name));// <tr><td>name</td></tr>
    tr.appendChild(td(student.email));// <tr><td>name</td> <td>email</td></tr>
    tr.appendChild(td(student.age));
    tr.appendChild(td(student.course));
    tr.appendChild(td(student.gender));
    tr.appendChild(td((student.frontend || []).join(", ")));
    tr.appendChild(td((student.backend || []).join(", ")));
    tr.appendChild(td((student.database || []).join(", ")));
    const imgCell = document.createElement("td");
    if (student.image) {
      const img = document.createElement("img");
      img.className = "avatar";
      img.src = student.image;
      img.alt = student.name || "avatar";
      imgCell.appendChild(img);
    }
    tr.appendChild(imgCell);
    tbody.appendChild(tr);
  });
}

// Utility to read selected values
function selectedValues(name) {
  return Array.from(
    document.querySelectorAll(`input[name="${name}"]:checked`)
  ).map((i) => i.value);
}

// Submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validate all
  const ok = [
    validateName(),
    validateEmail(),
    validateAge(),
    validateCourse(),
    validateGender(),
    validateTechs(),
    validateImage(),
  ].every(Boolean);

  if (!ok) return;

  const frontend = selectedValues("frontend");
  const backend = selectedValues("backend");
  const database = selectedValues("database");

  const gender =
    document.querySelector('input[name="gender"]:checked')?.value || "";

  // read image as base64
  const file = imageInput.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const student = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      age: ageInput.value.trim(),
      course: courseInput.value.trim(),
      gender,
      frontend,
      backend,
      database,
      image: reader.result,
    };

    const students = JSON.parse(localStorage.getItem("students") || "[]");
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
    form.reset();

    // hide any visible errors after reset
    [
      nameError,
      emailError,
      ageError,
      courseError,
      genderError,
      techError,
      imageError,
    ].forEach(hide);
  };
  reader.readAsDataURL(file);
});

// initial load
loadStudents();



