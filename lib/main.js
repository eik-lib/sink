/* eslint-disable no-unused-vars */
export default class Sink {
	/**
	 * @param {string} filePath Path to the file to be stored.
	 * @param {string} contentType The content type of the file (ex `application/javascript`).
	 * @param {{ traceId?: string }} [options]
	 * @returns {Promise<import("node:stream").Writable>}
	 */
	write(filePath, contentType, options = {}) {
		throw new Error(".write method is not implemented");
	}

	/**
	 * @param {string} filePath
	 * @returns {Promise<import("@eik/common").ReadFile>}
	 */
	read(filePath) {
		throw new Error(".read method is not implemented");
	}

	/**
	 * Writes a buffer directly to the sink without any stream infrastructure.
	 * @param {string} filePath
	 * @param {string} contentType
	 * @param {Buffer} buffer
	 * @param {{ traceId?: string }} [options]
	 * @returns {Promise<void>}
	 */
	writeBuffer(filePath, contentType, buffer, options = {}) {
		throw new Error(".writeBuffer method is not implemented");
	}

	/**
	 * Reads a file from the sink and returns it as a Buffer without any stream infrastructure.
	 * @param {string} filePath
	 * @returns {Promise<Buffer>}
	 */
	readBuffer(filePath) {
		throw new Error(".readBuffer method is not implemented");
	}

	/**
	 * @param {string} filePath
	 * @throws {Error} if the delete operation fails
	 * @returns {Promise<void>}
	 */
	delete(filePath) {
		throw new Error(".delete method is not implemented");
	}

	/**
	 * @param {string} filePath
	 * @throws {Error} if the file does not exist
	 * @returns {Promise<void>}
	 */
	exist(filePath) {
		throw new Error(".exist method is not implemented");
	}

	/**
	 * @returns {import('@metrics/client')}
	 */
	get metrics() {
		throw new Error(".metrics getter is not implemented");
	}

	/**
	 * Validates {@link filePath} and returns it.
	 * @param {string} filePath
	 * @throws {TypeError} if validation fails
	 * @returns {string}
	 */
	static validateFilePath(filePath) {
		if (typeof filePath !== "string")
			throw new TypeError("Argument must be a String");
		if (filePath === "")
			throw new TypeError("Argument can not be an empty String");
		return filePath;
	}

	/**
	 * Validates {@link contentType} and returns it.
	 * @param {string} contentType
	 * @throws {TypeError} if validation fails
	 * @returns {string}
	 */
	static validateContentType(contentType) {
		if (typeof contentType !== "string")
			throw new TypeError("Argument must be a String");
		if (contentType === "")
			throw new TypeError("Argument can not be an empty String");
		return contentType;
	}

	get [Symbol.toStringTag]() {
		return "Sink";
	}
}
