export default ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 465),
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
    'strapi-v5-plugin-populate-deep': {
      config: {
        defaultDepth: 5,
      },
    },
  })