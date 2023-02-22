<script>
    /** Open ai - code Translate function **/
    let text;
    let output;
    import { Configuration, OpenAIApi } from 'openai';

    const configuration = new Configuration({
        apiKey: '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'
    });
    const openai = new OpenAIApi(configuration);
    const completion = async () => {
        output = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: "#Javascript to Python:\n Javascript:\n"+text+"\nPython:\n",
            max_tokens: 100,
            temperature: 0.0,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['\n'],
        });
        output = output.data.choices[0].text;
    };

    /** src **/
    import js from '$lib/images/javascript-icon.png';
    import py from '$lib/images/python-icon.png';
</script>

<!-- Page Header -->
<header class="bg-info bg-gradient text-white p-lg-5">
    <div class="container px-4 text-center">
        <h1 class="fw-bolder">ConvCoder</h1>
        <p class="lead"> Convert Javascript into Python </p>
        <img src={js} width="60" height="60" alt="">
        <img src={py} width="60" height="60" alt="">
    </div>
</header><br><br>

<!-- Content -->
<section id="ConvCoder">
    <div class="container px-4">
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
                <!-- input Javascript -->
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Javascript</span>
                    <input bind:value={text} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                </div><br>
                <!-- button to submit ( Convert ) -->
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button" on:click={completion}> Convert </button>
                </div><br>
                <h3> Translate to Python</h3>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> Python </span>
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

<!-- 질문을 표시-->
<!-- {#if text}
    {text}
{/if} -->
<!-- <br /> -->
<!-- {#if output}
    {output}
{/if} -->