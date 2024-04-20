import z from "zod";

const uploadBody = z.object({
    key:z.string(),
    Type:z.string()
})
type UploadType = z.infer<typeof uploadBody>
export {UploadType,uploadBody}