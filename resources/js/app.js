import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
if (document.getElementById('toggle-menu')) {
    document.getElementById('toggle-menu').onclick = function () {
        document.getElementById('menu').style.display = document.getElementById('menu').style.display === 'block' ? 'none' : 'block';
    };
}

// Your application logic here
