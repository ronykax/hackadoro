import { writable } from "svelte/store";

export interface Timer {
    time: string;
    name: string;
    color: string;
}

export const timers: Timer[] = [
    { time: "05:00", name: "short break", color: "bg-green/25" },
    { time: "15:00", name: "long break", color: "bg-blue/25" },
    { time: "25:00", name: "locked in", color: "bg-red/25" },
];

export const timer = writable<Timer>(timers[0]);
export const running = writable(false);
export const timeLeft = writable(timers[0].time);

let interval: any;

export function start() {
    stop();
    running.set(true);

    const [min, sec] = getTimeParts(timers[0].time);
    let total = min * 60 + sec;

    interval = setInterval(() => {
        total--;
        const m = Math.floor(total / 60).toString().padStart(2, "0");
        const s = (total % 60).toString().padStart(2, "0");
        timeLeft.set(`${m}:${s}`);

        if (total <= 0) stop();
    }, 1000);
}

export function stop() {
    clearInterval(interval);
    running.set(false);
}

function getTimeParts(time: string): [number, number] {
    const [m, s] = time.split(":").map(Number);
    return [m, s];
}
