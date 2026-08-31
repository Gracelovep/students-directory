/* ==========================================================
   HerTechTrail Academy — Student Directory
   ==========================================================
   This file demonstrates:
   - An array containing at least 20 student objects
   - Objects with multiple related properties
   - Accessing object properties (name, course, level, etc.)
   - Printing data to the console
   - Rendering the data onto a webpage
   ========================================================== */

// ----------------------------------------------------------
// 1. STUDENT DATA
// One array holds every student. Each student is a single
// object with the same five properties, so related data
// (name, course, level, location, bio) stays together.
// ----------------------------------------------------------
const students = [
  {
    name: "Ada",
    course: "Frontend Development",
    level: "Beginner",
    location: "Lagos",
    shortBio: "I am learning how to build websites.",
  },
  {
    name: "David",
    course: "Frontend Development",
    level: "Beginner",
    location: "Abuja",
    shortBio: "I enjoy learning and building with code.",
  },
  {
    name: "Chiamaka",
    course: "Backend Development",
    level: "Intermediate",
    location: "Enugu",
    shortBio: "I like working with servers and databases.",
  },
  {
    name: "Grace",
    course: "UI/UX Design",
    level: "Beginner",
    location: "Port Harcourt",
    shortBio: "I love designing clean and simple interfaces.",
  },
  {
    name: "Oluwaseun",
    course: "Data Analysis",
    level: "Intermediate",
    location: "Ibadan",
    shortBio: "I enjoy finding stories hidden inside data.",
  },
  {
    name: "Fatima",
    course: "Frontend Development",
    level: "Advanced",
    location: "Kano",
    shortBio: "I build responsive websites using React.",
  },
  {
    name: "Emeka",
    course: "Backend Development",
    level: "Beginner",
    location: "Onitsha",
    shortBio: "I am new to programming but very motivated.",
  },
  {
    name: "Zainab",
    course: "Product Management",
    level: "Intermediate",
    location: "Kaduna",
    shortBio: "I enjoy turning ideas into working products.",
  },
  {
    name: "Ngozi",
    course: "UI/UX Design",
    level: "Advanced",
    location: "Lagos",
    shortBio: "I have designed apps used by real startups.",
  },
  {
    name: "Tunde",
    course: "Data Analysis",
    level: "Beginner",
    location: "Ilorin",
    shortBio: "I am learning to use spreadsheets and SQL.",
  },
  {
    name: "Amara",
    course: "Frontend Development",
    level: "Intermediate",
    location: "Owerri",
    shortBio: "I enjoy turning designs into working pages.",
  },
  {
    name: "Blessing",
    course: "Cybersecurity",
    level: "Beginner",
    location: "Benin City",
    shortBio: "I am curious about how systems get protected.",
  },
  {
    name: "Ifeoma",
    course: "Backend Development",
    level: "Advanced",
    location: "Aba",
    shortBio: "I build APIs that power mobile apps.",
  },
  {
    name: "Halima",
    course: "Product Management",
    level: "Beginner",
    location: "Sokoto",
    shortBio: "I like organizing tasks and talking to users.",
  },
  {
    name: "Chinelo",
    course: "UI/UX Design",
    level: "Intermediate",
    location: "Awka",
    shortBio: "I sketch wireframes before building anything.",
  },
  {
    name: "Yetunde",
    course: "Data Analysis",
    level: "Advanced",
    location: "Abeokuta",
    shortBio: "I build dashboards that help teams decide fast.",
  },
  {
    name: "Precious",
    course: "Frontend Development",
    level: "Beginner",
    location: "Uyo",
    shortBio: "I just started learning HTML and CSS.",
  },
  {
    name: "Kelechi",
    course: "Cybersecurity",
    level: "Intermediate",
    location: "Umuahia",
    shortBio: "I enjoy testing systems for weaknesses.",
  },
  {
    name: "Aisha",
    course: "Backend Development",
    level: "Beginner",
    location: "Maiduguri",
    shortBio: "I am learning JavaScript and Node.js.",
  },
  {
    name: "Funmilayo",
    course: "Product Management",
    level: "Advanced",
    location: "Akure",
    shortBio: "I have led three product launches so far.",
  },
  {
    name: "Chidera",
    course: "UI/UX Design",
    level: "Beginner",
    location: "Asaba",
    shortBio: "I am learning Figma and design basics.",
  },
  {
    name: "Rashida",
    course: "Data Analysis",
    level: "Beginner",
    location: "Bauchi",
    shortBio: "I enjoy working with numbers and charts.",
  },
];

// ----------------------------------------------------------
// 2. ACCESSING OBJECT PROPERTIES
// A quick demo of reading individual properties directly
// off an object in the array.
// ----------------------------------------------------------
const firstStudent = students[0];
console.log("First student's name:", firstStudent.name);
console.log("First student's course:", firstStudent.course);
console.log("First student's level:", firstStudent.level);

// ----------------------------------------------------------
// 3. PRINT EVERY STUDENT TO THE CONSOLE
// Loop through the array once and print each student's
// details using their object properties.
// ----------------------------------------------------------
students.forEach((student, index) => {
  console.log(`\nStudent #${index + 1}`);
  console.log("Name:", student.name);
  console.log("Course:", student.course);
  console.log("Level:", student.level);
  console.log("Location:", student.location);
  console.log("Short Bio:", student.shortBio);
});

// ----------------------------------------------------------
// 4. PRINT THE LENGTH OF THE ARRAY
// ----------------------------------------------------------
console.log(`\nTotal number of students: ${students.length}`);

// ----------------------------------------------------------
// 5. DISPLAY THE DATA ON THE WEBPAGE
// Build one card per student and insert it into the page.
// This only runs in a browser (where "document" exists), so
// the data above can still be reused/tested in plain Node.
// ----------------------------------------------------------
function renderStudents(studentList) {
  const container = document.getElementById("student-directory");
  const countEl = document.getElementById("student-count");

  if (!container) return;

  countEl.textContent = `Total Students: ${studentList.length}`;

  studentList.forEach((student) => {
    const card = document.createElement("div");
    card.className = "student-card";

    card.innerHTML = `
      <h2>${student.name}</h2>
      <p><strong>Course:</strong> ${student.course}</p>
      <p><strong>Level:</strong> ${student.level}</p>
      <p><strong>Location:</strong> ${student.location}</p>
      <p class="bio">"${student.shortBio}"</p>
    `;

    container.appendChild(card);
  });
}

if (typeof document !== "undefined") {
  renderStudents(students);
}
