export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "us-east-2",
    BUCKET: "slappy-notes-app-upload"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://giz0i4zzs3.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_bunZGQtjC",
    APP_CLIENT_ID: "6lhml3k7spgkf97vnp811k7lnl",
    IDENTITY_POOL_ID: "us-east-2:dfce42cf-4a34-4b2b-92a5-4856a4b2f18a"
  }
};