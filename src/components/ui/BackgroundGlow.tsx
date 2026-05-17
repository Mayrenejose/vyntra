"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Glow 1 */}
      <div className="
        absolute
        w-[700px] h-[700px]

        bg-purple-500/30
        blur-[120px]
        rounded-full

        top-[-150px] left-[-150px]
      " />

      {/* Glow 2 */}
      <div className="
        absolute
        w-[600px] h-[600px]

        bg-indigo-500/25
        blur-[120px]
        rounded-full

        bottom-[-150px] right-[-150px]
      " />

      {/* Glow central (más visible) */}
      <div className="
        absolute
        w-[500px] h-[500px]

        bg-violet-400/20
        blur-[100px]
        rounded-full

        top-[50%] left-[50%]
        -translate-x-1/2 -translate-y-1/2
      " />

    </div>
  );
}