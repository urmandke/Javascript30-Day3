// Get all input elements with in the controls div
const inputs = document.querySelectorAll('.controls input');

// Update variable values
function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

// Attach Event listeners
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
