import SvgIcon from "@material-ui/core/SvgIcon";

export function TextIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 28 16">
      <rect class="g" width="14" height="2"/>
      <rect class="g" y="7" width="28" height="2"/>
      <rect class="g" y="14" width="28" height="2"/>
    </SvgIcon>
  )
}
