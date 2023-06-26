export default function Panel(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-zinc-600 bg-zinc-800 ${props.className}`}>
      {props.children}
    </div>
  );
}
