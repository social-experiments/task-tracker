import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()


export const putData = (tableName, data) => {
  var params = {
      TableName: tableName,
      Item: data
  }

  docClient.put(params, function (err, data) {
      if (err) {
          console.log('Error', err)
      } else {
          console.log('Success', data)
      }
  })
}