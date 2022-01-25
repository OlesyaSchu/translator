import { levels, words } from './wordLevels.js'

const userLevel = 'b2'

export default function () {
  let content
  document.addEventListener('DOMContentLoaded', function (event) {
    content = prepareContent()
    if (isEnglish()) {
      defineLevel()
      sortByLevel()
      loadTranslations()
    } else {
      content = []
    }
    console.log(content)
  })

  const prepareContent = () => {
    let content = document.querySelector('body').innerText.toLowerCase()
    content = content.replace(/\n/g, '')
    content = content.replace(/[-,.()\[\]—!?&%#*~:\d]/g, '')
    content = content.split(' ')
    content = [...new Set(content)]
    return content
  }

  const isEnglish = async () => {
    let lang
    const G_API =
      'https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex&client=gtx&hl=en&sl=auto&tl=ru&q='
    let str =
      content.length > 30
        ? [
            ...content.slice(0, 9),
            ...content.slice(content.length / 2 - 5, content.length / 2 + 5),
            ...content.slice(content.length - 10, content.length - 1),
          ]
        : content
    str = str.join(' ')

    await fetch(G_API + str).then(async function (response) {
      if (response.ok) {
        let json = await response.json()
        lang = json[2]
      }
    })

    return lang === 'en'
  }

  const defineLevel = () => {
    content = content.map((elem) => {
      let position = words.findIndex((word) => elem === word)
      let level = position !== -1 ? levels[position] : 'c2'
      return level + elem
    })
    content.sort().reverse()
  }

  const sortByLevel = () => {
    let position = content.findIndex((elem) => elem.indexOf(userLevel) === 0)
    content = content.splice(0, position)
    content = content.map((elem) => {
      return elem.substring(2, elem.length)
    })
  }

  const loadTranslations = () => {
    content = content.map((elem) => {
      return { word: elem, translation: [] }
    })
  }
}
