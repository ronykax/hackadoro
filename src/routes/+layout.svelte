<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<main class="tracking-tight">
    {@render children()}
</main>
