import {
    GetObjectCommand,
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({ region: "ap-south-1" });
const BUCKET = process.env.BUCKET;

export const uploadImage = async ({ imageType }: { imageType: string }) => {
    const key = ``;
    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        ContentType: imageType,
    });

    try {
        await s3.send(command);
        return { key };
    } catch (error) {
        return { error };
    }
};

export const uploadVideo = async ({ vidoType }: { vidoType: string }) => {
    const key = ``;
    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        ContentType: vidoType,
    });

    try {
        await s3.send(command);
        return { key };
    } catch (error) {
        return { error };
    }
};
