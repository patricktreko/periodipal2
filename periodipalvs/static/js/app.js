function checkAnswer(selected, correct) {
    // Remove previous feedback
    let feedback = document.getElementById('feedback');
    if (feedback) feedback.remove();

    // Create feedback element
    feedback = document.createElement('div');
    feedback.id = 'feedback';
    feedback.style.marginTop = '1em';
    feedback.style.fontWeight = 'bold';

    if (selected === correct) {
        feedback.textContent = '✅ Correct!';
        feedback.style.color = '#28a745';
    } else {
        feedback.textContent = '❌ Try again!';
        feedback.style.color = '#d72660';
    }

    // Insert feedback after the activities div
    const activities = document.getElementById('activities');
    activities.parentNode.insertBefore(feedback, activities.nextSibling);
}
