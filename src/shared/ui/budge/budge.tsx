import React from "react";
import { cn } from '../../lib/utils/utils';

type TPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface Props {
  children: React.ReactNode;
  count?: number;
  showZero?: boolean;
  max?: number;
  color?: string;
  wrapperClass?: string;
  budgeClass?: string;
  show?: boolean;
  position?: TPosition;
}

const Badge: React.FC<Props> = (props) => {
  const {
    children,
    count,
    show = false,
    max = 99,
    wrapperClass,
    budgeClass,
    position = "top-right",
  } = props;
  const displayCount =
    typeof count === "number" && count > max ? `${max}+` : count;

  const visible = Boolean((show && !count) || (!show && count))

  const mods = {
    'block w-2 h-2': !count && show,
    'px-1.5 py-0.5': count,
    "-top-0 -right-0": position === 'top-right',
    "-top-0 -left-0": position === 'top-left',
    "bottom-0 -right-0": position === 'bottom-right',
    "bottom-0 -left-0": position === 'bottom-left',
  };

  return (
    <div className={cn("relative", wrapperClass)}>
      {children}
      {visible && (
        <span
          className={cn(
            "absolute text-xs text-white rounded-full bg-primary",
            mods,
            budgeClass,
          )}
        >
          {displayCount}
        </span>
      )}
    </div>
  );
};

export default React.memo(Badge);
