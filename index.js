// Require Package
import postmanToOpenApi from 'postman-to-openapi'

// Postman Collection Path
const postmanCollection = './sicredi-postman-collection-1.json'
// Output OpenAPI Path
const outputFile = './openapi.yaml'

// Async/await
try {
    const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    // Without save the result in a file
    const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
    console.log(`OpenAPI specs: ${result}`)
} catch (err) {
    console.log(err)
}
