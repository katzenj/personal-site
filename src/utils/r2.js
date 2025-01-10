import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();

// Initialize R2 client
const R2_CLIENT = new S3Client({
  region: "auto",
  endpoint: process.env.CLOUDFLARE_R2_URL,
  credentials: {
    accessKeyId: process.env.PERSONAL_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.PERSONAL_R2_SECRET_KEY,
  },
});

export const downloadFromR2 = async () => {
  const command = new GetObjectCommand({
    Bucket: "personal-site",
    Key: "books.json",
  });

  try {
    const response = await R2_CLIENT.send(command);
    const bodyString = await response.Body.transformToString();
    const jsonData = JSON.parse(bodyString);
    return jsonData;
  } catch (error) {
    console.error("Download error:", error);
    throw error;
  }
};
