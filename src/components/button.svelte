<script lang="ts">
    interface Props {
        class: string;
        onclick: () => void;
        children: any;
    }
    let { class: className, onclick, children }: Props = $props();
</script>

<button
    class={`cursor-pointer duration-75 px-4 py-2 text-2xl font-bold rounded-2xl border-2 border-black hover:translate-y-0.5 active:translate-y-2 [box-shadow:0_8px_0_rgba(0,0,0,1)] hover:[box-shadow:0_6px_0_rgba(0,0,0,1)] active:[box-shadow:0_0_0_rgba(0,0,0,1)] ${className}`}
    {onclick}
>
    {@render children()}
</button>
