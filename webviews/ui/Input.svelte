<script lang="ts">
    import Label from "./Label.svelte";
    export let name: string;
    export let label = "";
    export let placeholder = "";
    export let value: string | number;
    export let min: number | undefined = undefined;
    export let max: number | undefined = undefined;
    export let required: boolean = false;
    export let type: string = "text";
    export let textArea: boolean | undefined = false;
</script>
  
<style>
    input {
      margin-top: 4px;
    }

  input[type='text'] {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      border: 1px solid #aaa;
      padding: 3px;
  }
</style>
  
<Label {name} {label}>
    {#if textArea}
      <textarea {placeholder} {required} {name} id={name} bind:value />
    {:else}
      <input
        {placeholder}
        {required}
        {name}
        {type}
        {min}
        {max}
        {value}
        id={name}
        on:input={(e) => {
          // @ts-ignore
          value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
        }} />
    {/if}
</Label>