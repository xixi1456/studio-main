import clsx from "clsx";

const Container = ({ as: Component = "div", className, innerClassName, children }) => {
  return (
    <Component className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className={clsx("mx-auto w-full max-w-2xl lg:max-w-none", innerClassName)}>
        {children}
      </div>
    </Component>
  );
};

export default Container;
