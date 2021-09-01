/**
 * Create for the sole purpose of converting the
 * buffered message being sent to client back to string format
 * for easy readability
 */
class BufferConverterToString {
  constructor() {}

  convertToJSON(bufferData) {
    return bufferData.toString("utf-8");
  }
}

module.exports = BufferConverterToString;
