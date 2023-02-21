<script>
    let text;
    let output;
    import { Configuration, OpenAIApi } from 'openai';

    const configuration = new Configuration({
        apiKey: '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'
    });
    const openai = new OpenAIApi(configuration);
    const completion = async () => {
        output = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: text,
            max_tokens: 100,
            temperature: 0.0,
        });
        output = output.data.choices[0].text;
    };
</script>

<input bind:value={text} /> <button on:click={completion}>Submit</button>

<h3>Answer for question! </h3>
<!-- 질문을 표시-->
<!-- {#if text}
    {text}
{/if} -->
<br />
{#if output}
    {output}
{/if}
