        let currentLight = 0; //
        const lights = [document.getElementById('red'), document.getElementById('pink'), document.getElementById('yellow'), document.getElementById('red')];

        function changeLight() {

            lights.forEach(light => light.style.opacity = '0.3');

            lights[currentLight].style.opacity = '1';

            currentLight = (currentLight + 1) % lights.length;

            const nextChangeTime = Math.floor(Math.random() * 3000) + 6000;
            setTimeout(changeLight, nextChangeTime);
        }

        changeLight();