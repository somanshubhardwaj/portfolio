import React from "react";

const Heading = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 `}>
      {title && <h2 className={`h2`}>{title}</h2>}
    </div>
  );
};

export default Heading;
