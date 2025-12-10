import { useEffect, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
  prefix?: string;
  formatValue?: (n: number) => string;
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1200,
  prefix = "",
  formatValue,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  
  const display = formatValue
    ? formatValue(count)
    : count.toLocaleString();

  return (
    <span>
      {prefix}
      {display}
    </span>
  );
};

export default AnimatedNumber;

