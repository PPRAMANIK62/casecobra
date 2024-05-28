import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MaxWidthWrapper className=" flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
