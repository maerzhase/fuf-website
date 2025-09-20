import SvgIcon from "@mui/material/SvgIcon";

export function TextIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 28 16">
      <rect className="g" width="14" height="2" />
      <rect className="g" y="7" width="28" height="2" />
      <rect className="g" y="14" width="28" height="2" />
    </SvgIcon>
  );
}
