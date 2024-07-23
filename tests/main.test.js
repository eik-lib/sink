import tap from 'tap';
import Sink from '../lib/main.js';

tap.test('Sink() - Object type', (t) => {
    const obj = new Sink();
    t.equal(
        Object.prototype.toString.call(obj),
        '[object Sink]',
        'should be Sink',
    );
    t.end();
});

tap.test('Sink() - Call .write() method', (t) => {
    const obj = new Sink();
    t.throws(
        () => {
            obj.write('', '');
        },
        /.write method is not implemented/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .read() method', (t) => {
    const obj = new Sink();
    t.throws(
        () => {
            obj.read('');
        },
        /.read method is not implemented/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .delete() method', (t) => {
    const obj = new Sink();
    t.throws(
        () => {
            obj.delete('');
        },
        /.delete method is not implemented/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .exist() method', (t) => {
    const obj = new Sink();
    t.throws(
        () => {
            obj.exist('');
        },
        /.exist method is not implemented/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .metrics getter', (t) => {
    const obj = new Sink();
    t.throws(
        () => {
            const metric = obj.metrics; // eslint-disable-line no-unused-vars
        },
        /.metrics getter is not implemented/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .validateFilePath() with legal value', (t) => {
    t.equal(Sink.validateFilePath('foo'), 'foo', 'Should return value');
    t.end();
});

tap.test('Sink() - Call .validateFilePath() with illegal values', (t) => {
    t.throws(
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
        /Argument must be a String/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .validateFilePath() with empty String value', (t) => {
    t.throws(
        () => {
            Sink.validateFilePath('');
        },
        /Argument can not be an empty String/,
        'Should throw',
    );
    t.end();
});

tap.test('Sink() - Call .validateContentType() with legal value', (t) => {
    t.equal(Sink.validateContentType('foo'), 'foo', 'Should return value');
    t.end();
});

tap.test('Sink() - Call .validateContentType() with illegal values', (t) => {
    t.throws(
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
        /Argument must be a String/,
        'Should throw',
    );
    t.end();
});

tap.test(
    'Sink() - Call .validateContentType() with empty String value',
    (t) => {
        t.throws(
            () => {
                Sink.validateContentType('');
            },
            /Argument can not be an empty String/,
            'Should throw',
        );
        t.end();
    },
);
