const AWS = require("aws-sdk");
const { v4: uuid } = require("uuid");
var s3 = new AWS.S3();

const getSignedUrlInfo = async () => {
  const config = {
    Bucket: process.env.BUCKET_NAME,
    ContentType: "image/png",
    Key: `pokemon/pokemon-app/${uuid()}.png`,
  };

  const uploadUrl = await s3.getSignedUrl("putObject", config);

  return uploadUrl;
};

module.exports = {
  getSignedUrlInfo,
};
