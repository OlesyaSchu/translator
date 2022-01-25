<script>
  let isOpen = false
  export let selected
  export let values
</script>

<span class="dropdown">
  <span
    on:click={() => {
      isOpen = !isOpen
    }}
    class="dropdown__button"
  >
    <p>
      {selected}
    </p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#6C93F9"
        stroke-opacity="0.96"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
  {#if isOpen}
    <div class="dropdown__list">
      {#each values as value}
        <p>{value}</p>
      {/each}
    </div>
  {/if}
</span>

<style>
  p {
    margin: 0;
  }
  .dropdown__button {
    position: relative;
    border: 1px solid rgba(108, 147, 249, 0.96);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dropdown__list {
    position: absolute;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    background: white;
    padding: 6px 12px;
  }
</style>
