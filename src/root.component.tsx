import {
  ErrorBoundary,
  IntlGlobalProvider,
  useTranslations,
} from "@react-gufo-mf/style-guide-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Home from "./pages/Home";
import { messages } from "../i18n/locales";

export default function Root() {
  const { language } = useTranslations();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retry: 1,
        retryDelay: (attempt) => attempt * 1000,
      },
    },
  });

  return (
    <Suspense fallback={<span>Cargando..</span>}>
      <ErrorBoundary>
        <IntlGlobalProvider locale={language} messages={messages[language]}>
          <QueryClientProvider client={queryClient}>
            <Home />
          </QueryClientProvider>
        </IntlGlobalProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
