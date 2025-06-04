export default ({ env }) => ({
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: env("SMTP_HOST", "smtp.example.com"),
                port: env.int("SMTP_PORT", 465),
                auth: {
                    user: env("SMTP_USERNAME"),
                    pass: env("SMTP_PASSWORD"),
                },
                tls: {
                    minVersion: "TLSv1.2",
                },
            },
            settings: {
                defaultFrom: "sk@growthlabm.com",
                defaultReplyTo: "hello@example.com",
            },
        },
    },

    upload: {
        config: {
            provider: "aws-s3",
            providerOptions: {
                accessKeyId: env("AWS_ACCESS_KEY_ID"),
                secretAccessKey: env("AWS_ACCESS_SECRET"),
                region: env("AWS_REGION"),
                params: {
                    Bucket: env("AWS_BUCKET"),
                },
            },
            // 👇 log any errors during upload/delete
            actionOptions: {
                upload: {
                    async onError(error) {
                        console.error("❌ S3 Upload Error:", error);
                    },
                },
                delete: {
                    async onError(error) {
                        console.error("❌ S3 Delete Error:", error);
                    },
                },
            },
        },
    },
    "strapi-v5-plugin-populate-deep": {
        config: {
            defaultDepth: 5,
        },
    },
});
