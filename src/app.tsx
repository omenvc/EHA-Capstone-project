import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Loader from "./components/ui/loader.tsx";
import { routes } from "./constant/routes.ts";
import ErrorBoundary from "./hooks/error-boundary.js";

const PrivateRoute = React.lazy(
  () => import("./components/layouts/private-route.tsx"),
);
const NotFoundPage = React.lazy(() => import("./pages/not-found.tsx"));

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" replace />} />

        {routes.map(({ path, component, protected: isProtected }) => {
          const RouteComponent = component
            ? (
                <Suspense fallback={<Loader />}>
                  {React.createElement(component)}
                </Suspense>
              )
            : null;

          return isProtected
            ? (
                <Route key={path} element={<PrivateRoute />}>
                  <Route path={path} element={RouteComponent} />
                </Route>
              )
            : (
                <Route key={path} path={path} element={RouteComponent} />
              );
        },
        )}

        {/* Catch-all route for 404 page */}
        <Route
          path="*"
          element={(
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          )}
        />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
