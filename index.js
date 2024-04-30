import Heurist from 'heurist'
 
const heurist = new Heurist({
  apiKey: process.env['HEURIST_API_KEY'], // This is the default and can be omitted
})
 
async function generateImage() {
  const response = await heurist.images.generate({
    model: 'BrainDance',
    prompt: '1girl',
    // below are optional
    neg_prompt: 'worst quality',
    num_iterations: 25,
    guidance_scale: 7.5,
    width: 1024,
    height: 768,
    seed: -1
  })
}

function helloNpm() {
    return "hello NPM"
  }
  
module.exports = helloNpm, generateImage