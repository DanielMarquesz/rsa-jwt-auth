const jwt = require('jsonwebtoken')
const fs = require('fs')

const PUBLIC_KEY = fs.readFileSync('./public.key', (err, data) => {
  return data
})
const PRIVATE_KEY = fs.readFileSync('./private.key', (err, data) => {
  return data
})

// Image this as the login in the system and you have now a jwt
const token = jwt.sign({ user_id: 'danielzinho' }, PRIVATE_KEY, { algorithm: 'RS256' })

console.log('TOKEN: ', token)

// An here will your jwt will be verified at every authentication in your endpoint
const result = jwt.verify(token, PUBLIC_KEY)

const altered_token = ''

console.log(jwt.verify(token, PUBLIC_KEY))
