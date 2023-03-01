// Section 1
const section1Button = document.getElementById('section-1-button');
const section1Content = document.getElementById('section-1-content');


section1Button.addEventListener('click', () => {
  section1Content.classList.toggle('hidden');
});


// Section 2
const section2Button = document.getElementById('section-2-button');
const section2Content = document.getElementById('section-2-content');


section2Button.addEventListener('click', () => {
  section2Content.classList.toggle('hidden');
});


// Section 3
const section3Button = document.getElementById('section-3-button');
const section3Content = document.getElementById('section-3-content');


section3Button.addEventListener('click', () => {
  section3Content.classList.toggle('hidden');
});


// Section 4
const section4Button = document.getElementById('section-4-button');
const section4Content = document.getElementById('section-4-content');


section4Button.addEventListener('click', () => {
  section4Content.classList.toggle('hidden');
});


// Search
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const sections = document.querySelectorAll('section');


  sections.forEach((section) => {
    const sectionTitle = section.querySelector('h2').innerText.toLowerCase();


    if (sectionTitle.includes(searchTerm)) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
});


// Feedback
const feedbackForm = document.getElementById('feedback-form');


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();


  const nameInput = document.getElementById('feedback-name');
  const emailInput = document.getElementById('feedback-email');
  const messageInput = document.getElementById('feedback-message');


  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;


  // Send feedback to server
  console.log(`Name: ${nameValue}, Email: ${emailValue}, Message: ${messageValue}`);
});


// Chart
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sales',
    data: [100, 120, 130, 110, 140, 150, 130],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};


const chartOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};


const chart = new Chart('chart', {
  type: 'bar',
  data: chartData,
  options: chartOptions
});


// Typewriter
const typewriterElement = document.getElementById('typewriter');


const typewriter = new Typewriter(typewriterElement, {
  loop: true
});


typewriter.typeString('Welcome to our website!')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('our community')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('our services')
  .pauseFor(1000)
  .deleteChars(12)
  .start();