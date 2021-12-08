import { Container } from "@chakra-ui/layout";
import React from "react";

interface ContainerComponentProps {
  width?: string | number;
  height?: string | number;
}

export const ContainerComponent = ({
  width,
  height,
}: ContainerComponentProps) => {
  return <Container maxW={width} maxH={height} />;
};
