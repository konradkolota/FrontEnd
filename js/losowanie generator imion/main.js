const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Astrid", "Stella", "Malin", "Ingrid", "Elsa", "Alva", "Tove", "Magnus", "Olaf", "Felix", "Lars", "Oskar", "Markus", "Ivar",];
const prefix = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawczy, myślę", "Szczrze uważam", "Na 100 twierdzę", "Jestem pewien"];

const nameGenerator = () => {
    // const indexName = Math.floor(Math.random() * names.length);
    // const indexPrefix = Math.floor(Math.random() * prefix.length);
    div.textContent = `${prefix[Math.floor(Math.random() * prefix.length)]}, że najlepsze będzie imię ${names[Math.floor(Math.random() * names.length)]}`;
        }

btn.addEventListener('click', nameGenerator);