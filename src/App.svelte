<script>
  // import axios from 'axios'
  import Popup from './views/Form.svelte'
  import Glossary from './views/Glossary.svelte'
  import Settings from './views/Settings.svelte'

  const G_API =
    'https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex&client=gtx&hl=en&sl=auto&tl=ru&q='
  let selectedWord
  let popupIsOpen
  let translatedMessage
  let translatedWords
  let glossaryIsOpen
  let settingsIsOpen
  let glossary = []
  $: message = selectedWord ? selectedWord.toString() : ''
  $: selectedWordPosition = selectedWord
    ? selectedWord.getRangeAt(0).getBoundingClientRect()
    : ''
  let translate = () => {
    translatedMessage = 'loading...'
    setTimeout(() => {
      selectedWord = document.getSelection()
      getTranslatedMessage()
      popupIsOpen = !!selectedWord.toString().match(/\S/g)
    })
  }
  let clear = () => {
    setTimeout(() => {
      popupIsOpen = false
    })
  }
  async function getTranslatedMessage() {
    // console.log(G_API + selectedWord.toString())
    await fetch(G_API + selectedWord.toString()).then(async function (
      response,
    ) {
      // console.log(response)
      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json()
        // console.log(json)
        translatedMessage = json[1] ? json[1][0][1] : selectedWord.toString()
        translatedWords = json[1] ? getTranslate(json) : [json[0][0][0]]
        translatedWords = addChecked(translatedWords)
      }
    })
  }

  let getTranslate = (data) => {
    let result = []
    data[1].forEach((elem) => result.push(...elem[1]))
    // console.log(result)
    return result
  }

  let openGlossary = () => {
    setTimeout(() => {
      glossaryIsOpen = true
    })
  }
  let closeGlossary = () => {
    setTimeout(() => {
      glossaryIsOpen = false
    })
  }
  let addToGlossary = (event) => {
    glossary.push(event.detail)
    openGlossary()
  }
  let openSettings = () => {
    setTimeout(() => {
      settingsIsOpen = true
    })
  }
  let closeSettings = () => {
    setTimeout(() => {
      settingsIsOpen = false
    })
  }
  let addChecked = (array) => {
    return array.map((elem) => {
      return { meaning: elem, checked: true }
    })
  }
  let checkWord = (word) => {
    glossary.forEach((elem) => {
      if (elem.meaning === word.meaning) elem.checked = !elem.checked
    })
  }
  let deleteWord = (event) => {
    glossary = glossary.map((elem) => {
      if (elem.meaning !== event.detail.meaning) return elem
    })
    
  }
</script>

{#if popupIsOpen}
  <Popup
    on:closeForm={clear}
    on:addToGlossary={addToGlossary}
    on:openSettings={openSettings}
    on:check={checkWord}
    {message}
    {translatedMessage}
    {selectedWordPosition}
    {translatedWords}
  />
{/if}

{#if glossaryIsOpen}
  <Glossary
    on:closeGlossary={closeGlossary}
    on:deleteWord={deleteWord}
    {glossary}
  />
{/if}

{#if settingsIsOpen}
  <Settings on:closeSettings={closeSettings} />
{/if}

<div
  on:dblclick={translate}
  on:click={() => {
    clear()
    closeGlossary()
  }}
>
  <h1>A re-introduction to JavaScript (JS tutorial)</h1>
  <p>
    Why a re-introduction? Because JavaScript is notorious for being
    misunderstood. It is often derided as being a toy, but beneath its layer of
    deceptive simplicity, powerful language features await. JavaScript is now
    used by an incredible number of high-profile applications, showing that
    deeper knowledge of this technology is an important skill for any web or
    mobile developer.
  </p>
  <p>
    It's useful to start with an overview of the language's history. JavaScript
    was created in 1995 by Brendan Eich while he was an engineer at Netscape.
    JavaScript was first released with Netscape 2 early in 1996. It was
    originally going to be called LiveScript, but it was renamed in an ill-fated
    marketing decision that attempted to capitalize on the popularity of Sun
    Microsystem's Java language — despite the two having very little in common.
    This has been a source of confusion ever since. Several months later,
    Microsoft released JScript with Internet Explorer 3. It was a
    mostly-compatible JavaScript work-alike.
  </p>
  <p>
    Several months after that, Netscape submitted JavaScript to Ecma
    International, a European standards organization, which resulted in the
    first edition of the ECMAScript standard that year. The standard received a
    significant update as ECMAScript edition 3 in 1999, and it has stayed pretty
    much stable ever since. The fourth edition was abandoned, due to political
    differences concerning language complexity. Many parts of the fourth edition
    formed the basis for ECMAScript edition 5, published in December of 2009,
    and for the 6th major edition of the standard, published in June of 2015.
  </p>
  <p>
    Unlike most programming languages, the JavaScript language has no concept of
    input or output. It is designed to run as a scripting language in a host
    environment, and it is up to the host environment to provide mechanisms for
    communicating with the outside world. The most common host environment is
    the browser, but JavaScript interpreters can also be found in a huge list of
    other places, including Adobe Acrobat, Adobe Photoshop, SVG images, Yahoo's
    Widget engine, server-side environments such as Node.js, NoSQL databases
    like the open source Apache CouchDB, embedded computers, complete desktop
    environments like GNOME (one of the most popular GUIs for GNU/Linux
    operating systems), and others. Overview JavaScript is a multi-paradigm,
    dynamic language with types and operators, standard built-in objects, and
    methods. Its syntax is based on the Java and C languages — many structures
    from those languages apply to JavaScript as well. JavaScript supports
    object-oriented programming with object prototypes, instead of classes (see
    more about prototypical inheritance and ES2015 classes). JavaScript also
    supports functional programming — because they are objects, functions may be
    stored in variables and passed around like any other object. Let's start off
    by looking at the building blocks of any language: the types. JavaScript
    programs manipulate values, and those values all belong to a type.
    JavaScript's types are: Number BigInt String Boolean Function Object Symbol
    (new in ES2015) ... oh, and undefined and null, which are ... slightly odd.
    And Array, which is a special kind of object. And Date and RegExp, which are
    objects that you get for free. And to be technically accurate, functions are
    just a special type of object. So the type diagram looks more like this:
    Number BigInt String Boolean Symbol (new in ES2015) Object Function Array
    Date RegExp null undefined And there are some built-in Error types as well.
    Things are a lot easier if we stick with the first diagram, however, so
    we'll discuss the types listed there for now.
  </p>
</div>
