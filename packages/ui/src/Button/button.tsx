import {
  Button as RadixButton,
  Slot,
  type ButtonProps as RadixButtonProps,
} from "@radix-ui/themes";
import type { SlotProps } from "@radix-ui/themes/src/components/text-field.jsx";

interface ButtonProps extends RadixButtonProps {
  asChild?: boolean;
  color?: RadixButtonProps["color"];
  children: RadixButtonProps["children"] & SlotProps["children"];
}

const Button = ({
  type = "button",
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : RadixButton;

  return (
    <Comp type={type} {...props}>
      {children}
    </Comp>
  );
};

export default Button;
