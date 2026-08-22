class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequentMap = new Map<number, number>();
        const result = [];

        for (const num of nums) {
            const mapNum = frequentMap.get(num);
            if (mapNum) {
                frequentMap.set(num, mapNum+1);
            } else {
                frequentMap.set(num, 1);
            }
        }

        const sortedArr = Array.from(frequentMap.entries()).sort(([, a], [, b]) => b - a).slice(0, k).map((a) => a[0]);

        return sortedArr;
    }
}
