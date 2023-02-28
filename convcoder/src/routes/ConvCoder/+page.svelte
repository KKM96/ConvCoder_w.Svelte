<script>
    /** Open ai - code Translate function **/
    let text;
    let output;
    let loading = false;
    import { Configuration, OpenAIApi } from 'openai';

    const configuration = new Configuration({
        apiKey: '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'
    });
    const openai = new OpenAIApi(configuration);

    const completion = async () => {
        try {
            // API 호출전에 로딩 UI 표시
            loading =true;

            // OpenAI API 호출
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
            // 데이터 처리
            output = output.data.choices[0].text;
            // API 호출이 완료되면 UI 숨김
            loading = false;  
        } catch (error) {
            // API 호출이 실패하면 UI를 숨김
            loading = false;
            // 오류처리
            console.error(error);
        }
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


<!-- Content 수정본 -->
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
                        {#if loading}
                            <!-- 로딩 UI -->
                            <div class="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div class="spinner-border text-info" role="status" aria-hidden="true"></div>
                            </div>
                        {:else}
                            <!--데이터 출력-->
                            {#if output}
                                {output}
                            {/if}
                        {/if}
                    </span>
                </div><br>
            </div>
        </div>
    </div>
</section><br>
