<script>
  import CrossIcon from '../components/Form/CrossIcon.svelte'
  import WordItem from '../components/Form/WordItem.svelte'
  import EditIcon from '../components/Glossary/EditIcon.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let glossary = []


</script>

<div class="tr_glossary">
  <div class="tr_glossary__header">
      <p>Словарь:</p>
      <CrossIcon on:close={() => dispatch('closeGlossary')} />
  </div>
  {#if glossary.length}
    <ul class="tr_glossary__list">
      {#each glossary as word}
        <li class="tr_glossary__listitem">
          <WordItem type="glossary" {word} />
          <div class="icons">
            <EditIcon />
            <CrossIcon on:close={() => dispatch('deleteWord', word)} />
          </div>
        </li>
      {/each}
    </ul>
  {/if}
  <!-- <p>
    {#if translatedMessage !== 'loading...'}Перевод:{/if}
    {translatedMessage}
  </p> -->
</div>

<style>
  p {
    margin: 0;
  }

  .tr_glossary {
    z-index: 10000;
    background: white;
    position: absolute;
    border: 1px solid #eaeaf5;
    box-sizing: border-box;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 10px;
    min-width: 250px;
    max-width: 400px;
  }
  .tr_glossary__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tr_glossary__list {
    list-style: none;
    padding-left: 0;
  }
  .tr_glossary__listitem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
