<style>
  select {
    width: 600px;
    max-width: 90%;
  }

  textarea {
    width: 600px;
    max-width: 90%;
    height: 300px;
    max-height: 90%;
  }
</style>

<script>
  import locale from 'locale-codes'

  let selected = 'ja-JP' // array works too: ['ja-JP']
  const languages = locale.all.filter(lang => !!lang.location)

  const speechRecognition = window.webkitSpeechRecognition
  const recognition = new speechRecognition()

  let content = ''
  let started = false
  let instruction = 'Press the Start button'

  recognition.lang = selected
  recognition.continuous = true

  recognition.onstart = () => {
    instruction = 'Voice recognition started'
  }

  recognition.onspeechend = () => {
    recognition.stop()
    started = false
    instruction = 'Voice recognition stopped'
  }

  recognition.onerror = err => {
    instruction = 'Try Again'
  }

  recognition.onresult = event => {
    var current = event.resultIndex
    var transcript = event.results[current][0].transcript
    content = `${transcript}\n\n${content}`
  }

  const handleClickStart = () => {
    recognition.start()
    started = true
  }

  const handleClickEnd = () => {
    recognition.stop()
    started = false
  }

  const handleChangeText = () => {
    content = ''
  }

  const handleChangeLanguage = () => {
    console.log('change language: ', selected)
    recognition.stop()
    recognition.lang = selected
  }
</script>

<h1>Speech to Text</h1>

<div>
  <select bind:value={selected} on:change={handleChangeLanguage}>
    {#each languages as lang}
      <option value={lang.tag}>{lang.name} ({lang.location})</option>
    {/each}
  </select>
</div>

<div>
  Selected: {selected}
</div>

<textarea value={content} on:change={handleChangeText} />

<div>
  {#if started}
    <button on:click={handleClickEnd}>End</button>
  {:else}
    <button on:click={handleClickStart}>Start</button>
  {/if}
</div>

<p>{instruction}</p>
