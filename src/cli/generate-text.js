import { CohereClient } from 'cohere-ai'
import { COHERE_API_KEY } from '../config/index.js'

const cohere = new CohereClient({
  token: COHERE_API_KEY
})

const response = await cohere.generate({
  model: 'command',
  prompt: `This program will generate a list of interview questions for a software engineer.\n--\n
    Do not generate anything more than the 5 questions.\n--\n
    The total must not exceed 500 characters.\n--\n
    Generate a list of 5 interview questions for a senior software engineer.`,
  maxTokens: 500,
  temperature: 1.2,
  k: 0,
  stopSequences: ['--'],
  returnLikelihoods: 'NONE'
})

console.log(`Prediction: ${response.generations[0].text}`)
