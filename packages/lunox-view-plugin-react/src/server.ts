import { makeRenderTransform, type TransformViewServer } from "@lunoxjs/view";
import ReactDomServer from "react-dom/server";
import { createElement } from "react";
import { createInertiaApp } from "@inertiajs/react";
import { SetupOptions } from "@inertiajs/react/types/createInertiaApp";

/**
 * transform view with react engine
 */
const transformView: TransformViewServer = async (View, page) => {
  if (View.layout) {
    View.default.layout = (children: any) =>
      createElement(View.layout, children.props, children);
  }
  const { head, body: html } = await createInertiaApp({
    page,
    render: ReactDomServer.renderToString as any,
    resolve: () => View,
    setup: ({ App, props }: SetupOptions<null,any>) => {
      return createElement(App as any, props) as any;
    },
  })
  return {
    html,
    head,
  };
};

/**
 * render method used in vite ssr
 */
export const makeRender = makeRenderTransform(transformView);
