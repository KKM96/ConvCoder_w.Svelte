<script>

    /** src **/
    import mainImage from '$lib/images/chat_w_ai.jpg';
    import logo1 from '$lib/images/icons8-svelte.png';
    import logo2 from '$lib/images/icons8-chatgpt.png';
    import js from '$lib/images/javascript-icon.png';
    import py from '$lib/images/python-icon.png';
    import arrow from '$lib/images/arrow-icon.png';
    import qna from '$lib/images/qna-icon.png';
</script>

<!-- Page Header -->
<header class="bg-secondary bg-gradient text-white p-lg-5">
    <div class="container px-4 text-center">
        <h1 class="fw-bolder">SveOpenai</h1>
        <p class="lead">Use Openai with our Page made by svelte! </p>
        <img src={logo1} width="60" height="60" alt="">
        <img src={logo2} width="60" height="60" alt="">
    </div>
</header><br><br>

<!-- Section 1 -->
<section id="ConvCoder">
    <div class="container px-4">
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-9">
                <h3>ConvCoder</h3>
                <p class="lead">Javascript to Python Translate :</p>
                <img src={js} width="60" height="60" alt="">
                <img src={arrow} width="30" height="30" alt="">
                <img src={py} width="60" height="60" alt="">
                <ul>
                    <li> Javascript code를 입력해서 Convert 버튼을 클릭하세요! </li>
                    <li> 입력한 Javascript code를 Python code로 변경하여 알려줍니다! </li>
                    <li> Openai의 code-davinci-002(Translate Programming Language)를 이용한 기능입니다 ! </li>
                </ul>
            </div>
        </div>
    </div>
</section><br>
<!-- Section 2 -->
<section class="bg-light" id="services">
    <div class="container px-4">
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-9"><br><br>
                <h3>QnA</h3>
                <p class="lead">Answer questions based on existing knowledge : </p>
                <img src={qna} width="60" height="60" alt="">
                <ul>
                    <li> 질문을 입력하고 Ask 버튼을 클릭하세요 ! </li>
                    <li> openai가 아는 지식에 한해서 답변을 해줍니다 ! </li>
                    <li> Openai의 text-davinci-003(QnA)를 이용한 기능입니다 !</li>
                    <br>
                </ul>
            </div>
        </div>
    </div>
</section>



