class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map<string, string[]>();

        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (anagramMap.has(sortedStr)) {
                const getAnagramValue = anagramMap.get(sortedStr);
                anagramMap.set(sortedStr, [...getAnagramValue, str]);
            } else {
                anagramMap.set(sortedStr, [str]);
            }
        }

        return Array.from(anagramMap.values());
    }
}
