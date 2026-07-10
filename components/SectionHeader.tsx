type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
