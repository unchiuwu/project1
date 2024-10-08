function search() {
    const filter = document.getElementById('find').value.toUpperCase();
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        const title = item.querySelector('h4').textContent || item.querySelector('h4').innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            item.style.display = ""; // Show item
        } else {
            item.style.display = "none"; // Hide item
        }
    });
}
