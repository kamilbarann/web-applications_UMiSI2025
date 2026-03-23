document.addEventListener('DOMContentLoaded', () => {
    // Stoper
    let time = 0; // czas w sekundach
    let timerInterval = null;
    const display = document.getElementById('stoper-display');

    function formatTime(seconds) {
        if (seconds < 60) return `${seconds}s`;
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}min ${s}s`;
    }

    document.getElementById('startBtn').addEventListener('click', () => {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                time++;
                display.textContent = formatTime(time);
            }, 1000);
        }
    });

    document.getElementById('stopBtn').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        time = 0;
        display.textContent = formatTime(time);
    });

    // Generator haseł
    document.getElementById('generateBtn').addEventListener('click', () => {
        const minLen = parseInt(document.getElementById('minLength').value) || 8;
        const maxLen = parseInt(document.getElementById('maxLength').value) || 12;
        const useCaps = document.getElementById('useCaps').checked;
        const useSpecial = document.getElementById('useSpecial').checked;

        if (minLen > maxLen) {
            alert("Minimalna długość nie może być większa od maksymalnej");
            return;
        }

        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const special = "!@#$%^&*()_+[]{}|;:,.<>?";
        const numbers = "0123456789";

        let chars = lower + numbers;
        if (useCaps) chars += upper;
        if (useSpecial) chars += special;

        const length = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
        let password = "";
        
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        alert(`Wygenerowane hasło: ${password}`);
    });

    // Tabela z API
    const tableBody = document.querySelector('#productsTable tbody');
    const filterInput = document.getElementById('filterInput');
    const sortSelect = document.getElementById('sortSelect');
    let originalData = [];
    let currentData = [];

    async function fetchData() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            originalData = data.products.slice(0, 50);
            currentData = [...originalData];
            renderTable(currentData);
        } catch (error) {
            console.error('Błąd pobierania danych:', error);
        }
    }

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            // Kolumny: zdjęcie, tytuł, opis
            row.innerHTML = `
                <td><img src="${item.thumbnail}" class="product-img" alt="${item.title}"></td>
                <td>${item.title}</td>
                <td>${item.description}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Filtrowanie
    filterInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        currentData = originalData.filter(item => 
            item.title.toLowerCase().includes(term) || 
            item.description.toLowerCase().includes(term)
        );
        sortData(sortSelect.value); // sortowanie po filtrowaniu
    });

    // Sortowanie
    sortSelect.addEventListener('change', (e) => {
        sortData(e.target.value);
    });

    function sortData(order) {
        if (order === 'original') {
            // Jeśli filtruje, sortuje przefiltrowaną listę zgodnie z oryginalnym indeksem
            currentData.sort((a, b) => a.id - b.id); 
        } else if (order === 'asc') {
            currentData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (order === 'desc') {
            currentData.sort((a, b) => b.title.localeCompare(a.title));
        }
        renderTable(currentData);
    }

    fetchData();
});