function randomStr(len) {
    var result = '';
    for (var i = 0; i < len; i++) {
        var r = Math.floor(Math.random() * 93);
        console.log('---->', r);
        result += String.fromCharCode('!'.charCodeAt(0) + r);
    }

    return result;
}

