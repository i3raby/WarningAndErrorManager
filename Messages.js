exports.MessagesCollection = new Map();

const Messages = {
    X: 'X Application',
    W: a => `Welcome ${a}`
}

for(const [Key, Message] of Object.entries(Messages)) this.MessagesCollection.set(Key, typeof Message === 'function' ? Message : String(Message))