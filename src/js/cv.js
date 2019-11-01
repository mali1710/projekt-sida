//Variabler
const urlW = "https://www.mallind.se/webapp/work.php/work/";
const urlE = "https://www.mallind.se/webapp/education.php/education/";
const urlP = "https://www.mallind.se/webapp/projects.php/projects/";

const workList = document.getElementById("work-list");
const educationList = document.getElementById("education-list");
const projectList = document.getElementById("cards");

//Eventlisteners
window.addEventListener("load", fetchData());

/*
Functions
*/

function fetchData() {
  showWork();
  showEducation();
  showProjects();
}

//Laddar lista med kurser
function showWork() {
  fetch(urlW)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(work => {
        output += `<tr>
            <td>${work.dates}</td>
            <td>${work.company}</td>
            <td>${work.title}</td>
            </tr>`;
      });
      workList.innerHTML = output;
    });
}

function showEducation() {
  fetch(urlE)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(e => {
        output += `<tr>
              <td>${e.dates}</td>
              <td>${e.school}</td>
              <td>${e.program}</td>
              </tr>`;
      });
      educationList.innerHTML = output;
    });
}

function showProjects() {
  fetch(urlP)
    .then(res => res.json())
    .then(data => {
      let output = "";

      data.forEach(project => {
        output += `<div class="card">
          <div class="card__image-container">
            <img src="${project.image}" alt="" />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">
            ${project.title}
            </p>
            <div class="card__info">
              <p class="text--small">${project.description}</p>
              <p class="card__link text--medium"><a target=”_blank” href="${project.url}">Link</a></p>
            </div>
          </div>
        </div>`;
      });
      projectList.innerHTML = output;
    });
}
//Lägg till kurs via formulär
