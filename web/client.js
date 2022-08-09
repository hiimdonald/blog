// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'nrfqgkbi', // you can find this in sanity.json
  dataset: 'my-blog', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})