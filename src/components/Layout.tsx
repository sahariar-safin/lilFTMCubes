import React from "react";
import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from '../utilities/Navbar'


type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Navbar />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="#2ea1db"
      >
        {children}

      </Flex>
    </React.Fragment>
  );
}
