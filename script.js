import anime from './anime.es.js'

const verses = [
  'Comfort, O _comfort my people_, says your God.',
`_Speak tenderly_ to Jerusalem,
    and cry to her
that _she has served_ her term,
    that her penalty is paid,
that she has received from _the Lord’s hand_
    double for all her sins.`,
`A voice cries out:
“In the wilderness _prepare the way_ of the Lord,
    make straight in the desert a highway for our God.
Every valley shall _be lifted up_,
    and every mountain and hill _be made low_;
the uneven ground shall become level,
    and the rough places a plain.`,
`Then _the glory of_ the Lord shall be revealed,
    and _all people_ shall see it _together_,
    for the mouth of the Lord has spoken.”`,
`A voice says, “_Cry out!_”
    And I said, “_What shall I cry?_”`,
`All people are grass,
    their constancy is like the flower of the field.
_The grass withers, the flower fades_,
    when the breath of the Lord blows upon it;
    surely the people are grass.`,
`The grass withers, the flower fades;
    but _the word of our God will stand forever_.`,
`Get you up to _a high mountain_,
    _O Zion_, herald of good tidings;`,
`lift up your voice with strength,
    _O Jerusalem, herald of good tidings_,
    lift it up, do not fear;
    say to the cities of Judah,
    “_Here is your God!_”`,
`See, the Lord God comes with _might_,
    and his arm rules for him;
his _reward_ is with him,
    and his _recompense_ before him.`,
`He will feed his flock like _a shepherd_;
    he _will gather the lambs in his arms_,
and carry them in his bosom,
    _and gently lead the mother sheep_.`
]

let index = 0

function showVerse () {
  let verse = verses[index]
  console.log(verse)
  verse = `<span class="second">${verse}</span>`
  verse = verse.replace(/_(.+?)_/g, "</span><span class='first'>$1</span><span class='second'>")
  verse = verse.replace(/\n/g, '<br />').replace(/\s\s+/g, spaces => spaces.split('').map(() => '&nbsp;').join(''))
  document.querySelector('.verse').innerHTML = verse
  index = (index + 1) % verses.length

  const animation = anime.timeline()
    .add({
      targets: '.verse .first',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2250,
      delay: (el, i) => 150 * (i + 1)
    })
    .add({
      targets: '.verse .second',
      opacity: [0, 1],
      easing: 'cubicBezier(0.185, 0.735, 0.660, 0.935)',
      duration: 8000,
      delay: 1000
    })
    .add({
      targets: '.verse .first, .verse .second',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    })
  animation.finished.then(showVerse)
}

showVerse()

const colors = [
  '#E3E3FF', '#E2FCE6', '#FCFADE', '#DFF2FD', '#FFEEE2', '#FFDBDB', '#E3E3FF'
]

anime({
  loop: true,
  targets: 'body',
  backgroundColor: colors,
  duration: 60000,
  easing: 'linear'
})
