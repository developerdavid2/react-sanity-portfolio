export default function AmbientBeam({
  color = "#ffffff",
  opacity = 0.5,
  position = {},
  className = "",
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      aria-hidden
      style={{
        ...position,
        width: "600px",
        height: "600px",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: "blur(80px)",
        zIndex: 0,
      }}
    />
  );
}
