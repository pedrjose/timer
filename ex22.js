function timerCounter() {
    // selecting and saving the timer
    const clock = document.querySelector('.timer');
    let seconds = 0; let timer;

    // initializing the seconds from timer
    function getTimeSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' })
    }

    function startClock() {
        timer = setInterval(function () { seconds++, clock.innerHTML = getTimeSeconds(seconds); }, 1000)
    }

    document.addEventListener('click', function (event) {
        // element is saving how element was clicked
        const element = event.target;

        if (element.classList.contains('start')) {
            clock.classList.remove('stopped', 'restarted');
            clearInterval(timer);
            startClock();
        }

        else if (element.classList.contains('stop')) {
            clock.classList.add('stopped');
            clearInterval(timer);
        }

        else if (element.classList.contains('reset')) {
            clock.classList.add('restarted');
            clearInterval(timer);
            seconds = 0;
            clock.innerHTML = '00:00:00';
        }
    })
}

timerCounter();