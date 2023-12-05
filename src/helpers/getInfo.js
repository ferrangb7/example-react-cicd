const getInfo = (object) => {
    if (object) {
        return Object.values(object)
        .map(e => e.name ? e.name : e).join(', ')
    } else {
        return 'none'
    }
    //test
}

module.exports = getInfo;