<script lang="ts">
    export let value: string[];
    export let options: Array<{ value: string; label: string; show: boolean }>;
</script>

<style>
    div {
        margin-bottom: 8px;
    }
    label {
        display: block;
        width: 100%;
    }
    input {
        margin-left: 0px;
        width: unset;
    }
</style>

<div>
    {#each options as opt}
        {#if opt.show}
            <label>
                <input type="checkbox" bind:group={value} value={opt.value} />
                {opt.label}
            </label>
        {/if}
    {/each}
</div>