import React from 'react';
import { create, fireEvent, waitForElement } from 'react-test-renderer';
import OmMultiSelect from '../component/OmMultiSelect';

describe('OmMultiSelect Component', () => {
    const mockedOptions = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6'
    ];
    it('it should render a multi-select', () => {
        const select = create(<OmMultiSelect options={mockedOptions} />);
        expect(select.toJSON()).toMatchSnapshot();
    });

    it("it should have props", () => {
        const select = create(<OmMultiSelect options={[]} label='Lable' placeholder='Placeholder' />).root;
        expect(select.props.options).toEqual([]);
        expect(select.props.placeholder).toEqual('Placeholder');
    });



    // it("it should have options and value", () => {
    //     const mockedOnChange = jest.fn();
    //     const select = create(<OmMultiSelect options={mockedOptions} value={mockedOptions[0]} onChange={mockedOnChange} />).root;
    //     expect(select.props.options).toEqual(mockedOptions);
    //     expect(select.props.value).toEqual(mockedOptions[0]);

    //     const selectComponent = select.children[0];
    //     expect(selectComponent).toBeDefined();
    //     expect(selectComponent).not.toBeNull();
    //     expect(mockedOnChange).toHaveBeenCalledTimes(0);
    // });
});