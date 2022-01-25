<script>
  import { createEventDispatcher } from 'svelte'

  export let addedToGlossary = false
  export let theme

  const dispatch = createEventDispatcher()
</script>

<div
  on:click={() => dispatch('addToGlossary')}
  class="o-tr_popup__glossary {theme}"
>
  {#if addedToGlossary === true}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        class="added"
        d="M16 2H8C6.3 2 5 3.3 5 5V21C5 21.2 5 21.3 5.1 21.5C5.4 22 6 22.1 6.5 21.9L12 18.7L17.5 21.9C17.7 22 17.8 22 18 22C18.6 22 19 21.6 19 21V5C19 3.3 17.7 2 16 2Z"
        fill="black"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.5029 17.8357L12 17.5431L11.4971 17.8357L6.0805 20.9871C6.04865 20.9951 6.02115 20.9971 6 20.9964V5C6 3.85228 6.85228 3 8 3H16C17.1477 3 18 3.85228 18 5V21C17.9757 21 17.9576 21 17.9414 20.9999L12.5029 17.8357Z"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  {/if}
</div>

<style>
  .o-tr_popup__glossary {
    cursor: pointer;
  }
  .dark.o-tr_popup__glossary path {
    stroke: white;
  }
  .dark.o-tr_popup__glossary .added {
    fill: white;
  }
</style>
