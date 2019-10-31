import { assert } from 'chai';
import { compareLists } from 'compare-lists';

/**
 * Compare-Lists 서드파티 라이브러리와 관련된 테스트
 */
describe('A compare-lists lib tests', () => {
    it('A left array when exist item in left array', () => {
        // given
        const left_items = ['a', 'b', 'c'];
        const right_items = ['b', 'c'];
        const expect = [];

        // when
        let actual = [];
        compareLists({
            left: left_items,
            right: right_items,
            compare: (left, right) => left.localeCompare(right),
            onMissingInLeft: (right) => actual.push(right)
        })

        // then
        assert.deepEqual(actual, expect);
    });

    it('A right array when exist item in left array', () => {
        // given
        const left_items = ['a', 'b', 'c'];
        const right_items = ['b', 'c'];
        const expect = ['a'];

        // when
        let actual = [];
        compareLists({
            left: left_items,
            right: right_items,
            compare: (left, right) => left.localeCompare(right),
            onMissingInRight: (left) => actual.push(left)
        })

        // then
        assert.deepEqual(actual, expect);
    });

    it('A left array when exist item in right array', () => {
        // given
        const left_items = ['a', 'b', 'c'];
        const right_items = ['a', 'b', 'c', 'd'];
        const expect = ['d'];

        // when
        let actual = [];
        compareLists({
            left: left_items,
            right: right_items,
            compare: (left, right) => left.localeCompare(right),
            onMissingInLeft: (right) => actual.push(right)
        })

        // then
        assert.deepEqual(actual, expect);
    });

    it('A right array when exist item in right array', () => {
        // given
        const left_items = ['a', 'b', 'c'];
        const right_items = ['a', 'b', 'c', 'd'];
        const expect = [];

        // when
        let actual = [];
        compareLists({
            left: left_items,
            right: right_items,
            compare: (left, right) => left.localeCompare(right),
            onMissingInRight: (left) => actual.push(left)
        })

        // then
        assert.deepEqual(actual, expect);
    });

    /**
     * 둘 다 같을 경우 right_items 기준 반환 값 확인
     */
    it('A exist item in right array', () => {
        // given
        const left_items = ['a', 'b', 'c', 'd'];
        const right_items = ['a', 'b', 'c', 'd'];
        const expect = [];

        // when
        let actual = [];
        compareLists({
            left: left_items,
            right: right_items,
            compare: (left, right) => left.localeCompare(right),
            onMissingInRight: (left) => actual.push(left)
        })

        // then
        assert.deepEqual(actual, expect);
    });
});