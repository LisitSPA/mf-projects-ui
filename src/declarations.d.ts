declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "@react-gufo-mf/style-guide-ui" {
  import React, { ReactNode } from "react";
  interface IntlGlobalProviderProps {
    locale: string;
    messages: Record<string, string>;
    children: ReactNode;
  }
  export class PageNotFound extends React.Component<any> {}
  export class RoutesWithNotFound extends React.Component<any> {}
  export class ErrorBoundary extends React.Component<any> {}
  export class IntlGlobalProvider extends React.Component<IntlGlobalProviderProps> {}
  export const useTranslations: () => {
    language: string;
    changeLanguage: (lng: string) => void;
  };
}
