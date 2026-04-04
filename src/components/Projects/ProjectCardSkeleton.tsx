const ProjectCardSkeleton = () => {
  return (
    <article className="glass-card rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6 animate-pulse">
      <div className="h-6 w-2/3 rounded bg-zinc-800" />
      <div className="mt-4 h-4 w-full rounded bg-zinc-800" />
      <div className="mt-2 h-4 w-5/6 rounded bg-zinc-800" />

      <div className="mt-5 flex gap-2">
        <div className="h-6 w-20 rounded-full bg-zinc-800" />
        <div className="h-6 w-16 rounded-full bg-zinc-800" />
        <div className="h-6 w-24 rounded-full bg-zinc-800" />
      </div>

      <div className="mt-6 flex gap-4">
        <div className="h-4 w-28 rounded bg-zinc-800" />
        <div className="h-4 w-20 rounded bg-zinc-800" />
      </div>
    </article>
  );
};

export default ProjectCardSkeleton;
