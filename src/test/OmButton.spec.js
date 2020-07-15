import React from 'react';
import { create } from 'react-test-renderer';
import OmButton from '../@omega/components/button/OmegaButton';

describe('OmButton Component', () => {
    it('it should render a button', () => {
        const button = create(<OmButton />);
        expect(button.toJSON()).toMatchSnapshot();
    });

    it("it should have button name", () => {
        const button = create(<OmButton name='Save' />).root;
        expect(button.props.name).toEqual('Save');
    });

    it("it should have props", () => {
        const button = create(<OmButton color='secondary' variant='contained' />).root;
        expect(button.props.color).toEqual('secondary');
        expect(button.props.variant).toEqual('contained');
    });
});

// better with following
// describe('OmButton Component', () => {
//     it('it should render a button without errors', async () => {
//         const { getByText } = render(<OmButton name='Save'/>);
//         const name = getByText('Save');
//
//         expect(name).toBeTruthy();
//     });
//
//     // it("it should have props", () => {
//     //     const {button} = render(<OmButton color='secondary' variant='contained'/>).root;
//     //     expect(button.props.color).toEqual('secondary');
//     //     expect(button.props.variant).toEqual('contained');
//     // });
// });

