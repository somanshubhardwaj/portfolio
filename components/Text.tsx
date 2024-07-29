import { VelocityScroll } from "@/components/magicui/ScrollingText";

export function ScrollText() {
  return (
    <VelocityScroll
      text="Velocity Scroll"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-white/10 md:text-7xl md:leading-[5rem] relative -z-10"
    />
  );
}
