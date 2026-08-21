class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const seenMap = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            if (seenMap.has(s[i])) {
                seenMap.set(s[i], seenMap.get(s[i]) + 1);
            } else {
                seenMap.set(s[i], 1);
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (seenMap.get(t[j]) - 1 === 0) {
                seenMap.delete(t[j]);
            } else {
                seenMap.set(t[j], seenMap.get(t[j]) - 1);
            }
        }

        console.log(seenMap)

        return seenMap.size === 0;
    }
}
