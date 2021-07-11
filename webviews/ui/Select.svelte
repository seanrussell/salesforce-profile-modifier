<script lang="ts">
    import Label from "./Label.svelte";
    export let required = false;
    export let name: string;
    export let label = "";
    export let value: string;
    export let many: string;
    export let options: Array<{ value: string; label: string }>;
</script>
  
<style>
    select {
      background: var(--vscode-input-background);
      color: var(--vscode-input-foreground);
      padding: 3px;
      display: block;
      width: 100%;
      margin-bottom: 5px;
    }
    select:hover {
      cursor: pointer;
    }
</style>
  
<Label {name} {label}>
  {#if many === "true"}
    <select {required} {name} id={name} bind:value multiple>
      {#each options as o}
        <option value={o.value}>{o.label}</option>
      {/each}
    </select>
  {:else}
    <select {required} {name} id={name} bind:value>
      {#each options as o}
        <option value={o.value}>{o.label}</option>
      {/each}
    </select>
  {/if}
</Label>