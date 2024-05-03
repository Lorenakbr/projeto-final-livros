const books = [
    { title: "Tudo é rio", src: "https://m.media-amazon.com/images/I/816Udvs9O7L._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "As mil partes do meu coração", src: "https://m.media-amazon.com/images/I/814pUv-EGbL._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "A morte de Ivan Ilitch", src: "https://m.media-amazon.com/images/I/91X2GUWHA5L._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "A trança", src: "https://m.media-amazon.com/images/I/91ECF-iCKEL._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "Flores para Algernon", src: "https://letras.biblioteca.ufrj.br/wp-content/uploads/2023/01/evelyn-hugo-5.png", button: "Clique para ler a resenha" },
    { title: "O lado feio do amor", src: "https://m.media-amazon.com/images/I/81FEytag46L._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "O morro dos ventos uivantes", src: "https://m.media-amazon.com/images/I/81tagWu6QsL._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "Métrica", src: "https://m.media-amazon.com/images/I/71yqSkaABdL._SL1500_.jpg", button: "Clique para ler a resenha" },
    { title: "É assim que acaba", src: "https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg", button: "Clique para ler a resenha" },

];

const container = document.getElementById('bookList');

books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = book.src;
    card.appendChild(img);

    const title = document.createElement('p');
    title.textContent = book.title;
    card.appendChild(title);

    const btn = document.createElement('button');
    btn.textContent = book.button; 
    btn.classList.add('bn632-hover', 'bn27'); 
    card.appendChild(btn);

    container.appendChild(card);
});

function scrollToTarget(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector('a[href="#livros"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToTarget('#livros'); 
});

document.querySelector('a[href="#resenha"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToTarget('#resenha'); 
});

document.querySelector('a[href="#dicasGuias"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToTarget('#dicasGuias'); 
});

document.querySelector('a[href="#sobre"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToTarget('#sobre'); 
});