const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = crypto.createHash("sha256").update("hard-coded-key").digest();

const iv = crypto.randomBytes(16);

exports.encrypt = function (text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  // return {
  //   iv: iv.toString("hex"),
  //   content: encrypted,
  // };
  return encrypted;
};
