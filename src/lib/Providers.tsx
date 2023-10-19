"use client";

import {store} from "@/redux/store";
import {Provider} from "react-redux";
import {ChakraProviders} from "@/lib/ChakraProviders";

const Providers = ({children}: { children: React.ReactNode }) => {
   return (
      <Provider store={store}>
         <ChakraProviders>{children}</ChakraProviders>
      </Provider>
   );
};

export default Providers;