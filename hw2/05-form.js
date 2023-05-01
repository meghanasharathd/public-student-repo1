// Add your code here
let submission = document.querySelector('form');

submission.addEventListener('submit', (event) => {
  const title = '========= Form Submission =========';
  const name = document.getElementById('fullName').value || 'no submission';
  const email = document.getElementById('email').value || 'no submission';

  const userRegistration = document.getElementById('registration');
  const registration = userRegistration.value;

  const textArea = document.getElementById('textarea').value || 'no submission';

  const checked = document.querySelectorAll('input[name="courses"]:checked');
  let courses = [];
  checked.forEach((checked) => {
    courses.push(checked.value);
  });

  if (
    name === 'no submission' &&
    email === 'no submission' &&
    registration === 'Choose an Option' &&
    textArea === 'no submission' &&
    courses.length === 0
  ) {
    console.warn('You must enter some data to submit this form');
  } else {
    console.group(title);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
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
    console.log(`Anything Else: ${textArea}`);
    console.groupEnd();
  }

  event.preventDefault();
});
