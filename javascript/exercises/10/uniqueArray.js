function uniqueArray(array) {
    return array.filter((element, id) => array.indexOf(element) === id);
}

export default uniqueArray;