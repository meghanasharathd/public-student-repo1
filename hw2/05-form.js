// Add your code here
let submission = document.querySelector('form');

submission.addEventListener('submit', (event) => {
  const title = '========= Form Submission =========';
  const userName = document.getElementById('fullName');
  const name = userName.value;
  const userEmail = document.getElementById('email');
  const email = userEmail.value;

  const userRegistration = document.getElementById('registration');
  const registration = userRegistration.value;

  const userTextArea = document.getElementById('textarea');
  const textArea = userTextArea.value;

  const checked = document.querySelectorAll('input[name="courses"]:checked');
  let courses = [];
  checked.forEach((checked) => {
    courses.push(checked.value);
  });

  if (
    name === '' &&
    email === '' &&
    registration === 'Choose an Option' &&
    textArea === '' &&
    courses.length === 0
  ) {
    console.warn('You must enter some data to submit this form');
  } else {
    console.group(title);
    if (name === '') {
      console.log(`Name: no submission`);
    } else {
      console.log(`Name: ${name}`);
    }
    if (email === '') {
      console.log(`Email: no submission`);
    } else {
      console.log(`Email: ${email}`);
    }
    if (registration === 'Choose an Option') {
      console.log(`Registration Status: no submission`);
    } else {
      console.log(`Registration Status: ${registration}`);
    }

    if (courses.length === 0) {
      console.log(`Courses Taken: no submission`);
    } else {
      courses.forEach((courses) => {
        console.log(`Courses Taken: ${courses}`);
      });
    }

    if (textArea === '') {
      console.log(`Anything Else: no submission`);
    } else {
      console.log(`Anything Else: ${textArea}`);
    }
    console.groupEnd();
  }

  event.preventDefault();
});
