import { writable } from "svelte/store";

let interval: ReturnType<typeof setInterval>;
// const time = 30 * 1000; // 30 seconds

export const countdown = writable(0);
export const running = writable(false);

export function start(at: number) {
    countdown.set(at);

    running.update((isRunning) => {
        if (isRunning) return true; // already running so do nothing

        interval = setInterval(() => {
            countdown.update((value) => {
                if (value <= 0) {
                    stop(); // auto stop at 0
                    return 0;
                }
                return value - 1000;
            });
        }, 1000);

        return true;
    });
}

export function stop() {
    clearInterval(interval);
    running.set(false);
}

export function reset(to: number) {
    stop();
    countdown.set(to);
}
