import React, { Suspense } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Index from "@/Pages/Index"

// const Index = React.lazy(
//   () => import(/* webpackChunkName: 'homePage' */ "../Pages/Index")
// );

const RootRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default RootRouter;
