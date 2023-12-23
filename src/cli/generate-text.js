import { CohereClient } from 'cohere-ai'
import { COHERE_API_KEY } from '../config/index.js'

const cohere = new CohereClient({
  token: COHERE_API_KEY
})

const response = await cohere.generate({
  model: 'command',
  prompt:
    'Generate a list of 5 interview questions for a senior software engineer.',
  maxTokens: 280,
  temperature: 1.2,
  k: 0,
  stopSequences: [],
  returnLikelihoods: 'NONE'
})

console.log(response.generations[0].text)
