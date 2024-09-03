// Placeholder for potential tab switching functionality
document.querySelectorAll('.tab').forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Example functionality: Highlight the clicked tab and update content
        document.querySelectorAll('.tab').forEach(t => t.style.backgroundColor = '#ccc');
        tab.style.backgroundColor = '#bbb';

        // Update content based on the selected tab
        document.querySelector('.content').innerHTML = `<h1><em>Content for Tab ${index + 1}</em></h1>`;
    });
});
