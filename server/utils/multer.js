require('dotenv').config();

const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

const upload = multer(
  {
    storage: multerS3({
      s3: s3,
      bucket: process.env.S3_BUCKET_NAME,
      acl: 'public-read',
      key: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname.split('.').pop()); // 이름 설정
      },
    }),
  },
  'NONE'
);

module.exports = upload;
