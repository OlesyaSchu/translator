<script>
  import Theme from '../components/Form/Theme.svelte'
  import GlossaryIcon from '../components/Form/GlossaryIcon.svelte'
  import CrossIcon from '../components/Form/CrossIcon.svelte'
  import WordItem from '../components/Form/WordItem.svelte'
  import SettingsIcon from '../components/Form/SettingsIcon.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let message
  export let translatedMessage = ''
  export let translatedWords = []
  export let selectedWordPosition

  // console.log(translatedWords)

  let theme
  let addedToGlossary = false
  if (localStorage.getItem('otr_theme')) {
    theme = localStorage.getItem('otr_theme')
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    theme = 'dark'
  } else {
    theme = 'white'
  }
  $: popupTheme = 'o-tr_popup_' + theme

  let changeTheme = () => {
    theme = theme === 'white' ? 'dark' : 'white'
    localStorage.setItem('otr_theme', theme)
  }

  let addToGlossary = () => {
    addedToGlossary = !addedToGlossary
    let newWord = { item: message, meanings: [] }
    translatedWords.forEach((elem) => {
      if (elem.checked) newWord.meanings.push(elem)
    })
    console.log(newWord)
    dispatch('addToGlossary', newWord)
  }
</script>

<div
  class="o-tr_popup {popupTheme}"
  style="top: {selectedWordPosition.top +
    selectedWordPosition.height}px; left: {selectedWordPosition.left - 10}px;"
>
  <div class="o-tr_popup__header">
    <div class="buttons">
      <GlossaryIcon
        on:addToGlossary={addToGlossary}
        {addedToGlossary}
        {theme}
      />
      <p>
        {message}
      </p>
    </div>
    <div class="buttons">
      <SettingsIcon on:openSettings={() => dispatch('openSettings')} {theme} />
      <Theme on:changeTheme={changeTheme} {theme} />
      <CrossIcon on:close={() => dispatch('closeForm')} {theme} />
    </div>
  </div>
  {#if translatedWords.length}
    <ul class="o-tr_popup__list">
      {#each translatedWords as word}
        <li>
          <WordItem
            on:check={() => dispatch('check', word)}
            type="form"
            {word}
          />
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
  .o-tr_popup {
    position: absolute;
    padding: 20px;
    padding-bottom: 10px;
    border: 1px solid #eaeaf5;
    box-sizing: border-box;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-width: 250px;
    max-width: 400px;
  }

  .o-tr_popup_white {
    background: #ffffff;
  }
  .o-tr_popup_dark {
    background: #252525;
    color: #fff;
  }

  .o-tr_popup__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .o-tr_popup__header > p {
    margin-right: 10px;
  }
  .o-tr_popup__header .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .o-tr_popup__list {
    list-style: none;
    padding-left: 0;
  }

  .buttons {
    gap: 6px;
  }
</style>
