export function formatCost(cost) {
    let cents;

    if (typeof cost === 'string') {
        cents = parseFloat(cost?.replace('$', ''));
    } else {
        cents = cost;
    }

    if (cents) {
        cents = Math.round(cents * 100);
    } else {
        cents = 0;
    }
    return cents;
}

