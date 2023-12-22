const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    // Handle POST request
    return await handlePostRequest(event)
  } else if (event.httpMethod === 'GET') {
    // Handle GET request
    return await handleGetRequest(event)
  } else {
    // Handle other HTTP methods or return an error
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    }
  }
}

async function handlePostRequest(event) {
  try {
    const product = JSON.parse(event.body)
    const createdRecord = await airtable.create(product)

    return {
      statusCode: 200,
      body: JSON.stringify(createdRecord),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}

async function handleGetRequest(event) {
  // Your existing code to handle GET request
}
