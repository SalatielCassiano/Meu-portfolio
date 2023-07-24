// Função para alterar a cor de fundo do cabeçalho ao passar o mouse sobre ele
function changeHeaderBackground() {
    const header = document.querySelector('header');
    header.addEventListener('mouseover', () => {
        header.style.backgroundColor = '#555';
    });

    header.addEventListener('mouseout', () => {
        header.style.backgroundColor = '#3b3a3a';
    });
}

// Função para exibir uma mensagem de alerta quando o botão "Ver Código-fonte" for clicado
function showAlert() {
    const btnVerCodigo = document.querySelectorAll('.project a')[1];
    btnVerCodigo.addEventListener('click', () => {
        alert('Código-fonte disponível no GitHub!');
    });
}

// Chamada das funções ao carregar a página
window.onload = function () {
    changeHeaderBackground();
    showAlert();
};
// Função para aplicar efeito de destaque ao passar o mouse sobre os links do cabeçalho
function highlightHeaderLinks() {
    const headerLinks = document.querySelectorAll('nav a');
    headerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff9900';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
}
// Função para exibir um pop-up de confirmação ao clicar em "Ver Site"
function showConfirmationPopup() {
    const btnVerSite = document.querySelectorAll('.project a')[0];
    btnVerSite.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = confirm('Você será redirecionado para o site. Deseja continuar?');
        if (confirmed) {
            window.location.href = btnVerSite.href;
        }
    });
}
// Função para rolar até o topo da página quando o rodapé for clicado
function scrollToTop() {
    const footer = document.querySelector('footer');
    footer.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// Função para animar o título do cabeçalho
function animateHeaderTitle() {
    const headerTitle = document.querySelector('header h1');
    headerTitle.addEventListener('mouseover', () => {
        headerTitle.style.transform = 'rotate(360deg)';
        headerTitle.style.transition = 'transform 1s ease-in-out';
    });

    headerTitle.addEventListener('mouseout', () => {
        headerTitle.style.transform = 'rotate(0deg)';
        headerTitle.style.transition = 'transform 1s ease-in-out';
    });
}
