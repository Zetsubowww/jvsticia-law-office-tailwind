function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('-translate-x-full')) {
        openSidebar();
    } else {
        closeSidebar();
    }
}

function openSidebar() {
    document.getElementById('sidebar').classList.remove('-translate-x-full');
    document.getElementById('sidebar').classList.add('translate-x-0');
    document.getElementById('sidebar-overlay').classList.remove('hidden');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('translate-x-0');
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('sidebar-overlay').classList.add('hidden');
}