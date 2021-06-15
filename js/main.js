function time(nuo, iki, trukme) {
    for (let i = nuo * 60; i <= iki * 60; i += trukme) {
        const h = Math.floor(i / 60);
        const m = i - h * 60;
        console.log(`${h}:${m < 10 ? '0' + m : m}`);
    }
}

time(8, 11, 45);

