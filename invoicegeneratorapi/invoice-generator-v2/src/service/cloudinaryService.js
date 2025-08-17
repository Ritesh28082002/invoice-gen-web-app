import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "invoice_uploads");
    formData.append("cloud_name", "dn1wba9qz");

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dn1wba9qz/image/upload`, // ✅ corrected URL
        formData
    );

    return res.data.secure_url;
};
