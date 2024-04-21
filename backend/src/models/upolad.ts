import z from "zod";

const uploadBody = z.object({
    key: z.string(),
    Type: z.string(),
    file: z.any(),
});
type UploadType = z.infer<typeof uploadBody>;
export { UploadType, uploadBody };
