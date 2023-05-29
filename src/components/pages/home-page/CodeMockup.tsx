import { Button, ButtonType, ButtonSize } from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CodeMockup() {
  const navigate = useNavigate();

  const codeTextTarget: string = `install ruskpr-projects`;
  const [state, setState] = useState({
    showHtml1: false,
    showHtml2: false,
    toggleCaret: false,
    codeText: "",
    hidden: false,
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

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleYesClicked = () => {
    navigate("/projects");
  };

  const handleNoClicked = () => {
    setState({
      ...state,
      hidden: true,
    });
  };

  return (
    <div
      className={` ${
        state.hidden && "hidden"
      } mockup-code rounded-3xl text-md lg:text-xl overflow-auto z-0`}
    >
      <pre data-prefix=">">
        <code>{state.codeText}</code>
      </pre>
      {state.codeText.length === codeTextTarget.length && (
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
      )}
      {state.showHtml2 && (
        <div>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
          <pre
            data-prefix=">"
            className="flex items-center text-white animate-pulse bg-blue-600 text-warning-conten"
          >
            <code className="flex items-center">
              View projects? [
              <Button
                type={ButtonType.Link}
                size={ButtonSize.lg}
                onClick={handleYesClicked}
                className="hover:text-black"
              >
                y
              </Button>
              /
              <Button
                type={ButtonType.Link}
                size={ButtonSize.lg}
                onClick={handleNoClicked}
                className="hover:text-black"
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
