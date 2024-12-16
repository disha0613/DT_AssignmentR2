// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarArrow = document.getElementById('sidebarArrow');
    
    // Toggle sidebar visibility
    sidebar.classList.toggle('visible');
    
    // Change the arrow direction based on the sidebar visibility
    if (sidebar.classList.contains('visible')) {
        sidebarArrow.innerHTML = '←'; // Arrow pointing left when sidebar is visible
    } else {
        sidebarArrow.innerHTML = '→'; // Arrow pointing right when sidebar is hidden
    }
}
