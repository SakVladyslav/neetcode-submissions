class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seenMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const secondNumber = target - nums[i];
            if (seenMap.has(secondNumber)) {
                return [seenMap.get(secondNumber), i];
            }

            seenMap.set(nums[i], i);
        }

        return [];
    }
}
