function createIdGenerator(initialId) {
    let lastGeneratedId = initialId;

    return function () {
        return lastGeneratedId += 1;
    };
}

export {createIdGenerator};