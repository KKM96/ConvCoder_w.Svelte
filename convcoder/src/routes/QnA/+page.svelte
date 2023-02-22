<script>
    /** Open ai - qna function **/
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
            max_tokens: 300,
            temperature: 0.0,
        });
        output = output.data.choices[0].text;
    };
    /** src **/
        import qna from '$lib/images/qna-icon.png';

</script>

<!-- Page Header -->
<header class="bg-success bg-gradient text-white p-lg-5">
    <div class="container px-4 text-center">
        <h1 class="fw-bolder">QnA</h1>
        <p class="lead"> Ask question to ai </p>
        <img src={qna} width="60" height="60" alt="">
    </div>
</header><br><br>

<!-- Content -->
<section id="ConvCoder">
    <div class="container px-4">
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
                <!-- input Question -->
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Question</span>
                    <input bind:value={text} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                </div><br>
                <!-- button to submit ( ask ) -->
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button" on:click={completion}> Ask </button>
                </div><br>
                <h3> Answer for Question </h3>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Answer </span>
                    <span class="form-control">
                        {#if output}
                            {output}
                        {/if}
                    </span>
                </div><br>
            </div>
        </div>
    </div>
</section><br>


<!-- <input bind:value={text} /> <button on:click={completion}>Submit</button>

<h3>Answer for question! </h3>

{#if text}
    {text}
{/if}
<br />
{#if output}
    {output}
{/if} -->