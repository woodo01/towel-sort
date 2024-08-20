module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];

    return matrix.reduce((acc, row, index) => {
        if (index % 2 === 0) {
            // For even index rows, add the row as is
            return acc.concat(row);
        } else {
            // For odd index rows, add the row in reverse order
            return acc.concat(row.reverse());
        }
    }, []);
}
