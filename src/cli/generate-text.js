import { CohereClient } from 'cohere-ai'
import { COHERE_API_KEY } from '../config/index.js'
import ora from 'ora'

let time = 0
const spinner = ora('Generating interview questions...').start()

const cohere = new CohereClient({
  token: COHERE_API_KEY
})

const start = performance.now()
const interval = setInterval(() => {
  time = Math.floor((performance.now() - start) / 1000)
  spinner.text = `Generating interview question on ${time}s...`
})

const response = await cohere.generate({
  model: 'command',
  prompt: `Generate a list of 5 interview questions for a senior software engineer.\n--\n
    Note: The text generated must not exceed 500 characters in length`,
  maxTokens: 500,
  temperature: 1.2,
  k: 0,
  stopSequences: ['--'],
  returnLikelihoods: 'NONE'
})

spinner.succeed(`Generated interview question on ${time}s! 🎉\n`)
clearInterval(interval)

console.log(`👉 ${response.generations[0].text}`)
