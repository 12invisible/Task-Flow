f// JS-only task addition (for demo)
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
}

// Navbar toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
