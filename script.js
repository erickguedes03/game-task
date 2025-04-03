function toggleDarkMode() {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
    
    // Altera a logo de acordo com o tema
    const logo = document.getElementById('logo');
    if (document.body.classList.contains('dark-mode')) {
        logo.src = 'assets/imagem_2025-04-03_134124541-removebg-preview.png';  // Logo do modo escuro
        localStorage.setItem('theme', 'dark'); // Salva o tema escuro
    } else {
        logo.src = 'assets/channels4_profile.jpg';  // Logo do modo claro
        localStorage.setItem('theme', 'light'); // Salva o tema claro
    }
}

// Verifica o tema salvo no localStorage e aplica ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('logo').src = 'assets/imagem_2025-04-03_134124541-removebg-preview.png';  // Logo do modo escuro
} else {
    document.body.classList.remove('dark-mode');
    document.getElementById('logo').src = 'assets/channels4_profile.jpg';  // Logo do modo claro
}