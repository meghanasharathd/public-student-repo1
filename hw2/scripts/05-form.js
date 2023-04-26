


function Test(event) {
    event.preventDefault();
    let form = document.querySelector('form');
    console.log(`FullName: ${form.querySelector('#NameInput').value}`);
    console.log(`Email: ${form.querySelector('#EmailInput').value}`);
    console.log(`Registration: ${form.querySelector('#RegistrationDropDown').value}`);
    let courses = form.getElementsByClassName('form-check-input');

    let checkedCourses = ''
    for(let i = 0; i < courses.length; ++i) {
        if (courses[i].checked) {
            checkedCourses = `${checkedCourses} ${courses[i].value}`;
        }
    }

    if (checkedCourses === '') {
        checkedCourses = 'None Selected';
    }
    
    console.log(`Courses: ${checkedCourses}`);

    let comment = form.querySelector('#CommentBox').value;
    if (comment === '') {
        comment = 'No Comment Made';
    }
    console.log(`Comment: ${comment}`);
    console.log('End Of Form\n\n\n');
}

document.querySelector('form').addEventListener('submit', Test);
