import { cn } from "@/lib/utils";

/**
 * Brand logo using the official Aqua360 artwork (public/logo.png).
 * On dark surfaces it sits in a white chip for legibility.
 */
export function Logo({
  className,
  imgClassName,
  onDark = false,
}: {
  className?: string;
  imgClassName?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl px-2.5 py-1.5",
        onDark && "bg-white shadow-sm",
        className
      )}
    >
      { }
      <img
        src="/logo.png"
        alt="Aqua360 — Swimming pool construction"
        className={cn("h-9 w-auto md:h-11", imgClassName)}
      />
    </span>
  );
}
