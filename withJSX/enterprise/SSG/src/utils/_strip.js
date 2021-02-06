/**
   * Strip any non-applicable properties
   *
   * @param  {array} array - ...
   * @return {array}       - ...
   */
export const _strip = array => {
    let anchorTitleIndex = array.findIndex(
        item => item.name.toLowerCase() === "index.md"
    );

    if (anchorTitleIndex !== -1) {
        array.unshift(array[anchorTitleIndex]);

        array.splice(anchorTitleIndex + 1, 1);
    }

    return array
        .map(({ title, desc, name, url, group, sort, anchors, children }) => ({
            "title": title || name,
            "content": title || name,
            desc,
            url,
            group,
            sort,
            anchors,
            "children": children ? _strip(children) : [],
        }));
};
