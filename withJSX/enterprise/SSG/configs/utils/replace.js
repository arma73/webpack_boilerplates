exports.convertObjectValuesTOJSON = obj => {
    const init = {};
    Object.keys(obj).forEach(item => init[item] = JSON.stringify(obj[item]));
    return init;
};
