<script>
    import openai from '../openai.js';
    const myComponent = async () => { const response = await
    openai.get('/v1/agents/default/environments/my-env/observations/action'); console.log(response); 
    }; 
</script>