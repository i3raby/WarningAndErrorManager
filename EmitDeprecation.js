const Messages = {
    X: "X Application",
    Y: "Y Module",
    Z: "Z Feature",
};

const UnknownCodeMessage = 'Unknown warning message';

exports.PrintEmitWarning = (Key, WarningType = 'Warning') => process.emitWarning(Messages[Key] || UnknownCodeMessage, WarningType);
exports.PrintEmitDeprecation = (Key) => exports.PrintEmitWarning(Key, 'DeprecationWarning');
exports.PrintEmitExperimental = (Key) => exports.PrintEmitWarning(Key, 'ExperimentalWarning');