export default function TagBadge(props: { tag: string }) {
  return (
    <div className="badge border-0 bg-blue-700 text-white py-2 font-primary">
      {props.tag}
    </div>
  );
}
