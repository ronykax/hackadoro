<script lang="ts">
    import { formatTime } from "$lib";
    import { countdown, start, stop, reset, running } from "$lib/stores/timer";
    import { onMount } from "svelte";
    import Button from "../components/button.svelte";
    import { blur, fade } from "svelte/transition";

    let count = $state(0);
    onMount(() => (count = 5 * 60 * 1000));
</script>

<div
    class="max-w-xl mx-auto px-8 py-4 rounded-b-2xl bg-red-500 flex justify-between"
>
    <div class="">
        <span class="text-2xl font-bold">hackadoro</span>
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

    <span class="font-bold text-8xl [text-shadow:0_8px_0_black]">
        {#if running}
            <!-- {#key $countdown}
            {/key} -->
            <span transition:fade>{formatTime($countdown)}</span>
        {:else}
            {formatTime(count)}
        {/if}
    </span>

    <div class="flex gap-4 w-full justify-center mt-12">
        <Button class="bg-green-600" onclick={() => start(count)}>start</Button>
        <Button class="bg-red-500" onclick={stop}>stop</Button>
        <Button class="bg-gray-600" onclick={() => reset(count)}>reset</Button>
    </div>

    <!-- <button class="cursor-pointer" onclick={() => (count += 5 * 60 * 1000)}
        >plus</button
    >
    <button class="cursor-pointer">minus</button> -->
</div>
