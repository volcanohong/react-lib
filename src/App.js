import React from 'react';
import OmButton from './component/OmButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="">
      <header className="om-p-5 om-text-lg">CORE5 Componet Lib</header>
      <div className="om-container om-mx-auto om-px-4">
        <div className="om-w-full om-py-5 om-px-2">
          <span>Omega Buttons</span>
        </div>
        <div className="om-flex om-flex-row">
          <OmButton className="om-px-2 om-py-4" name="Primary" onClick={function () { console.log('out click'); }} />
          <OmButton className="om-px-2 om-py-4" name="Secondary" color="secondary" />
          <OmButton className="om-px-2 om-py-4" name="Default" color="default" />
          <OmButton className="om-px-2 om-py-4" name="Disabled" disabled />
          {/* <input accept="image/*" className="om-hidden" type="file" id="btn-file-upload"/>
          <lable htmlFor="btn-file-upload">
            <OmButton className="om-px-2 om-py-4" name="Upload" color="primary" component="span" />
          </lable> */}
        </div>
        <div className="om-flex om-flex-row">
          <OmButton className="om-px-2 om-py-4" name="Outlined" variant="outlined" />
          <OmButton className="om-px-2 om-py-4" name="Contained" variant="contained" />
          <OmButton className="om-px-2 om-py-4" name="Text" variant="text" />
        </div>
        <div className="om-flex om-flex-row">
          <OmButton className="om-px-2 om-py-4" name="Small" size="small" />
          <OmButton className="om-px-2 om-py-4" name="Medium" size="medium" />
          <OmButton className="om-px-2 om-py-4" name="Large" size="large" />
        </div>
        <div className="om-flex om-flex-row">
          <OmButton className="om-px-2 om-py-4" icon="true" name="toc" color="default"/>
          <OmButton className="om-px-2 om-py-4" icon="true" name="schedule" />
          <OmButton className="om-px-2 om-py-4" icon="true" name="favorite" color="secondary"/>
          <OmButton className="om-px-2 om-py-4" icon="true" name="delete" disabled/>
        </div>
      </div>
    </div>
  );
}

export default App;
