export default function Breadcrumb(props: {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div
      className={`text-sm breadcrumbs p-8 pl-8 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
