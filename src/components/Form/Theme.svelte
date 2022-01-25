<script>
  import { createEventDispatcher } from "svelte";
  import Sun from "../library/Sun.svelte";
  import Moon from "../library/Moon.svelte";

  export let theme = "dark";

  const dispatch = createEventDispatcher();
</script>

<span on:click={() => dispatch("changeTheme")} class="o-tr_popup__theme">
  {#if theme === "white"}
    <Moon />
  {:else}
    <Sun />
  {/if}
</span>

<style>
  .o-tr_popup__theme {
    cursor: pointer;
    margin: 0;
    padding: 0;
    display: inline;
    height: 24px;
  }
</style>
