const {
    Error,
    TypeError,
    RangeError,
    ErrorTypes
} = require('./Create');

const ErrorType = 1;

if(ErrorType === ErrorTypes.Error) throw new Error('W', 'Muhammed Bin Al-Arabi');
else if(ErrorType === ErrorTypes.RangeError) throw new RangeError('W', 'Muhammed Bin Al-Arabi');
else if(ErrorType === ErrorTypes.TypeError) throw new TypeError('W', 'Muhammed Bin Al-Arabi');
else console.log('\x1b[31mInvalid Type Error: The provided error type does not match any known types.\x1b[0m')


const { 
    PrintEmitDeprecation,
    PrintEmitExperimental,
    PrintEmitWarning
} = require('./EmitDeprecation');

PrintEmitDeprecation('X');
PrintEmitExperimental('X')
PrintEmitWarning('X')