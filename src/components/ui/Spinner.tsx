import { CgSpinnerAlt } from "react-icons/cg";

export default function Spinner(props: { size: number }) {
  return (
    <div className="flex justify-center items-center">
      <CgSpinnerAlt
        className={`animate-spin text-${props.size.toString()}xl`}
      />
    </div>
  );
}
