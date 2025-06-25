<script lang="ts">
    import { timer, timers, running, start, stop } from "$lib/stores/timer";
    import { onMount } from "svelte";

    onMount(() => timer.set(timers[0]));
</script>

<div
    class="max-w-xl mx-auto px-8 py-4 rounded-b-2xl bg-red flex justify-between"
>
    <div class="">
        <span class="text-2xl font-bold tracking-tight">hackadoro</span>
    </div>
</div>

<div class="px-8 py-20 max-w-2xl mx-auto mt-8 text-center">
    <!-- <div class="flex gap-2 w-full justify-center mb-12">
        {#each timers as item}
            <button
                class={`px-4 py-2 rounded-2xl font-bold text-white/75 duration-75 border-2 border-black ${item.color} ${item == $timer && running ? "[box-shadow:0_0_0_rgba(0,0,0,1)] translate-y-2" : "opacity-50 [box-shadow:0_8px_0_rgba(0,0,0,1)]"}`}
                onclick={() => timer.set(item)}
            >
                {item.name}
            </button>
        {/each}
    </div> -->

    <span class="font-mono font-bold text-9xl [text-shadow:0_8px_0_black]">
        {$timer.time}
    </span>

    <div class="flex gap-4 w-full justify-center mt-12">
        <button
            onclick={start}
            class={`cursor-pointer duration-75 bg-red px-4 py-2 text-2xl font-bold rounded-2xl tracking-tight border-2 border-black hover:translate-y-0.5 active:translate-y-2 [box-shadow:0_8px_0_rgba(0,0,0,1)] hover:[box-shadow:0_6px_0_rgba(0,0,0,1)] active:[box-shadow:0_0_0_rgba(0,0,0,1)]`}
        >
            start
        </button>
        <button
            class={`cursor-pointer duration-75 bg-red px-4 py-2 text-2xl font-bold rounded-2xl tracking-tight border-2 border-black hover:translate-y-0.5 active:translate-y-2 [box-shadow:0_8px_0_rgba(0,0,0,1)] hover:[box-shadow:0_6px_0_rgba(0,0,0,1)] active:[box-shadow:0_0_0_rgba(0,0,0,1)]`}
        >
            pause
        </button>
        <button
            onclick={stop}
            class={`cursor-pointer duration-75 bg-red px-4 py-2 text-2xl font-bold rounded-2xl tracking-tight border-2 border-black hover:translate-y-0.5 active:translate-y-2 [box-shadow:0_8px_0_rgba(0,0,0,1)] hover:[box-shadow:0_6px_0_rgba(0,0,0,1)] active:[box-shadow:0_0_0_rgba(0,0,0,1)]`}
        >
            stop
        </button>
    </div>
</div>
