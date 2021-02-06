import { useEffect } from "react";
import isClient from "_utils/isClient";

const withServiceWorker = WrappedComponent =>
    function ServiceWorkerRegister(props) {
        useEffect(() => {
            if (isClient) {
                if (__PROD__) {
                    // only register sw.js in production
                    if ("serviceWorker" in navigator) {
                        // dynamic load sw https://developers.google.com/web/tools/workbox/modules/workbox-window
                        import("workbox-window/Workbox.mjs").then(({ Workbox }) => {
                            const wb = new Workbox("/sw.js");

                            // listen to `waiting` event
                            wb.addEventListener("waiting", () => {
                                // log and show updateBox
                                console.log(
                                    "A new service worker has installed, but it can't activate until all tabs \
                                    running the current version have been unloaded"
                                );
                            });

                            // register the service worker
                            wb.register();
                        });
                    }
                }
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

export default withServiceWorker;
