/**
 * @param {number[][]} points
 * @return {number}
 */

let distance = function (aPoint, bPoint) {
    return Math.pow((aPoint[0] - bPoint[0]), 2) + Math.pow((aPoint[1] - bPoint[1]), 2)
}

var numberOfBoomerangs = function(points) {
    let map
    let dis
    let count = 0
    for (var i = 0; i < points.length; i++) {
        map = new Map()
        for (var j = 0; j < points.length; j++) {
            if (points[i] == points[j]) {
                continue
            }
            dis = distance(points[i], points[j])
            map.set(dis, ~~map.get(dis) + 1)
        }
        for (let value of map.values()) {
            if(value > 1){
                count += value * (value - 1)
            }
        }
    }
    return count
};