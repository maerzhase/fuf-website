import Container from './container'
import { EXAMPLE_PATH } from '@/api/constants'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const LINKS = ['instagram', 'facebook', 'datenschutz', 'impressum']


export default function Footer() {
  return (
    <footer>
      <Box mt={10} display="flex" alignItems="center" width="100%">
        <Box flexGrow={1} display="flex" alignItems="center">
          <Typography variant="subtitle1"> &copy; {new Date().getFullYear()} Frauen und Fiktion</Typography>
        </Box>
        <Box>
          {LINKS.map(l => <Button key={l} size="small">{l}</Button>)}
        </Box>
      </Box>
    </footer>
  )
}
