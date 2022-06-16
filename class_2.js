// 상속 클레스의 인스턴스 생성 과정
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

class ColorRectangle extends Rectangle {
    constructor(width, height, color){
        super(width, height);
        this.color = color;
    }
    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}
const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle);
console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());

// 표준 빌트인 생성자 함수 확장
class MyArray extends Array{
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }
    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray);

console.log(myArray.uniq());
console.log(myArray.average());
