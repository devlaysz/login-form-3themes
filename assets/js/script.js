document.addEventListener("DOMContentLoaded", function() {
    const darkModeIcon = document.getElementById("dark-mode-icon");
    let mode = 0; // Inicia no modo light
    const icons = ["fa-cloud-moon", "fa-moon", "fa-sun"]; // Font Awesome icons para cada modo

    darkModeIcon.addEventListener("click", function() {
        // Remove a classe atual e adiciona a próxima de acordo com o modo atual
        if (mode === 0) {
            darkOneTheme();
        } else if (mode === 1) {
            darkTwoTheme();
        } else {
            lightTheme();
        }

        // Atualiza o ícone de acordo com o novo modo
        updateIcon();
    });

    // Função para atualizar o ícone
    function updateIcon() {
        // Remove o ícone anterior e adiciona o novo ícone correspondente ao modo atual
        darkModeIcon.classList.remove(...icons);
        darkModeIcon.classList.add(icons[mode]);
    }

    // Função para definir o tema dark-one
    function darkOneTheme() {
        document.body.classList.remove("dark-two", "light");
        document.body.classList.add("dark-one");
        mode = 1; // Define o próximo modo como dark-two
    }

    // Função para definir o tema dark-two
    function darkTwoTheme() {
        document.body.classList.remove("dark-one", "light");
        document.body.classList.add("dark-two");
        mode = 2; // Define o próximo modo como light
    }

    // Função para definir o tema light
    function lightTheme() {
        document.body.classList.remove("dark-one", "dark-two");
        document.body.classList.add("light");
        mode = 0; // Define o próximo modo como light
    }

    // Inicia com o tema light e o ícone definido no HTML
    updateIcon();
});

