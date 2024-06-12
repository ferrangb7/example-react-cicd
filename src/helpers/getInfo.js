
export const getInfo = (object) => {
    if (object) {
        console.log(object);
        console.log(Object.values(object));
        return Object.values(object)
        .map(e => e.name ? e.name : e).join(", ")
    } else {
        return 'none'
    }
}
