<script>
  import { createEventDispatcher } from 'svelte'
  import Checkbox from '../library/Checkbox.svelte'
  import Selector from '../library/Selector.svelte'

  export let setting

  const dispatch = createEventDispatcher()
</script>

<div on:click={() => dispatch('changeTheme')} class="o-tr_popup__worditem">
  {#if setting.type === 'checkbox'} <Checkbox checked="setting.selected" />{/if}
  <p>{setting.message}</p>
  {#if setting.type === 'select'}
    <Selector selected={setting.selected} values={setting.values} />
  {/if}
</div>

<style>
  .o-tr_popup__worditem {
    display: flex;
  }
  .o-tr_popup__worditem p {
    margin: 0;
  }
</style>
