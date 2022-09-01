import SvgIcon from "@material-ui/core/SvgIcon";

export function PlayIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 28 23" style={{fill: "none", stroke: "currentColor", strokeWidth: 2}}>
      <path className="e" d="M0,23V0L28,11.5,0,23Z" />
    </SvgIcon>
  );
}
