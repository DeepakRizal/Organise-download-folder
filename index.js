import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  documentExtensions,
  applicationExtensions,
  imageExtensions,
  archiveExtensions,
  videoExtensions,
  audioExtensions,
  codeExtensions,
  fontExtensions,
} from "./extensions.js";

const downloadsPath = path.join(os.homedir(), "Downloads");

const files = await fs.readdir(downloadsPath, { withFileTypes: true });

let category = {};

async function copyFile(source, destination) {
  try {
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.copyFile(source, destination);
    await fs.unlink(source); // delete after copy
  } catch (error) {
    console.log("Error", error);
  }
}

for (const file of files) {
  if (file.isFile()) {
    const ext = path.extname(file.name).toLowerCase();

    category[ext] = (category[ext] || 0) + 1;

    const source = path.join(downloadsPath, file.name);
    let destination;

    if (documentExtensions.includes(ext)) {
      destination = path.join("D:\\documents", file.name);
    } else if (applicationExtensions.includes(ext)) {
      destination = path.join("D:\\apps", file.name);
    } else if (imageExtensions.includes(ext)) {
      destination = path.join("D:\\downloaded-images", file.name);
    } else if (archiveExtensions.includes(ext)) {
      destination = path.join("D:\\archives", file.name);
    } else if (videoExtensions.includes(ext)) {
      destination = path.join("D:\\videos", file.name);
    } else if (audioExtensions.includes(ext)) {
      destination = path.join("D:\\music", file.name);
    } else if (codeExtensions.includes(ext)) {
      destination = path.join("D:\\code-files", file.name);
    } else if (fontExtensions.includes(ext)) {
      destination = path.join("D:\\fonts", file.name);
    } else {
      // Catch-all for unknown extensions
      destination = path.join("D:\\others", file.name);
    }

    await copyFile(source, destination);
  }
}

console.log("Completed moving files into categories!");
