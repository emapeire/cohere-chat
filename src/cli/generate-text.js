import { CohereClient } from 'cohere-ai'
import { COHERE_API_KEY } from '../config/index.js'

const cohere = new CohereClient({
  token: COHERE_API_KEY
})

const response = await cohere.generate({
  model: 'command',
  prompt: `Create a list of five insightful interview questions specifically tailored for a senior software engineer,
    ensuring the total character count does not exceed 500.`,
  maxTokens: 500,
  temperature: 1.2,
  k: 0,
  stopSequences: [],
  returnLikelihoods: 'NONE'
})

console.log(`Prediction: ${response.generations[0].text}`)
