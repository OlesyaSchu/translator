<script>
  import { createEventDispatcher } from 'svelte'
  import Checkbox from '../library/Checkbox.svelte'

  export let word = { meaning: '', checked: false, item: '' }
  export let type = 'form'

  const dispatch = createEventDispatcher()
</script>

<div on:click={() => dispatch('check', word)} class="o-tr_popup__worditem">
  {#if type === 'form'}
    <Checkbox checked={word.checked} />
    <p>{word.meaning}</p>
  {/if}
  {#if type === 'glossary'}
    <p>{word.item}</p>
  {/if}
</div>

<style>
  .o-tr_popup__worditem {
    display: flex;
  }
  .o-tr_popup__worditem p {
    margin: 0;
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>
