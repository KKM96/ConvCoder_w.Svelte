import { OpenAI } from 'openai';
const openai = new OpenAI('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');
const model = openai.loadModel('my-model.h5');
export default openai;