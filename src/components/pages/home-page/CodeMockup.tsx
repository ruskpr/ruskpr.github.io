import { Button, ButtonType, ButtonSize } from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let noPressed = false;

export default function CodeMockup() {
  const navigate = useNavigate();

  const codeTextTarget = `npm i ruskpr-projects`;
  const [state, setState] = useState({
    showHtml1: false,
    showHtml2: false,
    toggleCaret: false,
    codeText: "",
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      for (let i = 0; i < codeTextTarget.length; i++) {
        if (state.codeText.length === codeTextTarget.length) continue;
        setTimeout(() => {
          setState({
            ...state,
            codeText: (state.codeText += codeTextTarget[i]),
          });
        }, 150 * i);
      }
    }, 1000);

    const timer2 = setTimeout(() => {
      setState({
        ...state,
        showHtml2: true,
      });
    }, 6000);

    return () => clearTimeout(timer1);
    return () => clearTimeout(timer2);
  }, []);

  const handleYesClicked = () => {
    navigate("/projects");
  };

  const handleNoClicked = () => {};

  return (
    <div className="bg-neutral-700 p-6 rounded-3xl text-md lg:text-3xl overflow-auto z-0">
      <pre data-prefix=">">
        <span>{"> "}</span>
        <code>{state.codeText}</code>
      </pre>
      {state.codeText.length === codeTextTarget.length && (
        <pre data-prefix=">" className="text-warning">
          <span>{"> "}</span>
          <code>installing...</code>
        </pre>
      )}
      {state.showHtml2 && (
        <div>
          <pre data-prefix=">" className="text-success">
            <span>{"> "}</span>
            <code>Done!</code>
          </pre>
          <pre data-prefix=">" className="flex items-center text-violet-400">
            <span>{"> "}</span>
            <code className="flex items-center">
              View projects? [
              <Button
                type={ButtonType.Secondary}
                size={ButtonSize.lg}
                onClick={handleYesClicked}
              >
                y
              </Button>
              /
              <Button
                type={ButtonType.Secondary}
                size={ButtonSize.lg}
                onClick={handleNoClicked}
              >
                n
              </Button>
              ]
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
