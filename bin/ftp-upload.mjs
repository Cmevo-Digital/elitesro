import * as ftp from "basic-ftp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../out");
const remoteDir = "/";

const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error(
    "Error: FTP_HOST, FTP_USER, and FTP_PASSWORD must be set in .env",
  );
  process.exit(1);
}

const client = new ftp.Client();
client.ftp.verbose = true;

try {
  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASSWORD,
  });
  await client.uploadFromDir(outDir, remoteDir);
  console.log("==> Upload complete.");
} finally {
  client.close();
}
