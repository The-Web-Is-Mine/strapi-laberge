module.exports = ({ env }) => ({
    "users-permissions": {
        config: {
            jwtSecret: env("JWT_SECRET"),
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
});
