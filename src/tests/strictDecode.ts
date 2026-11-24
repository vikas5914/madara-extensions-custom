// Make the node test runner decode like iOS: invalid UTF-8 gives no string.
export function useStrictUtf8Decoding(): void {
  const strict = new TextDecoder("utf-8", { fatal: true });
  Object.assign(Application, {
    arrayBufferToUTF8String: (buffer: ArrayBuffer) => {
      try {
        return strict.decode(buffer);
      } catch {
        return undefined;
      }
    },
  });
}
