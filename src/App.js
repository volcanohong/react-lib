import React from 'react';
import { makeStyles, MuiThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import OmButton from './component/OmButton';
import OmSingleSelect from './component/OmSingleSelect';

//Warnings in strict mode https://github.com/mui-org/material-ui/issues/13394
//unstable_createMuiStrictModeTheme as createMuiTheme

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
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00bcff',
        contrastText: '#fff',
      },
      // secondary: {
      //   main: '#3F51B5'
      // }
    }
  });

  const optionsArray = [
    'Option X',
    'Option Y',
    'Option 1',
    'Option 2',
    'Option 3'
  ]

  const optionsObject = [
    { id: 1, name: 'Option 10' },
    { id: 2, name: 'Option 20' },
    { id: 3, name: 'Option 30' },
    { id: 4, name: 'Option 40' },
    { id: 5, name: 'Xy 50' },
    { id: 6, name: 'Xy 60' },
  ]

  const [value1, setValue1] = React.useState(optionsArray[0]);
  const [value2, setValue2] = React.useState(null);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="">
        <header className="om-p-5 om-text-lg">CORE5 Componet Lib</header>

        <div className="om-container om-mx-auto om-px-4 om-space-y-20">
          <div className="om-w-full">
            <span>Omega Single Select</span>
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span className="om-px-r-2">Label: </span>
            <OmSingleSelect
              options={optionsArray}
              value={value1}
              onChange={(event, value) => {
                setValue1(value);
              }}
            >
            </OmSingleSelect>
            <div>{`Selected value: ${value1 ? `${value1}` : 'null'}`}</div>
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span className="om-px-r-2">Label: </span>
            <OmSingleSelect
              options={optionsObject}
              field="name"
              value={value2}
              onChange={(event, value) => {
                setValue2(value);
              }}
              placeholder="Placeholder"
            >
            </OmSingleSelect>
            <div>{`Selected object: ${value2 ? `${JSON.stringify(value2)}` : 'null'}`}</div>
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <OmSingleSelect lable="Lable: Select" options={optionsArray} width="250" ></OmSingleSelect>
          </div>
        </div>

        <div className="om-flex om-flex-row om-my-10">
        </div>

        <div className="om-container om-mx-auto om-px-4 om-space-y-20">
          <div className="om-w-full">
            <span>Omega Multi-Select</span>
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            {/* <OmSingleSelect lable="Lable: Select" options={optionsArray} width="250" multiple></OmSingleSelect> */}
          </div>
        </div>

        <div className="om-flex om-flex-row om-my-20">
        </div>

        <div className="om-container om-mx-auto om-px-4 om-space-y-8">
          <div className="om-w-full">
            <span>Omega Buttons</span>
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span>Style 1: Rounded</span>
            <OmButton name="Primary" onClick={function () { console.log('out click'); }} />
            <OmButton name="Secondary" color="secondary" />
            <OmButton name="Default" color="default" />
            <OmButton name="Disabled" disabled />
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span>Style 2: Square</span>
            <OmButton name="Primary" square="true" />
            <OmButton name="Secondary" square="true" color="secondary" />
            <OmButton name="Default" square="true" color="default" />
            <OmButton name="Disabled" square="true" disabled />
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span>Variant</span>
            <OmButton name="Outlined" square="true" variant="outlined" />
            <OmButton name="Contained" square="true" variant="contained" />
            <OmButton name="Text" square="true" variant="text" />
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span>Size</span>
            <OmButton name="Small" size="small" variant="contained" />
            <OmButton name="Medium" size="medium" variant="contained" />
            <OmButton name="Large" size="large" variant="contained" />
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span>Icon Button</span>
            <OmButton icon="true" name="toc" color="default" />
            <OmButton icon="true" name="schedule" />
            <OmButton icon="true" name="favorite" color="secondary" />
            <OmButton icon="true" name="delete" disabled />
          </div>
          <div className="om-flex om-flex-row om-space-x-6">
            <span>Icon Button - Fab</span>
            <OmButton fab="true" name="toc" />
            <OmButton fab="true" name="schedule" />
            <OmButton fab="true" name="favorite" color="secondary" />
            <OmButton fab="true" name="delete" disabled />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
