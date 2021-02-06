/**
 * To ease debugging, choose a display name that communicates that it’s the result of a HOC.
 */
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default getDisplayName;
