import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({ region: "ap-south-1" });
const BUCKET = process.env.BUCKET;

export const getMp3Url = async ({ key }: { key: string }) => {
    const command = new GetObjectCommand({
        Bucket: BUCKET,
        Key: key,
    });
    const url = getSignedUrl(s3, command);
    return url;
};
