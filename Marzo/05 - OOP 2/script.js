document.addEventListener('DOMContentLoaded', () => {

    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');

    window.onload = () => {
        displaySavedName();
        initializeTimer();
        saveBtn.addEventListener('click', saveName);
        clearBtn.addEventListener('click', clearName);
    };

    const saveName = () => {
        let name = document.getElementById('nameInput').value;
        localStorage.setItem('name', name);
        displaySavedName();
    }

    const clearName = () => {
        localStorage.removeItem('name');
        displaySavedName();
    }

    const displaySavedName = () => {
        var savedName = localStorage.getItem('name');
        var displayArea = document.getElementById('savedValue');
        displayArea.textContent = savedName ? 'Saved value: ' + savedName : '';
    }

    let timer;
    let timeDisplay = document.getElementById('time');

    const initializeTimer = () => {
        let savedTime = sessionStorage.getItem('timer') || 0;
        timer = parseInt(savedTime, 10);
        timeDisplay.textContent = timer;
        setInterval(updateTimer, 1000);
    }

    const updateTimer = () => {
        timer++;
        timeDisplay.textContent = timer;
        sessionStorage.setItem('timer', timer);
    }

});