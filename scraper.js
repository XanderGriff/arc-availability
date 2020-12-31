'use strict';

const request = require('axios');
const { extractDataFromArcPage } = require('./utils/extractDataFromArcPage');

const L2_CONDITIONING_ZONE = 'https://getactive.gogaelsgo.com/Program/GetProgramDetails?courseId=1125d7e6-c0f9-4dbd-b490-ebb717a0f104&semesterId=6e595780-a1ad-40a0-9c3f-92d8e303bcd3';

module.exports.getArcData = async event => {
  const page = await request(L2_CONDITIONING_ZONE);
  const availabilities = extractDataFromArcPage(page.data);
  console.log(availabilities);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
