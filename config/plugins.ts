export default ({ env }) => {
  const config = {
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env.int('SMTP_PORT', 465),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          tls: {
            minVersion: 'TLSv1.2',
          },
        },
        settings: {
          defaultFrom: 'sk@growthlabm.com',
          defaultReplyTo: 'hello@example.com',
        },
      },
    },

    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
            },
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET_NAME'),
              ACL: 'public-read',
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    'strapi-v5-plugin-populate-deep': {
      config: {
        defaultDepth: 5,
      },
    },
  }
  return config
}
