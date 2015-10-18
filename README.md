# AbstractError [![Build Status](https://travis-ci.org/heXeo/node-abstract-error.svg)](https://travis-ci.org/heXeo/node-abstract-error)

## Description

Provide a sexy way to extends the default javascript Error object.

## Install

`npm install @hexeo/abstract-error`

## Usages

### Define a new error type

#### Simple

```javascript
import AbstractError from '@hexeo/abstract-error';

class MyError extends AbstractError {
  constructor (message) {
    super (message);
  }
}
```

#### With custom properties

```javascript
import AbstractError from '@hexeo/abstract-error';

class MyError extends AbstractError {
  constructor (message) {
    super (message);

    this.code = 500;
    this.reason = 'oups';
  }
}
```

#### With predefined message

```javascript
import AbstractError from '@hexeo/abstract-error';

class MyError extends AbstractError {
  constructor () {
    super ();
  }

  this.message = 'Oups, something went wrong';
}
```

#### With custom constructor parameters

```javascript
import AbstractError from '@hexeo/abstract-error';

class MyError extends AbstractError {
  constructor (message, foo, bar) {
    super (message);

    this.foo = foo;
    this.bar = bar;
  }
}
```

### Throw and catch the error

```javascript
import AbstractError from '@hexeo/abstract-error';

class MyError extends AbstractError {
  constructor () {
    super ();

    this.message = 'Oups, something went wrong.';
    this.code = 500;
    this.reason = 'oups';
  }
}

try {
  throw new MyError();
} catch (error) {
  if (error instanceof MyError) {
    console.log(error.code); // 500
  }
}
```
