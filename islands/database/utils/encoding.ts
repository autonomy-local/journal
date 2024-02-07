// https://googlechrome.github.io/samples/encoding-api/
// https://ja.javascript.info/text-decoder
// https://caniuse.com/textencoder
// https://hakuhin.jp/js/encoding.html
// https://www.npmjs.com/package/@types/text-encoding-utf-8

// テキストエンコーディングAPIを利用したエンコーディング関連のユーティリティ
// https://developer.mozilla.org/ja/docs/Web/API/Encoding_API
// Can I use:https://caniuse.com/textencoder
// TypeScript Type Definition:

export const encoder = (text: string): Uint8Array => {
  const encoder = new TextEncoder();
  return encoder.encode(text);
};

export type DecodeType = "utf-8" | "shift-jis";
export const decoder = (buffer: Uint8Array, decodeType: DecodeType): string => {
  const decoder = new TextDecoder(decodeType);
  return decoder.decode(buffer);
};
