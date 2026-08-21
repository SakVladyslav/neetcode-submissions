class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const seenMap = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            seenMap.set(s[i], (seenMap.get(s[i]) ?? 0) + 1);
        }

        for (let j = 0; j < t.length; j++) {
            const charCount = seenMap.get(t[j]);
            if (!seenMap.has(t[j])) {
                return false;
            }

            charCount - 1 === 0 ? seenMap.delete(t[j]) : seenMap.set(t[j], charCount - 1);
        }
        return true;
    }
}
