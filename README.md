## Error Handling and Warning Utilities

This repository provides a set of utilities for handling errors and warnings in a Node.js application. It includes custom error types and functions for emitting warnings with customizable messages.

### Features
- Custom Error Types: Extend built-in error types `Error`, `TypeError`, `RangeError` with additional functionality.

- Warning Emission: Functions to emit deprecation and experimental warnings with predefined or custom messages.

## Installation
Clone the repository and install the dependencies:

```sh
git clone https://github.com/i3raby/WarningAndErrorManager
cd WarningAndErrorManager
```

## Usage

### Error Handling

The `Create` module defines custom error types and provides functionality for throwing errors with specific messages.

```js
const { Error, TypeError, RangeError, ErrorTypes } = require('./Create');

const ErrorType = ErrorTypes.Error;

if (ErrorType === ErrorTypes.Error) throw new Error('W', 'Muhammed Bin Al-Arabi');
else if (ErrorType === ErrorTypes.RangeError) throw new RangeError('W', 'Muhammed Bin Al-Arabi');
else if (ErrorType === ErrorTypes.TypeError) throw new TypeError('W', 'Muhammed Bin Al-Arabi');
else console.log('\x1b[31mInvalid Type Error: The provided error type does not match any known types.\x1b[0m');
```

### Warning Emission

The `EmitDeprecation` module provides functions to emit various types of warnings.

```js
const { PrintEmitDeprecation, PrintEmitExperimental, PrintEmitWarning } = require('./EmitDeprecation');

PrintEmitDeprecation('X'); // Emits a deprecation warning
PrintEmitExperimental('X'); // Emits an experimental warning
PrintEmitWarning('X'); // Emits a custom warning
```

### ErrorTypes
An enumeration-like object defining different error types used in the application. (`Error`, `TypeError`, `RangeError`)

## Functions

## `PrintEmitDeprecation(Key: string)`
- Emits a deprecation warning with a message associated with the provided key.

## `PrintEmitExperimental(Key: string)`
- Emits an experimental warning with a message associated with the provided key.

## `PrintEmitWarning(Key: string, WarningType: string)`
- Emits a general warning with a message associated with the provided key.

<br>

# Contributing

Contributions are welcome! Please submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.
