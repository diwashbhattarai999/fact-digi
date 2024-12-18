import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>('TOP');

  const rotateDirection = React.useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Array<Direction> = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    },
    [clockwise]
  );

  const movingMap: Record<Direction, string> = {
    TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(255, 255%,30%) 0%, rgba(255, 255, 255, 0) 100%)',
    LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(255, 255%,40%) 0%, rgba(255, 255, 255, 0) 100%)',
    BOTTOM:
      'radial-gradient(20.7% 50% at 50% 100%, hsl(255, 255%,50%) 0%, rgba(255, 255, 255, 0) 100%)',
    RIGHT:
      'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(255, 255%,60%) 0%, rgba(255, 255, 255, 0) 100%)',
  };

  const highlight =
    'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)';

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [duration, hovered, rotateDirection]);
  return (
    <Tag
      className={cn(
        'relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full border bg-background/20 decoration-clone p-px transition duration-500 hover:bg-background/10',
        containerClassName
      )}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] bg-background px-4 py-2 text-foreground',
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn('absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]')}
        initial={{ background: movingMap[direction] }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <div className="z-1 absolute inset-[2px] flex-none rounded-[100px] bg-background/10 backdrop-blur-md" />
    </Tag>
  );
}
