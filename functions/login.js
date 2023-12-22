const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('products') // Replace 'Users' with your actual table name

async function fetchUserFromAirtable(username) {
  try {
    const response = await airtable.read({
      filterByFormula: `{Username} = '${username}'`, // Replace 'Username' with your actual field name
      maxRecords: 1,
    })

    if (response.records && response.records.length > 0) {
      const user = response.records[0].fields
      return {
        id: response.records[0].id,
        username: user.Username, // Replace 'Username' with your actual field name
        passwordHash: user.PasswordHash, // Replace 'PasswordHash' with your actual field name
      }
    }

    return null
  } catch (error) {
    console.error('Error fetching user from Airtable:', error)
    throw error
  }
}
