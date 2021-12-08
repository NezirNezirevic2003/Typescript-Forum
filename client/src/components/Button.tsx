import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  color?: string;
  text: string;
  size?: string;
  variant?: string;
  mr?: string | number;
  ml?: string | number;
  width?: string | number;
  margintop?: string | number;
  fontsize?: string | number;
  value?: string;
  type?: "submit" | "button" | "reset";
  float?: "left" | "right";
  height?: string | number;
}

export const ButtonComponent = ({
  color,
  text,
  size,
  variant,
  mr,
  ml,
  width,
  margintop,
  fontsize,
  type,
  float,
  height,
}: ButtonProps) => {
  return (
    <Button
      fontSize={fontsize}
      type={type}
      mt={margintop}
      w={width}
      mr={mr}
      ml={ml}
      variant={variant}
      colorScheme={color}
      size={size}
      float={float}
      height={height}
    >
      {text}
    </Button>
  );
};
