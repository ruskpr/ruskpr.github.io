export default function TagBadge(props: { tag: string }) {
  return (
    <div className="badge border-0 bg-indigo-500 text-white py-2 font-pridmary">
      {props.tag}
    </div>
  );
}
