import 'mocha';
import { expect } from 'chai';

/**
 * 生成一个从1到指定length的数组
 * @param {*} size 
 */
function createArray(length = 10) {
    const array = [];
    for (let i = 1; i <= length; i++) {
        array.push(i);
    }
    return array;
}
export function testBinraySearch(algorithmFun, testName) {
    describe(testName, () => {
        it('数组为空时返回-1', () => {
            expect(algorithmFun(1, [])).to.equal(-1);
        });
        it('查找的值不在数组范围内返回-1', () => {
            expect(algorithmFun(11, createArray(10))).to.equal(-1);
        });

        it('查找的值在数组内第一个，返回0', () => {
            expect(algorithmFun(1, createArray())).to.equal(0);
        });

        it('查找的值在数组内最后一个，数组总共11个元素, 返回10', () => {
            expect(algorithmFun(11, createArray(11))).to.equal(10);
        });

        it('查找的值在数组内，数组只有1个元素, 返回0', () => {
            expect(algorithmFun(1, createArray(1))).to.equal(0);
        });

    });
}
