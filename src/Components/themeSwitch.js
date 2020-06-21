import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const DarkSwitch = withStyles({
  switchBase: {
    color: grey[800],
    '&$checked': {
      color: grey[300],
    },
    '&$checked + $track': {
      backgroundColor: grey[300],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function ThemeSwitch() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<DarkSwitch size="small" checked={state.checkedA} onChange={handleChange} name="checkedA" />}
      />
    </FormGroup>
  );
}
