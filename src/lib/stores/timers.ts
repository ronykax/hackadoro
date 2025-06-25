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

export function start() {
    running.set(true);
}

export function stop() {
    running.set(false);
}
