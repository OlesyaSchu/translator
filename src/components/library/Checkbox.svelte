<script>
  import { createEventDispatcher } from 'svelte'

  export let checked = false

  const dispatch = createEventDispatcher()
</script>

<div
  on:click={() => {
    checked = !checked
  }}
  class="o-tr_popup__checkbox"
>
  {#if checked}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect width="16" height="16" rx="2" fill="#6C93F9" fill-opacity="0.96" />
      <path
        d="M4 8.66667L6.36842 11L13 4"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.8333 0.5H2.16667C1.24619 0.5 0.5 1.24619 0.5 2.16667V13.8333C0.5 14.7538 1.24619 15.5 2.16667 15.5H13.8333C14.7538 15.5 15.5 14.7538 15.5 13.8333V2.16667C15.5 1.24619 14.7538 0.5 13.8333 0.5Z"
        fill="inherit"
        stroke="#C2C2D6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  {/if}
</div>

<style>
  .o-tr_popup__checkbox {
    cursor: pointer;
  }
  .o-tr_popup__worditem .o-tr_popup__checkbox {
    padding-top: 4px;
  }
</style>
