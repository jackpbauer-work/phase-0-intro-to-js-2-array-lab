const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
        cats.push(name)
        return cats
       }
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats
}
function appendCat(name) {
    const allcats = [...cats, name];
    return allcats
}
function prependCat(name) {
    const allcats = [name, ...cats];
    return allcats
}
function removeLastCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.pop()
    return copyOfCats
}
function removeFirstCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.shift()
    return copyOfCats
}
