<script>
  import CrossIcon from '../components/Form/CrossIcon.svelte'
  import SettingItem from '../components/Settings/SettingItem.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let settings = [
    {
      type: 'select',
      message: 'Тема:',
      selected: 'Светлая',
      values: ['Светлая', 'Темная'],
    },
    {
      type: 'select',
      message: 'Уровень знания английского языка:',
      selected: 'A1',
      values: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    },
    {
      type: 'checkbox',
      message: 'Включить предварительный перевод слов',
      selected: true,
    },
    // { type: 'select', message: '', values: '' },
  ]
</script>

<div class="tr_settings">
  <div class="tr_settings__header">
    <p>Настройки:</p>
    <CrossIcon on:close={() => dispatch('closeSettings')} />
  </div>
  {#if settings.length}
    <ul class="tr_settings__list">
      {#each settings as setting}
        <li class="tr_settings__listitem">
          <SettingItem type="settings" {setting} />
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  p {
    margin: 0;
  }

  .tr_settings {
    z-index: 10000;
    background: white;
    position: absolute;
    padding: 10px;
    border: 1px solid #eaeaf5;
    box-sizing: border-box;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-width: 200px;
  }
  .tr_settings__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tr_settings__list {
    list-style: none;
    padding-left: 0;
  }
  .tr_settings__listitem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
