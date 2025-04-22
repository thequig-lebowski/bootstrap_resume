function sendMail(contactForm) {

    var templateParams = {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value,
    };

    emailjs.send("service_jiubjee", "Project_Rosie", templateParams)
        .then(
            function (response) {
                console.log('Success', response);
            },
            function (error) {
                console.log('Failed', error);
            });
    this.reset();
    return false;
}

