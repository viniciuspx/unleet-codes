/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let strLCP  = '';
    let LCPSize = 0;
  
    const findMinLength = (strs) => {
        var minLength = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            if (str.length < minLength){
                minLength = str.length;
            }
        }
        return minLength;
    }

    const lcp = (minLength, strs) => {
        let result = minLength;

        for (let i = 0; i < strs.length; i++) {
            const str     = strs[i];
            const nextStr = strs[i+1] ? strs[i+1] : strs[i];
            
            for (let j = 0; j < minLength; j++) {
                if (str[j] != nextStr[j]){
                    result = j < result ? j : result;
                    break;
                }
            }
        }

        return result;
    }

    LCPSize = lcp(findMinLength(strs),strs);
    strLCP  = strs[0].slice(0,LCPSize);

    return strLCP;
};


const result = longestCommonPrefix(["reflower","flow","flight"]);
console.log(result);