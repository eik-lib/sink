import { test } from "node:test";
import assert from "node:assert/strict";
import Sink from "../lib/main.js";

const RE_WRITE_NOT_IMPLEMENTED = /.write method is not implemented/;
const RE_READ_NOT_IMPLEMENTED = /.read method is not implemented/;
const RE_DELETE_NOT_IMPLEMENTED = /.delete method is not implemented/;
const RE_EXIST_NOT_IMPLEMENTED = /.exist method is not implemented/;
const RE_METRICS_NOT_IMPLEMENTED = /.metrics getter is not implemented/;
const RE_MUST_BE_STRING = /Argument must be a String/;
const RE_EMPTY_STRING = /Argument can not be an empty String/;

test("Sink() - Object type", () => {
	const obj = new Sink();
	assert.strictEqual(
		Object.prototype.toString.call(obj),
		"[object Sink]",
		"should be Sink",
	);
});

test("Sink() - Call .write() method", () => {
	const obj = new Sink();
	assert.throws(
		() => {
			obj.write("", "");
		},
		RE_WRITE_NOT_IMPLEMENTED,
		"Should throw",
	);
});

test("Sink() - Call .read() method", () => {
	const obj = new Sink();
	assert.throws(
		() => {
			obj.read("");
		},
		RE_READ_NOT_IMPLEMENTED,
		"Should throw",
	);
});

test("Sink() - Call .delete() method", () => {
	const obj = new Sink();
	assert.throws(
		() => {
			obj.delete("");
		},
		RE_DELETE_NOT_IMPLEMENTED,
		"Should throw",
	);
});

test("Sink() - Call .exist() method", () => {
	const obj = new Sink();
	assert.throws(
		() => {
			obj.exist("");
		},
		RE_EXIST_NOT_IMPLEMENTED,
		"Should throw",
	);
});

test("Sink() - Call .metrics getter", () => {
	const obj = new Sink();
	assert.throws(
		() => {
			const metric = obj.metrics; // eslint-disable-line no-unused-vars
		},
		RE_METRICS_NOT_IMPLEMENTED,
		"Should throw",
	);
});

test("Sink() - Call .validateFilePath() with legal value", () => {
	assert.strictEqual(
		Sink.validateFilePath("foo"),
		"foo",
		"Should return value",
	);
});

test("Sink() - Call .validateFilePath() with illegal values", () => {
	assert.throws(
		() => {
			// @ts-expect-error Testing bad input
			Sink.validateFilePath();
			// @ts-expect-error Testing bad input
			Sink.validateFilePath({});
			// @ts-expect-error Testing bad input
			Sink.validateFilePath(300);
			// @ts-expect-error Testing bad input
			Sink.validateFilePath(true);
		},
		RE_MUST_BE_STRING,
		"Should throw",
	);
});

test("Sink() - Call .validateFilePath() with empty String value", () => {
	assert.throws(
		() => {
			Sink.validateFilePath("");
		},
		RE_EMPTY_STRING,
		"Should throw",
	);
});

test("Sink() - Call .validateContentType() with legal value", () => {
	assert.strictEqual(
		Sink.validateContentType("foo"),
		"foo",
		"Should return value",
	);
});

test("Sink() - Call .validateContentType() with illegal values", () => {
	assert.throws(
		() => {
			// @ts-expect-error Testing bad input
			Sink.validateContentType();
			// @ts-expect-error Testing bad input
			Sink.validateContentType({});
			// @ts-expect-error Testing bad input
			Sink.validateContentType(300);
			// @ts-expect-error Testing bad input
			Sink.validateContentType(true);
		},
		RE_MUST_BE_STRING,
		"Should throw",
	);
});

test("Sink() - Call .validateContentType() with empty String value", () => {
	assert.throws(
		() => {
			Sink.validateContentType("");
		},
		RE_EMPTY_STRING,
		"Should throw",
	);
});
