function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(function(step) {
        step.classList.remove('active');
    });

    // Show the next step
    document.getElementById(step).classList.add('active');

    if (step === 'confirmation') {
        showSummary();
    }
}

function showSummary() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cuisines = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    const summary = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Favorite Cuisines:</strong> ${cuisines.join(', ')}</p>
    `;

    document.getElementById('summary').innerHTML = summary;
}

function submitForm() {
    const name = document.getElementById('name').value;
    document.getElementById('userName').innerText = name;
    nextStep('success');
}

function startApp() {
    alert('Welcome to the restaurant app!');
}

// Start with the welcome step
nextStep('welcome');
