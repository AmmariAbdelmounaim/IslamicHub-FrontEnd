import { MouseEventHandler } from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface MenuToggleProps {
  toggle: MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}
const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <div
      onClick={toggle}
      className="flex items-center cursor-pointer z-20 h-full"
    >
      <svg width="32" height="32" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "#362A1C", opacity: 1 },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#362A1C", opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#362A1C"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              d: "M 2 16.346 L 20 16.346",
              stroke: "#362A1C",
              opacity: 1,
            },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#362A1C", opacity: 0 },
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
};

export default MenuToggle;
