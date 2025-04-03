function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleIcon = document.getElementById('toggleIcon');
    const logo = document.getElementById('logo');

    // Alterna o ícone e a cor do SVG baseado no tema
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('fa-toggle-off');
        toggleIcon.classList.add('fa-toggle-on');
        logo.style.color = '#FFFFFF'; // Cor para modo escuro
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.classList.remove('fa-toggle-on');
        toggleIcon.classList.add('fa-toggle-off');
        logo.style.color = '#000000'; // Cor para modo claro
        localStorage.setItem('theme', 'light');
    }
}

// Verifica o tema salvo no localStorage e aplica ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.classList.remove('fa-toggle-off');
    toggleIcon.classList.add('fa-toggle-on');
    const logo = document.getElementById('logo');
    logo.style.color = '#FFFFFF'; // Cor para modo escuro
}

document.addEventListener('DOMContentLoaded', function() {
    alert("Bem-vindo ao Clash Royale dos guri!");
});

function toggleInfoSection() {
    const infoSection = document.getElementById("informacoes");
    const eyeIcon = document.getElementById("eyeIcon");
    
    if (infoSection.style.display === "none") {
        infoSection.style.display = "block";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        infoSection.style.display = "none";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

document.getElementById('contatoForm').onsubmit = function(event) {
    event.preventDefault(); 
    alert("Mensagem enviada com sucesso!");
    
    setTimeout(function() {
        location.reload();
    }, 2000);
};