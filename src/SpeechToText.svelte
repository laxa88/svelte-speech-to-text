<script>
  const speechRecognition = window.webkitSpeechRecognition
  const recognition = new speechRecognition()

  let content = ''
  let started = false
  let instruction = 'Press the Start button'

  // recognition.lang = ['ja-JP']
  recognition.lang = 'ja-JP'
  recognition.continuous = true

  recognition.onstart = () => {
    instruction = 'Voice recognition started'
  }

  recognition.onspeechend = () => {
    recognition.stop()
    instruction = 'Voice recognition stopped'
  }

  recognition.onerror = err => {
    instruction = 'Try Again'
  }

  recognition.onresult = event => {
    var current = event.resultIndex
    var transcript = event.results[current][0].transcript
    content += `${transcript}\n`
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
</script>

<h1>Speech to Text</h1>

<textarea value={content} on:change={handleChangeText} />

{#if started}
  <button on:click={handleClickEnd}>End</button>
{:else}
  <button on:click={handleClickStart}>Start</button>
{/if}

<p>{instruction}</p>
