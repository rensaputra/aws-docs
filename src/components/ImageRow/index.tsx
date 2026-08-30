import React, { isValidElement } from "react";
import type { ReactNode } from "react";

interface ImageProps {
  alt?: string;
  [key: string]: unknown;
}

interface ImageRowProps {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}

export default function ImageRow({
  children,
  className = "",
  ...rest
}: ImageRowProps) {
  const baseClasses = "flex justify-center gap-4 flex-wrap";
  const combinedClasses = `${baseClasses}${className ? ` ${className}` : ""}`;

  return (
    <div className={combinedClasses} {...rest}>
      {React.Children.map(children, (child) => {
        if (!isValidElement<ImageProps>(child)) return null;

        const altText = child.props.alt;

        return (
          <figure className="flex flex-1 flex-col items-center min-w-[200px] m-0">
            {child}
            {altText && (
              <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                {altText}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
