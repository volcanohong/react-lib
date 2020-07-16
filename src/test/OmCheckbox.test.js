import React from 'react';
import { create } from 'react-test-renderer';
import OmCheckbox from '../component/OmCheckbox';

describe('OmCheckbox Component', () => {
    it('it should render a button', () => {
        const button = create(<OmCheckbox />);
        expect(button.toJSON()).toMatchSnapshot();
    });

    it("it should have props", () => {
        const button = create(<OmCheckbox color='secondary' size='small' />).root;
        expect(button.props.color).toEqual('secondary');
        expect(button.props.size).toEqual('small');
    });
});